//Import the Blog model
const Blog = require('../models/Blog');

/**
 * Retrieves all blog posts from the database and sends them as JSON
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 */
const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find({});
        res.json(blogs);
    } catch (err) {
        console.log(err);
        res.status(500).send('Server error');
    }
};

/**
 * Retrieves a specific blog post by ID from the database and sends it as JSON
 * @param {object} req - Express request object with a `params.id` property for the blog post ID
 * @param {object} res - Express response object
 */
const getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
        return res.status(404).send('Blog post not found');
        }
        res.json(blog);
    } catch (err) {
        console.log(err);
        res.status(500).send('Server error');
    }
};

/**
 * Creates a new blog post in the database based on the request body and sends it as JSON
 * @param {object} req - Express request object with a `body` property containing the blog post data
 * @param {object} res - Express response object
 */
const createBlog = async (req, res) => {
    try {
        const blog = new Blog(req.body);
        await blog.save();
        res.status(201).json(blog);
    } catch (err) {
        console.log(err);
        res.status(500).send('Server error');
    }
};

/**
 * Updates a specific blog post by ID in the database based on the request body and sends it as JSON
 * @param {object} req - Express request object with a `params.id` property for the blog post ID and a `body` property containing the updated blog post data
 * @param {object} res - Express response object
 */
const updateBlog = async (req, res) => {
    try {
        const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        });
        if (!blog) {
        return res.status(404).send('Blog post not found');
        }
        res.json(blog);
    } catch (err) {
        console.log(err);
        res.status(500).send('Server error');
    }
};

/**
 * Deletes a specific blog post by ID from the database and sends it as JSON
 * @param {object} req - Express request object with a `params.id` property for the blog post ID
 * @param {object} res - Express response object
 */
const deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findByIdAndDelete(req.params.id);
        if (!blog) {
        return res.status(404).send('Blog post not found');
        }
        res.json(blog);
    } catch (err) {
        console.log(err);
        res.status(500).send('Server error');
    }
};

module.exports = {
    getAllBlogs, getBlogById, createBlog, updateBlog, deleteBlog
}
