const {productModel} = require('../schema/product.mogo');

async function addProduct(product){
    try{
        const newProduct = await productModel.create(product);
        return newProduct;
    } catch(err){
        console.log(err);
        return "Error occur while adding product";
    }
}

async function updateStockOfProductById(_id, quantity){
    try{
        const product = await productModel.findByIdAndUpdate(
            _id, 
            {$inc: {stock: quantity}}, 
            {new: true}
        ).exec();
    } catch (err){
        console.log(err);
    }
}

async function getAllProducts(){
    try{
        const products = await productModel.find({}).exec();
        return products;
    } catch(err){
        console.log(err);
        return "Error occur while getting products";
    }
}

async function updateProduct(product){
    try{
        await productModel.updateOne({_id: product._id}, product);
        return "update product successfully"; 
    } catch (err){
        console.log(err);
        return "Error occurs while updating product";
    }
}

async function importProduct(_id, quantity){
    try{
        const product = await productModel.findByIdAndUpdate(
            {_id: _id}, 
            {$inc: {stock: quantity}}, 
            {new: true}
        ).exec();
        return product;
    } catch (err){
        console.log(err);
        return "Error occur while importing product";
    }
}

async function deleteProduct(_id){
    try{
        await productModel.findByIdAndRemove(_id);
        return "delete product successfully";
    } catch(err){
        console.log(err);
        return "Error occur while deleting product";
    }
}

async function getProductById(_id){
    try{
        const product = await productModel.findById(_id).exec();
        return product;
    } catch(err){
        console.log(err);
        return "Error occur while getting product";
    }
}

module.exports = {
    addProduct,
    getAllProducts,
    deleteProduct,
    updateProduct,
    importProduct,
    updateStockOfProductById,
    getProductById,
}