const nodemailer = require('nodemailer');
const twilio = require('twilio');
const prisma = require('../prisma');

class NotificationService {
  constructor() {
    this.initializeEmailTransporter();
    this.initializeSMSClient();
  }

  initializeEmailTransporter() {
    // Email configuration - supports multiple providers
    const emailConfig = {
      // Gmail configuration
      gmail: {
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_APP_PASSWORD // Use App Password, not regular password
        }
      },
      // SendGrid configuration
      sendgrid: {
        host: 'smtp.sendgrid.net',
        port: 587,
        secure: false,
        auth: {
          user: 'apikey',
          pass: process.env.SENDGRID_API_KEY
        }
      },
      // Mailgun configuration
      mailgun: {
        host: 'smtp.mailgun.org',
        port: 587,
        secure: false,
        auth: {
          user: process.env.MAILGUN_SMTP_USER,
          pass: process.env.MAILGUN_SMTP_PASSWORD
        }
      },
      // Generic SMTP configuration
      smtp: {
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD
        }
      }
    };

    // Choose email provider based on environment variable
    const provider = process.env.EMAIL_PROVIDER || 'gmail';
    const config = emailConfig[provider];

    if (config && config.auth.user && config.auth.pass) {
      this.emailTransporter = nodemailer.createTransport(config);
      console.log(`✅ Email service initialized with ${provider}`);
    } else {
      console.log(`⚠️ Email service not configured. Set EMAIL_PROVIDER and credentials in .env`);
      this.emailTransporter = null;
    }
  }

  initializeSMSClient() {
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;

    // Validate Twilio credentials format
    if (accountSid && authToken && accountSid.startsWith('AC') && authToken.length > 10) {
      try {
        this.smsClient = twilio(accountSid, authToken);
        console.log('✅ SMS service initialized with Twilio');
      } catch (error) {
        console.log('❌ SMS service initialization failed:', error.message);
        this.smsClient = null;
      }
    } else {
      console.log('⚠️ SMS service not configured. Set valid TWILIO_ACCOUNT_SID (starts with AC) and TWILIO_AUTH_TOKEN in .env');
      this.smsClient = null;
    }
  }

  // Get applicant's notification settings
  async getApplicantSettings(applicantId) {
    try {
      const settings = await prisma.notificationSettings.findUnique({
        where: { applicantId: applicantId }
      });
      
      // Return default settings if none exist
      return settings || {
        emailEnabled: true,
        emailJobMatches: true,
        emailApplicationStatus: true,
        emailInterviews: true,
        smsEnabled: false,
        smsApplicationStatus: false,
        smsInterviews: false,
        smsUrgent: false
      };
    } catch (error) {
      console.error('Error fetching notification settings:', error);
      return null;
    }
  }

  // Send email notification
  async sendEmail(to, subject, htmlContent, textContent = null) {
    if (!this.emailTransporter) {
      console.log('📧 Email not sent - service not configured');
      return { success: false, error: 'Email service not configured' };
    }

    try {
      const mailOptions = {
        from: process.env.EMAIL_FROM || process.env.GMAIL_USER || 'noreply@jobmatch.com',
        to: to,
        subject: subject,
        html: htmlContent,
        text: textContent || htmlContent.replace(/<[^>]*>/g, '') // Strip HTML for text version
      };

      const result = await this.emailTransporter.sendMail(mailOptions);
      console.log(`✅ Email sent to ${to}: ${subject}`);
      return { success: true, messageId: result.messageId };
    } catch (error) {
      console.error('❌ Email sending failed:', error);
      return { success: false, error: error.message };
    }
  }

  // Send SMS notification
  async sendSMS(to, message) {
    if (!this.smsClient) {
      console.log('📱 SMS not sent - service not configured');
      return { success: false, error: 'SMS service not configured' };
    }

    try {
      const result = await this.smsClient.messages.create({
        body: message,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: to
      });

      console.log(`✅ SMS sent to ${to}: ${message.substring(0, 50)}...`);
      return { success: true, sid: result.sid };
    } catch (error) {
      console.error('❌ SMS sending failed:', error);
      return { success: false, error: error.message };
    }
  }

  // Send job match notification
  async notifyJobMatch(applicantId, jobTitle, companyName, jobId) {
    try {
      const applicant = await prisma.applicant.findUnique({
        where: { id: applicantId },
        include: { user: true }
      });

      if (!applicant) return;

      const settings = await this.getApplicantSettings(applicantId);
      if (!settings) return;

      const email = applicant.user.email;
      const phone = applicant.phone;

      // Send email notification
      if (settings.emailEnabled && settings.emailJobMatches && email) {
        const subject = `New Job Match: ${jobTitle} at ${companyName}`;
        const htmlContent = `
          <h2>🎯 New Job Match Found!</h2>
          <p>Hi ${applicant.fullName},</p>
          <p>We found a job that matches your skills and preferences:</p>
          <div style="border: 1px solid #ddd; padding: 15px; margin: 15px 0; border-radius: 5px;">
            <h3>${jobTitle}</h3>
            <p><strong>Company:</strong> ${companyName}</p>
            <p><a href="${process.env.FRONTEND_URL}/jobs/${jobId}" style="background: #16a34a; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">View Job Details</a></p>
          </div>
          <p>Best regards,<br>Job Match Team</p>
        `;
        
        await this.sendEmail(email, subject, htmlContent);
      }

      // Send SMS notification
      if (settings.smsEnabled && phone) {
        const message = `Job Match Alert: ${jobTitle} at ${companyName}. View details at ${process.env.FRONTEND_URL}/jobs/${jobId}`;
        await this.sendSMS(phone, message);
      }

    } catch (error) {
      console.error('Error sending job match notification:', error);
    }
  }

  // Send application status notification
  async notifyApplicationStatus(applicationId, status) {
    try {
      const application = await prisma.application.findUnique({
        where: { id: applicationId },
        include: {
          applicant: { include: { user: true } },
          job: { include: { employer: true } }
        }
      });

      if (!application) return;

      const settings = await this.getApplicantSettings(application.applicantId);
      if (!settings) return;

      const email = application.applicant.user.email;
      const phone = application.applicant.phone;
      const jobTitle = application.job.title;
      const companyName = application.job.employer.companyName;

      // Send email notification
      if (settings.emailEnabled && settings.emailApplicationStatus && email) {
        const statusText = status === 'ACCEPTED' ? 'Accepted' : 'Updated';
        const subject = `Application ${statusText}: ${jobTitle}`;
        const htmlContent = `
          <h2>📋 Application Status Update</h2>
          <p>Hi ${application.applicant.fullName},</p>
          <p>Your application status has been updated:</p>
          <div style="border: 1px solid #ddd; padding: 15px; margin: 15px 0; border-radius: 5px;">
            <h3>${jobTitle}</h3>
            <p><strong>Company:</strong> ${companyName}</p>
            <p><strong>Status:</strong> <span style="color: ${status === 'ACCEPTED' ? '#16a34a' : '#dc2626'}; font-weight: bold;">${status}</span></p>
          </div>
          <p>Best regards,<br>Job Match Team</p>
        `;
        
        await this.sendEmail(email, subject, htmlContent);
      }

      // Send SMS notification
      if (settings.smsEnabled && settings.smsApplicationStatus && phone) {
        const message = `Application Update: Your application for ${jobTitle} at ${companyName} is now ${status}.`;
        await this.sendSMS(phone, message);
      }

    } catch (error) {
      console.error('Error sending application status notification:', error);
    }
  }

  // Send interview invitation notification
  async notifyInterviewInvitation(interviewId) {
    try {
      const interview = await prisma.interview.findUnique({
        where: { id: interviewId },
        include: {
          application: {
            include: {
              applicant: { include: { user: true } },
              job: { include: { employer: true } }
            }
          }
        }
      });

      if (!interview) return;

      const settings = await this.getApplicantSettings(interview.application.applicantId);
      if (!settings) return;

      const email = interview.application.applicant.user.email;
      const phone = interview.application.applicant.phone;
      const jobTitle = interview.application.job.title;
      const companyName = interview.application.job.employer.companyName;

      // Send email notification
      if (settings.emailEnabled && settings.emailInterviews && email) {
        const subject = `Interview Invitation: ${jobTitle}`;
        const htmlContent = `
          <h2>🎉 Interview Invitation!</h2>
          <p>Hi ${interview.application.applicant.fullName},</p>
          <p>Congratulations! You've been invited for an interview:</p>
          <div style="border: 1px solid #ddd; padding: 15px; margin: 15px 0; border-radius: 5px;">
            <h3>${jobTitle}</h3>
            <p><strong>Company:</strong> ${companyName}</p>
            <p><strong>Date:</strong> ${new Date(interview.scheduledAt).toLocaleDateString()}</p>
            <p><strong>Time:</strong> ${new Date(interview.scheduledAt).toLocaleTimeString()}</p>
            ${interview.location ? `<p><strong>Location:</strong> ${interview.location}</p>` : ''}
            ${interview.notes ? `<p><strong>Notes:</strong> ${interview.notes}</p>` : ''}
          </div>
          <p>Best regards,<br>Job Match Team</p>
        `;
        
        await this.sendEmail(email, subject, htmlContent);
      }

      // Send SMS notification (urgent)
      if (settings.smsEnabled && settings.smsInterviews && phone) {
        const date = new Date(interview.scheduledAt).toLocaleDateString();
        const time = new Date(interview.scheduledAt).toLocaleTimeString();
        const message = `Interview Invitation: ${jobTitle} at ${companyName} on ${date} at ${time}. Check your email for details.`;
        await this.sendSMS(phone, message);
      }

    } catch (error) {
      console.error('Error sending interview invitation notification:', error);
    }
  }
}

module.exports = new NotificationService();
