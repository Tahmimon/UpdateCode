//Import the Order model
const Order = require('../models/Order');

/**
 * Creates a new order
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
exports.createOrder = async (req, res) => {
  try {
    const { client_id, total_cost, selected_items } = req.body;
    const order = await Order.create({ client_id, total_cost, selected_items });
    res.status(201).json({ success: true, data: order });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};


/**
 * Gets all orders
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json({ success: true, data: orders });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};

/**
 * Gets an order by ID
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
exports.getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findById(id);
    if (!order) {
      return res.status(404).json({ success: false, error: 'Order not found' });
    }
    res.json({ success: true, data: order });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};


/**
 * Updates an order by ID
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
exports.updateOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const { client_id, total_cost, selected_items, status } = req.body;
    let order = await Order.findById(id);
    if (!order) {
      return res.status(404).json({ success: false, error: 'Order not found' });
    }
    order.client_id = client_id;
    order.total_cost = total_cost;
    order.selected_items = selected_items;
    order.status = status;
    order = await order.save();
    res.json({ success: true, data: order });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};


/**
 * Deletes an order by ID
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
exports.deleteOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findByIdAndDelete(id);
    if (!order) {
      return res.status(404).json({ success: false, error: 'Order not found' });
    }
    res.json({ success: true, data: {} });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};
