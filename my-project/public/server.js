import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Handle POST request from contact form
app.post('/send-email', async (req, res) => {
    console.log('Form Data:', req.body);

    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required!' });
    }

    try {
        // Configure the transporter
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // Use TLS
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
            tls: {
                rejectUnauthorized: false,
            },
        });

        // Mail options
        const mailOptions = {
            from: process.env.GMAIL_USER,
            replyTo: email,
            to: process.env.GMAIL_USER, // You will receive the message
            subject: `Contact Form Message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // Plain-text fallback
            html: `
                <table style="width: 100%; max-width: 600px; margin: auto; font-family: Arial, sans-serif; border-collapse: collapse;">
                  <tr>
                    <td style="background-color: #202020; color: #ffffff; text-align: center; padding: 20px;">
                      <h1 style="margin: 0; font-size: 24px; font-weight: bold;">New Contact Form Message</h1>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 20px; background-color: #f9f9f9;">
                      <p style="margin: 0 0 10px; font-size: 16px; color: #333;"><strong>Name:</strong> ${name}</p>
                      <p style="margin: 0 0 10px; font-size: 16px; color: #333;"><strong>Email:</strong> ${email}</p>
                      <p style="margin: 0 0 10px; font-size: 16px; color: #333;"><strong>Message:</strong></p>
                      <p style="margin: 10px 0; font-size: 16px; color: #333;">${message}</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="background-color: #f50e32; text-align: center; padding: 10px;">
                      <p style="margin: 0; font-size: 14px; color: #ffffff;">&copy; All Rights Reserved -Dakshit Jha.</p>
                    </td>
                  </tr>
                </table>
            `,
        };

        // Send email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', info.response);

        // Respond to the client
        res.status(200).json({ success: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error.message);
        res.status(500).json({ error: 'Failed to send message. Please try again later.' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
