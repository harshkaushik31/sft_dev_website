const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files from the "public" directory

// Route to handle form submission
app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    // Create a transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com', // Replace with your email
            pass: 'your-email-password'   // Replace with your email password
        }
    });

    // Email options
    const mailOptions = {
        from: email,
        to: 'harsh.kaushik10b@gmail.com',
        subject: `New Contact Us Message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Failed to send message.');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Message sent successfully!');
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
