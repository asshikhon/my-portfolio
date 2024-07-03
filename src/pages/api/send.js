import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, subject, message } = req.body;

    console.log(req.body);

    try {
      // Ensure environment variables are set
      if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        throw new Error('Email user or pass environment variables are not set');
      }

      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER, // Sending from your configured email
        to: process.env.EMAIL_USER, // Receiving to your configured email
        subject: subject,
        text: `Message from: ${email}\n\n${message}`, // Include the sender's email in the message body
      };

      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent: ' + info.response);

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
