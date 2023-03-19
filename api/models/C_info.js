const mongoose = require('mongoose');

const CompanyInfoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    slogan: {
        type: String
    },
    logo: {
        type: String,
        required: true
    },
    logo_dark: {
        type: String
    },
    phone: {
        type: [String],
    },
    email: {
        type: [String],
    },
    about: {
        type: String,
    },
    video_link: {
        type: String
    },
    image_link: {
        type: String
    },
    other_info: {
        type: String
    }
}, { timestamps: true });

module.exports = mongoose.model('C_info', CompanyInfoSchema);
