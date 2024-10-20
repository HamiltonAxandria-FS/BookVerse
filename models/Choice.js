const mongoose = require('mongoose');

const choiceSchema = new mongoose.Schema({
    bookId: { type: String, required: true },
    title: { type: String, required: true },
    author: { type: String, required: true },
});

const Choice = mongoose.model('Choice', choiceSchema);

module.exports = Choice;

