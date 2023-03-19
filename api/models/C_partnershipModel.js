const mongoose = require('mongoose');

const PartnershipModelSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    icon: {
        type: String,
        required: true
    },
    subtitle: {
        type: String
    },
    link: {
        type: String
    }
}, { timestamps: true });

module.exports = mongoose.model('C_partnershipModel', PartnershipModelSchema);
