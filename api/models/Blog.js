const mongoose = require('mongoose');

// Define the schema for the Blog model
const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true  // Title is required
    },
    slug: {
        type: String,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',    // This ID references the User model
    },
    body: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
    },
    categories: {
        type: [String], // An array of categories associated with the blog post
    },
    image: {
        type: String,
        required: true
    },
    isPublished: {
        type: Boolean,
    },
    }, { 
    timestamps: true 
});

module.exports = mongoose.model('Blog', BlogSchema);
