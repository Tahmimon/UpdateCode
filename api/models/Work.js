const mongoose = require('mongoose');

const WorkSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    image:{
        type: String,
        required: true
    },
    link:{
        type: String
    },
    technologies:{
        type: [String]
    },
    client:{
        type: String
    },
    clientLink:{
        type: String
    },
    startDate: {
        type: Date,
    },
    endDate: {
        type: Date,
    },
    status: {
        type: String,
        enum: ['Pending', 'In Progress', 'Completed'],
    },
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
}, { timestamps: true });

module.exports = mongoose.model('work', WorkSchema);
