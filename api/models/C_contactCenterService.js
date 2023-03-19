const mongoose = require('mongoose');

const ContactCenterServiceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String
    },
    description: {
        type: String
    },
    icon: {
        type: String,
        required: true
    },
    link: {
        type: String
    }
}, { timestamps: true });

module.exports = mongoose.model('C_contactCenterService', ContactCenterServiceSchema);
