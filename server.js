const express = require('express');
const app = express();
const path = require('path');
const nodemailer = require("nodemailer");



const PORT = process.env.PORT || 3000;


// Middleware
app.use(express.static('public'));
app.use(express.json());


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/', 'index.html'));
});


app.post('/send-email', async (req, res) => {
    const { name, email, subject, message } = req.body;


    if (!name || !email || !subject || !message) {
        res.status(400).json({ status: 'error', message: 'Missing required fields!' })
    }

    // Email sending logic


    // Placeholder response for a successful email submission
    res.status(200).json({
        status: 'success',
        message: 'Email successfully sent'
    });
});

