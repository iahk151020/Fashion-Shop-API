const mongoose = require('mongoose');
const subProductItemSchema = new mongoose.Schema({
    productId: String,
    quantity: Number
}, {_id: false});

const orderSchema = new mongoose.Schema({
    buyingProductList: [subProductItemSchema],
    customerInfo: {
        name: String,
        address: String,
        phoneNumber: String,
    },
    status: String,
    totalPrice: Number,

},{versionKey: false});

const orderModel = mongoose.model('Order', orderSchema);
module.exports = orderModel;