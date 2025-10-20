const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer'); // For email-to-SMS

const app = express();
const port = 3000;

// Email setup for email-to-SMS (replace with your details)
const transporter = nodemailer.createTransporter({
  service: 'gmail', // Or your email provider (e.g., 'outlook')
  auth: {
    user: 'your-email@gmail.com', // Replace with your email
    pass: 'your-app-password' // Use app password for Gmail (not regular password)
  }
});

// Admin phone details (replace with admin's number and carrier)
const adminPhoneNumber = '09060149574'; // Admin's phone number (without +63)
const carrierGateway = 'globelabs.com.ph'; // For Globe; use 'smart.com.ph' for Smart, etc.

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('.'));

// ... (rest of server.js as before, e.g., database setup)

// Route to notify admin via email-to-SMS
app.post('/notify-admin', (req, res) => {
  const { message } = req.body;
  const mailOptions = {
    from: 'akyle8979@gmail.com', // Replace with your email
    to: `${adminPhoneNumber}@${carrierGateway}`, // Converts email to SMS
    subject: 'New Order Notification',
    text: message
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Email-to-SMS error:', error);
      res.status(500).json({ error: 'Failed to send notification' });
    } else {
      console.log('Notification sent:', info.response);
      res.json({ success: true });
    }
  });
});

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));