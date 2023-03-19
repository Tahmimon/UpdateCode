const mongoose = require('mongoose');

const jobApplicationSchema = new mongoose.Schema(
    {
        jobId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Job',
        },
        companyName: {
            type: String,
            required: true,
        },
        companyLogo: {
            type: String,
        },
        jobTitle: {
            type: String,
            required: true,
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
        resume: {
            type: String,
        },
        coverLetter: {
            type: String,
        },
        socialMediaUrls: {
            type: Map,
            of: String,
            default: {},
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('JobApplication', jobApplicationSchema);
