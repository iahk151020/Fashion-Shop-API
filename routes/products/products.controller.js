const { 
    getAllProducts, 
    addProduct, 
    updateProduct, 
    deleteProduct, 
    importProduct
} = require("../../models/dao/product.model");

const cloudinary = require('../../services/cloudinary');

async function getAllProductsController(req, res){
    const products = await getAllProducts();
    res.json(products);
}

async function addProductController(req, res){
    try{
        const result = await cloudinary.uploader.upload(req.file.path);
        const imageUrl = result.url;
        const data = {
            name: req.body.name,
            import_price: req.body.importingPrice,
            price: req.body.price,
            description: req.body.description,
            stock: 0,
            image: imageUrl,
            categories: req.body.categories,
        }
        const newProduct = await addProduct(data);
        res.json(newProduct);

    } catch (err){
        console.log("ADD PRODUCT ERROR: ", err);
    }
}

async function updateProductController(req, res){
    const product = req.body;
    const result = await updateProduct(product);
    res.json(result);
}

async function deleteProductController(req, res){
    const _id = req.query.id;
    const result = await deleteProduct(_id);
    res.json(result);
}

async function importProductController(req, res){
    const _id = req.body.productId;
    const quantity = req.body.quantity;
    console.log(_id, quantity);
    const result = await importProduct(_id, quantity);
    res.json(result);
}

module.exports = {
    addProductController,
    getAllProductsController,
    updateProductController,
    deleteProductController,
    importProductController,
}