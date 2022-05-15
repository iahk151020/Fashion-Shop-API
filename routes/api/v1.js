const router = require('express').Router();
const userRoute = require('../authentication/user.routes');
const productRoute = require('../products/products.routes');
const categoriesRoute = require('../categories/categories.routes');
const uploadRoute = require('../upload/upload.routes');
const orderRoute = require('../orders/order.routes');

router.use('/authentication', userRoute);
router.use('/products', productRoute);
router.use('/categories', categoriesRoute);
router.use('/upload', uploadRoute);
router.use('/orders', orderRoute);

module.exports = router;