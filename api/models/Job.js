const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    location: {
        type: String,
    },
    description: {
        type: String,
    },
    responsibilities: {
        type: [String],
    },
    qualifications: {
        type: [String],
    },
    howToApply: {
        type: String,
    },
    salary: {
        min: {
        type: Number
        },
        max: {
        type: Number
        }
    },
    benefits: {
        type: [String]
    },
    isRemote: {
        type: Boolean,
        default: false
    },
    isFullTime: {
        type: Boolean,
        default: true
    },
    }, { 
    timestamps: true 
});

module.exports = mongoose.model('Job', JobSchema);
