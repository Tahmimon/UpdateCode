const mongoose = require('mongoose');

const socialMediaSchema = new mongoose.Schema(
    {
        platform: {
        type: String,
        enum: ['Facebook', 'Twitter', 'Instagram', 'LinkedIn', 'YouTube', 'Pinterest', 'TikTok', 'Snapchat','Whatsapp'],
        required: true
        },
        username: {
        type: String,
        },
        url: {
        type: String,
        required: true
        },
        icon:{
        type: String
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('SocialMedia', socialMediaSchema);
