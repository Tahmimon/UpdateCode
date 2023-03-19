const mongoose = require('mongoose');

const ourPartnerSchema = new mongoose.Schema(
    {
        companyName: {
        type: String,
        required: true
        },
        logo: {
        type: String,
        required: true
        },
        websiteUrl: {
        type: String,
        required: true
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('OurPartner', ourPartnerSchema);
