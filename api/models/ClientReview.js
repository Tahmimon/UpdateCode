const mongoose = require('mongoose');

const clientReviewSchema = new mongoose.Schema({
    job_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
    },
    client_name: {
        type: String,
    },
    client_image: {
        type: String,
    },
    company_name: {
        type: String,
    },
    company_image: {
        type: String,
    },
    position: {
        type: String,
    },
    review_text: {
        type: String,
    },
    rating: {
        type: Number,
    },
    social_media_links: {
        type: [{
            platform: String,
            url: String
        }]
    },
}, { timestamps: true });

module.exports = mongoose.model('ClientReview', clientReviewSchema);
