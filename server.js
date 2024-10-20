const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const axios = require('axios');
const { setupMiddleware, upload, connectDB } = require('./middleware/profile.js');
const path = require('path');
const fs = require('fs');
const choicesRoute = require('./routes/choices');


dotenv.config();
const app = express();
connectDB();

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json());
setupMiddleware(app);



app.get('/', (req, res) => {
    res.send('Backend working');
});

app.get('/api/books', async (req, res) => {
    const query = req.query.q;
    console.log('Received request for:', query);

    if (!query) {
        return res.status(400).json({ error: 'Please provide a search' });
    }

    try {
        const response = await axios.get(`http://openlibrary.org/search.json?q=${query}`);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching from Open Library:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

let profileData = {
    bio: "Hey my name is Axandria and I love reading....",
    profilePic: "/uploads/default.jpg",
};

app.get('/api/profile', (req, res) => {
    res.json(profileData);
});

app.post('/api/profile', upload.single('profilePic'), (req, res) => {
    const { bio } = req.body;
    let profilePic = profileData.profilePic;

    if (bio) {
        profileData.bio = bio;
    }

    if (req.file) {
        profilePic = `/uploads/${req.file.filename}`;
        profileData.profilePic = profilePic;
    }

    res.json({
        message: "Profile updated successfully",
        profilePic: profilePic,
        bio: profileData.bio,
    });
});

app.use('/api/choices', choicesRoute);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
