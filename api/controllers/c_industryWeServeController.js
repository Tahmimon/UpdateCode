//Import the IndustryWeServe model
const IndustryWeServe = require('../models/C_IndustryWeServe');

/**
 * Get all industries we serve
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
exports.getAllIndustryWeServe = async (req, res) => {
  try {
    const industryWeServe = await IndustryWeServe.find();
    res.json(industryWeServe);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**
 * Get a specific industry we serve by ID
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
exports.getIndustryWeServeById = async (req, res) => {
  try {
    const industryWeServe = await IndustryWeServe.findById(req.params.id);
    if (industryWeServe === null) {
      return res.status(404).json({ message: 'Industry we serve not found' });
    }
    res.json(industryWeServe);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**
 * Post a new industry we serve
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
exports.createIndustryWeServe = async (req, res) => {
  const industryWeServe = new IndustryWeServe({
    title: req.body.title,
    description: req.body.description,
    icon: req.body.icon,
    subtitle: req.body.subtitle,
    link: req.body.link
  });
  try {
    const newIndustryWeServe = await industryWeServe.save();
    res.status(201).json(newIndustryWeServe);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

/**
 * Put an industry we serve by ID
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
exports.updateIndustryWeServeById = async (req, res) => {
  try {
    const industryWeServe = await IndustryWeServe.findByIdAndUpdate(req.params.id, req.body);
    if (industryWeServe === null) {
      return res.status(404).json({ message: 'Industry we serve not found' });
    }
    res.json(industryWeServe);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**
 * Delete an industry we serve by ID
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
exports.deleteIndustryWeServeById = async (req, res) => {
  try {
    const industryWeServe = await IndustryWeServe.findByIdAndDelete(req.params.id);
    if (industryWeServe === null) {
      return res.status(404).json({ message: 'Industry we serve not found' });
    }
    res.json(industryWeServe);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
