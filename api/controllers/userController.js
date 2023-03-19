//Import the User model
const User = require('../models/User');
/**
 * Get a user by ID
 *
 * @param {*} req - the request object
 * @param {*} res - the response object
 */
exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
        return res.status(404).json({ msg: 'User not found' });
        }
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

/**
 * Get all users
 *
 * @param {*} req - the request object
 * @param {*} res - the response object
 */
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select('-password');
        res.json(users);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

/**
 * Update a user by ID
 *
 * @param {*} req - the request object
 * @param {*} res - the response object
 */
exports.updateUser = async (req, res) => {
    const { fullName, phoneNumber, address } = req.body;
    const userFields = {};
    if (fullName) userFields.fullName = fullName;
    if (phoneNumber) userFields.phoneNumber = phoneNumber;
    if (address) userFields.address = address;

    try {
        let user = await User.findById(req.params.id);

        if (!user) {
        return res.status(404).json({ msg: 'User not found' });
        }

        // Make sure user is the owner or admin
        if (user._id.toString() !== req.user.id ) {
        return res.status(401).json({ msg: 'Not authorized' });
        }

        user = await User.findByIdAndUpdate(
        req.params.id,
        { $set: userFields },
        { new: true }
        ).select('-password');

        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

/**
 * Delete a user by ID
 *
 * @param {*} req - the request object
 * @param {*} res - the response object
 */
exports.deleteUser = async (req, res) => {
    try {
        let user = await User.findById(req.params.id);

        if (!user) {
        return res.status(404).json({ msg: 'User not found' });
        }

        // Make sure user is the owner or admin
        if (user._id.toString() !== req.user.id && !req.user.isAdmin) {
        return res.status(401).json({ msg: 'Not authorized' });
        }

        await User.findByIdAndRemove(req.params.id);

        res.json({ msg: 'User removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
