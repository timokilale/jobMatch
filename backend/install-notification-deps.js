// Run this script to install notification dependencies
// npm install nodemailer twilio

console.log('Installing notification dependencies...');
console.log('Run: npm install nodemailer twilio');
console.log('');
console.log('Environment variables needed:');
console.log('');
console.log('# Email Configuration (choose one)');
console.log('EMAIL_PROVIDER=gmail # or sendgrid, mailgun, smtp');
console.log('EMAIL_FROM=your-email@domain.com');
console.log('');
console.log('# Gmail (easiest setup)');
console.log('GMAIL_USER=your-gmail@gmail.com');
console.log('GMAIL_APP_PASSWORD=your-16-char-app-password');
console.log('');
console.log('# SendGrid');
console.log('SENDGRID_API_KEY=your-sendgrid-api-key');
console.log('');
console.log('# Mailgun');
console.log('MAILGUN_SMTP_USER=your-mailgun-user');
console.log('MAILGUN_SMTP_PASSWORD=your-mailgun-password');
console.log('');
console.log('# Generic SMTP');
console.log('SMTP_HOST=smtp.your-provider.com');
console.log('SMTP_PORT=587');
console.log('SMTP_SECURE=false');
console.log('SMTP_USER=your-smtp-user');
console.log('SMTP_PASSWORD=your-smtp-password');
console.log('');
console.log('# SMS Configuration (Twilio)');
console.log('TWILIO_ACCOUNT_SID=your-twilio-account-sid');
console.log('TWILIO_AUTH_TOKEN=your-twilio-auth-token');
console.log('TWILIO_PHONE_NUMBER=+1234567890');
console.log('');
console.log('# Frontend URL for links in emails');
console.log('FRONTEND_URL=http://localhost:3000');
