export const html = `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f9f9f9; }
    .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
    .header { background-color: #2196F3; color: white; padding: 30px; text-align: center; }
    .content { padding: 30px; }
    .order-info { background-color: #f5f5f5; padding: 20px; margin: 20px 0; border: 1px solid #ddd; }
    .order-info p { margin: 5px 0; }
    .items-table { width: 100%; border-collapse: collapse; margin: 20px 0; }
    .items-table th { background-color: #f5f5f5; padding: 12px; text-align: left; border-bottom: 2px solid #ddd; }
    .items-table td { padding: 12px; border-bottom: 1px solid #eee; }
    .total { text-align: right; font-size: 18px; font-weight: bold; margin-top: 20px; }
    .footer { background-color: #333; color: #999; padding: 20px; text-align: center; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Order Confirmation</h1>
      <p>Thank you for your purchase!</p>
    </div>
    <div class="content">
      <h2>Hi {{customerName}},</h2>
      <p>Your order has been confirmed and will be shipped soon.</p>

      <div class="order-info">
        <p><strong>Order Number:</strong> {{orderNumber}}</p>
        <p><strong>Order Date:</strong> {{orderDate}}</p>
        <p><strong>Delivery Address:</strong> {{shippingAddress}}</p>
      </div>

      <h3>Order Details:</h3>
      <table class="items-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {{#each items}}
          <tr>
            <td>{{name}}</td>
            <td>{{quantity}}</td>
            <td>\${{price}}</td>
            <td>\${{total}}</td>
          </tr>
          {{/each}}
        </tbody>
      </table>

      <div class="total">
        <p>Subtotal: \${{subtotal}}</p>
        <p>Shipping: \${{shipping}}</p>
        <p>Total: \${{total}}</p>
      </div>

      <p>If you have any questions about your order, please contact us at {{supportEmail}}.</p>
      <p>Best regards,<br>The {{companyName}} Team</p>
    </div>
    <div class="footer">
      <p>&copy; {{year}} {{companyName}}. All rights reserved.</p>
    </div>
  </div>
</body>
</html>`;

export const json = `{
  "customerName": "Sarah Johnson",
  "orderNumber": "ORD-2024-00123",
  "orderDate": "March 15, 2024",
  "shippingAddress": "456 Oak Avenue, New York, NY 10001",
  "items": [
    {
      "name": "Wireless Headphones",
      "quantity": 1,
      "price": "79.99",
      "total": "79.99"
    },
    {
      "name": "Phone Case",
      "quantity": 2,
      "price": "15.99",
      "total": "31.98"
    },
    {
      "name": "USB-C Cable",
      "quantity": 3,
      "price": "12.99",
      "total": "38.97"
    }
  ],
  "subtotal": "150.94",
  "shipping": "9.99",
  "total": "160.93",
  "supportEmail": "support@example.com",
  "companyName": "TechStore",
  "year": "2024"
}`;