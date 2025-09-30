export const html = `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4; }
    .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
    .header { background-color: #FF5722; color: white; padding: 30px; text-align: center; }
    .content { padding: 30px; }
    .alert-box { padding: 20px; margin: 20px 0; border: 1px solid #ddd; }
    .alert-warning { background-color: #fff3cd; border-left: 4px solid #ffc107; }
    .alert-success { background-color: #d4edda; border-left: 4px solid #28a745; }
    .button { display: inline-block; padding: 12px 30px; background-color: #FF5722; color: white; text-decoration: none; margin: 20px 0; }
    .metric { display: inline-block; width: 30%; text-align: center; padding: 20px; margin: 5px; background-color: #f5f5f5; border: 1px solid #ddd; }
    .metric-value { font-size: 32px; font-weight: bold; color: #FF5722; }
    .metric-label { font-size: 14px; color: #666; margin-top: 5px; }
    .footer { background-color: #333; color: #999; padding: 20px; text-align: center; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Password Reset Request</h1>
    </div>
    <div class="content">
      <h2>Hi {{userName}},</h2>

      {{#if isSecurityAlert}}
      <div class="alert-box alert-warning">
        <strong>Security Alert:</strong> We detected a password reset request from a new device.
        <p><strong>Location:</strong> {{location}}</p>
        <p><strong>IP Address:</strong> {{ipAddress}}</p>
        <p><strong>Time:</strong> {{requestTime}}</p>
      </div>
      {{else}}
      <div class="alert-box alert-success">
        <p>We received your password reset request.</p>
      </div>
      {{/if}}

      <p>Click the button below to reset your password. This link will expire in {{expiryHours}} hours.</p>

      <a href="{{resetUrl}}" class="button">Reset Password</a>

      <p><strong>Account Information:</strong></p>
      <ul>
        <li>Email: {{email}}</li>
        <li>Account Created: {{accountCreated}}</li>
        <li>Last Login: {{lastLogin}}</li>
      </ul>

      <h3>Your Account Activity</h3>
      <div style="text-align: center;">
        <div class="metric">
          <div class="metric-value">{{stats.logins}}</div>
          <div class="metric-label">Total Logins</div>
        </div>
        <div class="metric">
          <div class="metric-value">{{stats.purchases}}</div>
          <div class="metric-label">Purchases</div>
        </div>
        <div class="metric">
          <div class="metric-value">{{stats.points}}</div>
          <div class="metric-label">Reward Points</div>
        </div>
      </div>

      <p>If you didn't request a password reset, please ignore this email or contact our support team at {{supportEmail}} immediately.</p>

      <p>Best regards,<br>The {{companyName}} Security Team</p>
    </div>
    <div class="footer">
      <p>&copy; {{year}} {{companyName}}. All rights reserved.</p>
      <p>This is an automated security email. Please do not reply.</p>
    </div>
  </div>
</body>
</html>`;

export const json = `{
  "userName": "Alex Smith",
  "email": "alex.smith@example.com",
  "isSecurityAlert": true,
  "location": "San Francisco, CA, USA",
  "ipAddress": "192.168.1.100",
  "requestTime": "March 15, 2024 at 2:30 PM PST",
  "resetUrl": "https://example.com/reset?token=xyz789",
  "expiryHours": "24",
  "accountCreated": "January 15, 2023",
  "lastLogin": "March 14, 2024",
  "stats": {
    "logins": "247",
    "purchases": "18",
    "points": "1,250"
  },
  "supportEmail": "security@example.com",
  "companyName": "SecureApp",
  "year": "2024"
}`;