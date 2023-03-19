const mongoose = require('mongoose');

const conversationSchema = new mongoose.Schema({
    creator: {
        type: String,
        required: true
    },
    participant: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Conversation = mongoose.model('Conversation', conversationSchema);

module.exports = Conversation;
