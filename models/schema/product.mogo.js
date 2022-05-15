const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name: String,
    import_price: Number,
    price: Number,
    description: String,
    categories: String,
    stock: Number,
    image: String,
}, {versionKey: false})

const productModel = mongoose.model('Product', productSchema);

module.exports = {
    productModel
};