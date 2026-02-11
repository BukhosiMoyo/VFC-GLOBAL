export const emailStyles = `
  body { font-family: sans-serif; line-height: 1.6; color: #333; }
  .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; }
  .header { background-color: #0F1D2F; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
  .content { padding: 20px; }
  .field { margin-bottom: 10px; }
  .label { font-weight: bold; color: #555; }
  .footer { margin-top: 20px; font-size: 12px; text-align: center; color: #888; border-top: 1px solid #eee; padding-top: 10px; }
  .button { display: inline-block; background-color: #0F1D2F; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-top: 20px; }
`;

export function getCustomerConfirmationTemplate(name: string, type: 'Lead' | 'Booking') {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>${emailStyles}</style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Request Received</h1>
        </div>
        <div class="content">
          <p>Dear ${name},</p>
          <p>Thank you for contacting VFC Global. We have received your ${type === 'Booking' ? 'consultation booking' : 'inquiry'} request.</p>
          <p>Our team is currently reviewing your details and will be in touch shortly to discuss the next steps.</p>
          
          <p>If you have any urgent queries, please feel free to contact us directly:</p>
          <ul>
            <li>Phone: (012) 004-0446</li>
            <li>Email: info@vfcglobal.co.za</li>
          </ul>

          <p>Best regards,<br/>The VFC Global Team</p>
        </div>
        <div class="footer">
          <p>VFC is an independent consultancy and not affiliated with any government authority.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

export function getAdminNotificationTemplate(data: Record<string, unknown>, type: string) {
  const fields = Object.entries(data).map(([key, value]) => `
    <div class="field">
      <span class="label">${key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}:</span>
      <span>${String(value) || 'N/A'}</span>
    </div>
  `).join('');

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>${emailStyles}</style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New ${type} Submission</h1>
        </div>
        <div class="content">
          <p>A new ${type.toLowerCase()} has been submitted via the website.</p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px;">
            ${fields}
          </div>
        </div>
        <div class="footer">
          <p>This email was sent from the VFC Global website.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}
