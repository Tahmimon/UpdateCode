const mongoose = require('mongoose');

const C_clientResponseSchema = new mongoose.Schema({
    client_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client',  // This ID references the Client model
    },
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    whatsapp: {
        type: String,
    },
    skype: {
        type: String,
    },
    linkedin: {
        type: String,
    },
    budget: {
        type: Number,
    },
    attachment: {
        type: String,
    },
    message: {
        type: String,
    },
}, { timestamps: true });

module.exports = mongoose.model('C_clientResponse', C_clientResponseSchema);
