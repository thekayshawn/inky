export const html = `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4; }
    .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
    .header { background-color: #4CAF50; color: white; padding: 30px; text-align: center; }
    .content { padding: 40px 30px; }
    .button { display: inline-block; padding: 12px 30px; background-color: #4CAF50; color: white; text-decoration: none; border-radius: 5px; margin: 20px 0; }
    .footer { background-color: #333; color: #999; padding: 20px; text-align: center; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Welcome to {{companyName}}!</h1>
    </div>
    <div class="content">
      <h2>Hi {{firstName}},</h2>
      <p>Thank you for signing up! We're thrilled to have you join our community of {{userCount}} users.</p>
      <p>Your account has been successfully created with the email <strong>{{email}}</strong>.</p>
      <p>To get started, please verify your email address by clicking the button below:</p>
      <a href="{{verificationUrl}}" class="button">Verify Email Address</a>
      <p>If you didn't create this account, please ignore this email.</p>
      <p>Best regards,<br>The {{companyName}} Team</p>
    </div>
    <div class="footer">
      <p>&copy; {{year}} {{companyName}}. All rights reserved.</p>
      <p>{{address}}</p>
    </div>
  </div>
</body>
</html>`;

export const json = `{
  "companyName": "Acme Corp",
  "firstName": "John",
  "email": "john.doe@example.com",
  "userCount": "10,000",
  "verificationUrl": "https://example.com/verify?token=abc123",
  "year": "2024",
  "address": "123 Main Street, San Francisco, CA 94102"
}`;