const express = require('express');
const Choice = require('../models/Choice');
const router = express.Router();

router.post('/save-choice', async (req, res) => {
    const { bookId, title, author } = req.body;
    try {
        const newChoice = new Choice({ bookId, title, author });
        await newChoice.save();
        res.status(201).json({ message: 'Choice saved successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error saving choice.' });
    }
});


router.get('/', async (req, res) => {
    try {
        const choices = await Choice.find(); 
        res.status(200).json(choices);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching choices.' });
    }
});

module.exports = router;

