const express = require('express');
const { setupMiddleware, upload, connectDB } = require('../middleware/profile');

const app = express();


setupMiddleware(app);


connectDB();


app.post('/upload', upload.single('file'), (req, res) => {
    if (req.file) {
        res.json({ file: req.file });
    } else {
        res.status(400).json({ msg: 'No file uploaded' });
    }
});

module.exports = app;
