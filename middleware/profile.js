const express = require('express');
const multer = require('multer');
const cors = require('cors');
const mongoose = require('mongoose');
const GridFsStorage = require('multer-gridfs-storage').GridFsStorage;
const path = require('path');
require('dotenv').config();

const mongoURI = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};


const storage = new GridFsStorage({
    url: mongoURI,
    options: { useUnifiedTopology: true },
    file: (req, file) => {
        return {
            filename: Date.now() + path.extname(file.originalname),
            bucketName: 'uploads',
        };
    },
});

const upload = multer({ storage });

const setupMiddleware = (app) => {
    app.use(express.json());
    app.use(cors());
};


const app = express();
setupMiddleware(app);
connectDB();


app.post('/api/profile/upload', upload.single('profilePic'), (req, res) => {
    res.json({ file: req.file });
});


module.exports = { connectDB, setupMiddleware, upload, storage }