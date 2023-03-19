//Import the Service model
const Service = require('../models/service');

/**
 * Creates a new service based on the request body and saves it to the database.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
exports.createService = async (req, res) => {
  try {
    const service = new Service(req.body);
    await service.save();
    res.status(201).json({ message: 'Service created successfully', service });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

/**
 * Gets all the services from the database.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json({ services });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

/**
 * Gets a service by its ID from the database.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
exports.getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }
    res.status(200).json({ service });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

/**
 * Updates a service by its ID with the new request body and returns the updated service.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
exports.updateServiceById = async (req, res) => {
  try {
    const service = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }
    res.status(200).json({ message: 'Service updated successfully', service });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

/**
 * Deletes a service by its ID from the database.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
exports.deleteServiceById = async (req, res) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);
    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }
    res.status(200).json({ message: 'Service deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};
