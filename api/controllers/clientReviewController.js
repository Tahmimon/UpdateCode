//Import the ClientReview model
const ClientReview = require('../models/ClientReview');

/**
 * Get all client reviews
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await ClientReview.find();
    res.json(reviews);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

/**
 * Get a single client review by ID
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
exports.getReviewById = async (req, res) => {
  try {
    const review = await ClientReview.findById(req.params.id);
    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.json(review);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

/**
 * Create a new client review
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
exports.createReview = async (req, res) => {
  const {
    job_id,
    client_name,
    client_image,
    company_name,
    company_image,
    position,
    review_text,
    rating,
    social_media_links,
  } = req.body;

  try {
    const review = await ClientReview.create({
      job_id,
      client_name,
      client_image,
      company_name,
      company_image,
      position,
      review_text,
      rating,
      social_media_links,
    });
    res.json(review);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

/**
 * Update an existing client review
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
exports.updateReview = async (req, res) => {
  const {
    job_id,
    client_name,
    client_image,
    company_name,
    company_image,
    position,
    review_text,
    rating,
    social_media_links,
  } = req.body;

  try {
    let review = await ClientReview.findById(req.params.id);
    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }

    review = await ClientReview.findByIdAndUpdate(
      req.params.id,
      {
        job_id,
        client_name,
        client_image,
        company_name,
        company_image,
        position,
        review_text,
        rating,
        social_media_links,
      },
      { new: true }
    );

    res.json(review);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

/**
 * Delete a client review by ID
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
exports.deleteReview = async (req, res) => {
  try {
    const review = await ClientReview.findByIdAndDelete(req.params.id);
    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.json({ message: 'Review removed' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};
