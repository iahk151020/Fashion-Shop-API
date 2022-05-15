const { 
    getAllProductsController, 
    updateProductController, 
    deleteProductController, 
    addProductController, 
    importProductController
} = require('./products.controller');

const router = require('express').Router();
const upload = require('../../services/multer');

router.get('/all-products', getAllProductsController);
router.put('/update-product', updateProductController);
router.delete('/delete-product', deleteProductController);
router.post('/add-product',upload.single('image'), addProductController);
router.post('/import-product', importProductController);


module.exports = router;