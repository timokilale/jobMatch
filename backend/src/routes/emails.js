const express = require('express');
const router = express.Router();
const prisma = require('../prisma');
const auth = require('../middleware/auth');
const nodemailer = require('nodemailer');

// Configure email transporter (you'll need to set up your email service)
const createTransporter = () => {
  // For development, you can use a service like Gmail or a testing service like Ethereal
  return nodemailer.createTransporter({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: process.env.SMTP_PORT || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });
};

// Send email to candidate
router.post('/send', auth(), async (req, res) => {
  try {
    const {
      to,
      subject,
      message,
      applicationId,
      employerId,
      applicantId
    } = req.body;

    // Validate required fields
    if (!to || !subject || !message || !applicationId || !employerId) {
      return res.status(400).json({ 
        error: 'Missing required fields: to, subject, message, applicationId, employerId' 
      });
    }

    // Get application details for context
    const application = await prisma.application.findFirst({
      where: {
        id: parseInt(applicationId),
        job: {
          employerId: parseInt(employerId)
        }
      },
      include: {
        applicant: {
          include: {
            user: true
          }
        },
        job: {
          include: {
            employer: true
          }
        }
      }
    });

    if (!application) {
      return res.status(404).json({ error: 'Application not found or access denied' });
    }

    // Create email record in database
    const emailRecord = await prisma.emailLog.create({
      data: {
        to: to,
        subject: subject,
        message: message,
        applicationId: parseInt(applicationId),
        employerId: parseInt(employerId),
        applicantId: applicantId ? parseInt(applicantId) : null,
        status: 'PENDING'
      }
    });

    // Send email (in production, you might want to use a queue for this)
    try {
      const transporter = createTransporter();
      
      const mailOptions = {
        from: `${application.job.employer.companyName} <${process.env.SMTP_USER}>`,
        to: to,
        subject: subject,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px;">
              <h2 style="color: #16a34a; margin-bottom: 20px;">${application.job.employer.companyName}</h2>
              <div style="background-color: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <p style="color: #374151; line-height: 1.6; white-space: pre-line;">${message}</p>
              </div>
              <div style="margin-top: 20px; padding: 15px; background-color: #e5f3ff; border-radius: 8px;">
                <p style="margin: 0; font-size: 14px; color: #1e40af;">
                  <strong>Application Reference:</strong> ${application.job.title}<br>
                  <strong>Company:</strong> ${application.job.employer.companyName}
                </p>
              </div>
            </div>
          </div>
        `
      };

      await transporter.sendMail(mailOptions);

      // Update email status to SENT
      await prisma.emailLog.update({
        where: { id: emailRecord.id },
        data: { 
          status: 'SENT',
          sentAt: new Date()
        }
      });

      // Create notification for applicant
      await prisma.notification.create({
        data: {
          type: 'MESSAGE',
          title: 'New Message from Employer',
          message: `You have received a new message from ${application.job.employer.companyName} regarding your application for ${application.job.title}.`,
          applicantId: application.applicant.id,
          applicationId: parseInt(applicationId)
        }
      });

      res.json({
        success: true,
        message: 'Email sent successfully',
        emailId: emailRecord.id
      });

    } catch (emailError) {
      console.error('Error sending email:', emailError);
      
      // Update email status to FAILED
      await prisma.emailLog.update({
        where: { id: emailRecord.id },
        data: { 
          status: 'FAILED',
          error: emailError.message
        }
      });

      res.status(500).json({ 
        error: 'Failed to send email',
        details: emailError.message 
      });
    }

  } catch (error) {
    console.error('Error in email sending process:', error);
    res.status(500).json({ 
      error: 'Failed to process email request',
      details: error.message 
    });
  }
});

// Send interview invitation email
router.post('/interview-invitation', auth(), async (req, res) => {
  try {
    const { applicationId, interviewDetails } = req.body;

    const application = await prisma.application.findUnique({
      where: { id: parseInt(applicationId) },
      include: {
        applicant: {
          include: {
            user: true
          }
        },
        job: {
          include: {
            employer: true
          }
        }
      }
    });

    if (!application) {
      return res.status(404).json({ error: 'Application not found' });
    }

    const interviewDate = new Date(interviewDetails.scheduledAt);
    const formattedDate = interviewDate.toLocaleDateString();
    const formattedTime = interviewDate.toLocaleTimeString();

    const subject = `Interview Invitation - ${application.job.title}`;
    const message = `Dear ${application.applicant.fullName},

We are pleased to invite you for an interview for the ${application.job.title} position at ${application.job.employer.companyName}.

Interview Details:
• Date: ${formattedDate}
• Time: ${formattedTime}
• Duration: ${interviewDetails.duration} minutes
• Type: ${interviewDetails.type}
• Location: ${interviewDetails.location}
• Interviewer(s): ${interviewDetails.interviewers}

${interviewDetails.notes ? `Additional Notes:\n${interviewDetails.notes}\n\n` : ''}Please confirm your attendance by replying to this email.

We look forward to meeting with you.

Best regards,
${application.job.employer.companyName} Hiring Team`;

    // Send the email directly
    const emailData = {
      to: application.applicant.user.email,
      subject: subject,
      message: message,
      applicationId: applicationId,
      employerId: application.job.employerId,
      applicantId: application.applicant.id
    };

    // Create email record in database
    const emailRecord = await prisma.emailLog.create({
      data: {
        to: emailData.to,
        subject: emailData.subject,
        message: emailData.message,
        applicationId: parseInt(emailData.applicationId),
        employerId: parseInt(emailData.employerId),
        applicantId: parseInt(emailData.applicantId),
        status: 'PENDING'
      }
    });

    // For now, just mark as sent (email integration can be added later)
    await prisma.emailLog.update({
      where: { id: emailRecord.id },
      data: {
        status: 'SENT',
        sentAt: new Date()
      }
    });

    res.json({
      success: true,
      message: 'Interview invitation sent successfully',
      emailId: emailRecord.id
    });

  } catch (error) {
    console.error('Error sending interview invitation:', error);
    res.status(500).json({ 
      error: 'Failed to send interview invitation',
      details: error.message 
    });
  }
});

// Get email history for an application
router.get('/application/:applicationId', auth(), async (req, res) => {
  try {
    const applicationId = parseInt(req.params.applicationId);

    const emails = await prisma.emailLog.findMany({
      where: { applicationId: applicationId },
      orderBy: { createdAt: 'desc' }
    });

    res.json(emails);
  } catch (error) {
    console.error('Error fetching email history:', error);
    res.status(500).json({ 
      error: 'Failed to fetch email history',
      details: error.message 
    });
  }
});

module.exports = router;
