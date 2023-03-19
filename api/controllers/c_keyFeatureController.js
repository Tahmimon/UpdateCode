//Import the C_keyFeature model
const KeyFeature = require('../models/C_keyFeature');

// Handle index actions - GET /keyFeatures
exports.getAllKeyFeatures = async function (req, res) {
  try {
    const keyFeatures = await KeyFeature.find();
    res.status(200).json(keyFeatures);
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message
    });
  }
};

// Handle create keyFeature actions - POST /keyFeatures
exports.createNewKeyFeature = async function (req, res) {
  try {
    const keyFeature = new KeyFeature({
      title: req.body.title,
      subtitle: req.body.subtitle,
      description: req.body.description,
      icon: req.body.icon,
      link: req.body.link
    });
    const savedKeyFeature = await keyFeature.save();
    res.status(201).json(savedKeyFeature);
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message
    });
  }
};

// Handle view keyFeature info - GET /keyFeatures/:id
exports.getKeyFeatureById = async function (req, res) {
  try {
    const keyFeature = await KeyFeature.findById(req.params.id);
    if (!keyFeature) {
      return res.status(404).json({
        status: "error",
        message: "Key Feature not found"
      });
    }
    res.status(200).json(keyFeature);
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message
    });
  }
};

// Handle update keyFeature info - PUT /keyFeatures/:id
exports.updateKeyFeatureById = async function (req, res) {
  try {
    const keyFeature = await KeyFeature.findById(req.params.id);
    if (!keyFeature) {
      return res.status(404).json({
        status: "error",
        message: "Key Feature not found"
      });
    }
    keyFeature.title = req.body.title;
    keyFeature.subtitle = req.body.subtitle;
    keyFeature.description = req.body.description;
    keyFeature.icon = req.body.icon;
    keyFeature.link = req.body.link;
    const updatedKeyFeature = await keyFeature.save();
    res.json(updatedKeyFeature);
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message
    });
  }
};

// Handle delete keyFeature - DELETE /keyFeatures/:keyFeature_id
exports.deleteKeyFeatureById = async function (req, res) {
  try {
    const keyFeature = await KeyFeature.findByIdAndDelete(req.params.id);
    if (!keyFeature) {
      return res.status(404).json({
        status: "error",
        message: "Key Feature not found"
      });
    }
    res.json({
      status: "success",
      message: 'Key Feature deleted'
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message
    });
  }
};
