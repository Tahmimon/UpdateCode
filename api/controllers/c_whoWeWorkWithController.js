//Import the C-whoWeWorkWith model
const WhoWeWorkWith = require('../models/C_whoWeWorkWith');

// Handle index actions - GET /whoWeWorkWith
exports.getAllWhoWeWorkWith = async (req, res, next) => {
    try {
        const whoWeWorkWithList = await WhoWeWorkWith.find({});
        res.status(200).json({
        status: 'success',
        message: 'Who We Work With retrieved successfully',
        data: whoWeWorkWithList,
        });
    } catch (err) {
        next(err);
    }
};

// Handle create whoWeWorkWith actions - POST /whoWeWorkWith
exports.createNewWhoWeWorkWith = async (req, res, next) => {
    try {
        const newWhoWeWorkWith = await WhoWeWorkWith.create(req.body);
        res.status(201).json({
        message: 'New whoWeWorkWith created!',
        data: newWhoWeWorkWith,
        });
    } catch (err) {
        next(err);
    }
};

// Handle view whoWeWorkWith info - GET /whoWeWorkWith/:id
exports.getWhoWeWorkWithById = async (req, res, next) => {
    try {
        const whoWeWorkWith = await WhoWeWorkWith.findById(req.params.id);
        if (!whoWeWorkWith) {
        return res.status(404).json({
            status: 'fail',
            message: 'Who We Work With not found',
        });
        }
        res.status(200).json({
        status: 'success',
        message: 'Who We Work With details loading..',
        data: whoWeWorkWith,
        });
    } catch (err) {
        next(err);
    }
};

// Handle update whoWeWorkWith info - PUT /whoWeWorkWith/:id
exports.updateWhoWeWorkWithById = async (req, res, next) => {
    try {
        const updatedWhoWeWorkWith = await WhoWeWorkWith.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
            runValidators: true,
        }
        );
        if (!updatedWhoWeWorkWith) {
        return res.status(404).json({
            status: 'fail',
            message: 'Who We Work With not found',
        });
        }
        res.status(200).json({
        status: 'success',
        message: 'Who We Work With Info updated',
        data: updatedWhoWeWorkWith,
        });
    } catch (err) {
        next(err);
    }
};

// Handle delete whoWeWorkWith - DELETE /whoWeWorkWith/:id
exports.deleteWhoWeWorkWithById = async (req, res, next) => {
    try {
        const deletedWhoWeWorkWith = await WhoWeWorkWith.findByIdAndDelete(
        req.params.id
        );
        if (!deletedWhoWeWorkWith) {
        return res.status(404).json({
            status: 'fail',
            message: 'Who We Work With not found',
        });
        }
        res.json({
            status: 'success',
            message: 'Partnership Model deleted successfully',
        });
    } catch (err) {
        next(err);
    }
};
