const router = require('express').Router();
const {
    addOrderController, 
    confirmOrderController,
    cancelOrderController,
    getAllPendingOrdersController,
    getAllConfirmedOrdersController,
    getAllCancelledOrdersController,
} = require('./order.controller');

router.post('/add-order', addOrderController);
router.put('/confirm-order', confirmOrderController);
router.put('/cancel-order', cancelOrderController);
router.get('/all-pending-orders', getAllPendingOrdersController);
router.get('/all-confirmed-orders', getAllConfirmedOrdersController);
router.get('/all-cancelled-orders', getAllCancelledOrdersController);

module.exports = router;