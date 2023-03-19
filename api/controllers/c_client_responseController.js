//Import the C_clientResponse model
const C_clientResponse = require('../models/C_clientResponse');

/**
 * Creates a new client response and saves it to the database.
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
exports.create = async (req, res) => {
  try {
    const clientResponse = new C_clientResponse(req.body);
    const savedClientResponse = await clientResponse.save();
    res.status(201).json(savedClientResponse);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

/**
 * Retrieves all client responses from the database.
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
exports.getAll = async (req, res) => {
  try {
    const clientResponses = await C_clientResponse.find();
    res.json(clientResponses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**
 * Retrieves a single client response from the database by ID.
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
exports.getById = async (req, res) => {
    try {
        const clientResponse = await C_clientResponse.findById(req.params.id);
        res.json(clientResponse);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

/**
 * Updates a client response in the database by ID.
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
exports.update = async (req, res) => {
    try {
        const clientResponse = await C_clientResponse.findById(req.params.id);
        if (clientResponse) {
        clientResponse.set(req.body);
        const updatedClientResponse = await clientResponse.save();
        res.json(updatedClientResponse);
        } else {
        res.status(404).json({ message: 'Client response not found' });
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
    };

    /**
 * Deletes a client response from the database by ID.
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
exports.delete = async (req, res) => {
    try {
        const clientResponse = await C_clientResponse.findById(req.params.id);
        if (clientResponse) {
        await clientResponse.remove();
        res.json({ message: 'Client response deleted' });
        } else {
        res.status(404).json({ message: 'Client response not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
