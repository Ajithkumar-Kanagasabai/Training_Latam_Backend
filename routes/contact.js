const express = require('express');
const router = express.Router();

const Contact = require('../models/Contact');

router.post('/', async (req, res) => {
    try {
        const { firstName, lastName, email, phoneNumber, course, message } = req.body;

        const newContact = new Contact({
            firstName,
            lastName,
            email,
            phoneNumber,
            course,
            message,
        });

        await newContact.save();
        res.status(201).json({ message: 'Contact information submitted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Server Error' });
    }
});

module.exports = router;
