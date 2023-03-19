const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema(
{
    client_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    },
    total_cost: {
    type: Number,
    required: true
    },
    selected_items: {
    type: Object,
    required: true
    },
    status: {
    type: String,
    default: 'Pending'
    }
},
{ timestamps: true }
);

module.exports = mongoose.model('Order', OrderSchema);
