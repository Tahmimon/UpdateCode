const mongoose = require('mongoose');
const { Schema } = mongoose;

const technologySchema = new Schema({
    title: { type: String},
    sdes: { type: String},
    icon: { type: String},
    cost: { type: Number}
    });

    const addonSchema = new Schema({
    title: { type: String},
    sdes: { type: String},
    icon: { type: String},
    cost: { type: Number}
    });

    const serviceSchema = new Schema({
    title: { type: String, required: true },
    icon: { type: String},
    technologies: { type: [technologySchema]},
    addons: { type: [addonSchema]}
    }, { timestamps: true });

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
