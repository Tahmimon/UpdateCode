const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    conversation_id: {
        type: mongoose.Types.ObjectId,
        ref: "Conversation"
    },
    sender: {
        type: String,
        required: true,
    },
    receiver: {
        type: String,
        required: true
    },
    text: {
        type: String,
    },
    attachment: {
        type: String,
    }
    ,
    isVisitorSeen: {
        type: Boolean,
        default: false
    },
    isAdminSeen: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
