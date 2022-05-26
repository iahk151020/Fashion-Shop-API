const {
    addOrder, 
    confirmOrder, 
    cancelOrder,
    getAllConfirmedOrders,
    getAllPendingOrders,
    getAllCancelledOrders,
} = require('../../models/dao/order.model');

async function addOrderController(req, res){
    const order = req.body;
    delete req.body._id;
    const result = await addOrder(order);
    res.json(result);
}

async function confirmOrderController(req, res){
    const orderId = req.query.id;
    const result = await confirmOrder(orderId);
    res.json(result);
}

async function cancelOrderController(req, res){
    const orderId = req.query.id;
    const result = await cancelOrder(orderId);
    res.json(result);
}

async function getAllPendingOrdersController(req, res){
    const orders = await getAllPendingOrders();
    if (orders instanceof String)
        res.status(500).json(orders);
    res.json(orders);
}

async function getAllConfirmedOrdersController(req, res){
    const orders = await getAllConfirmedOrders();
    if (orders instanceof String)
        res.status(500).json(orders);
    res.json(orders);
}

async function getAllCancelledOrdersController(req, res){
    const orders = await getAllCancelledOrders();
    if (orders instanceof String)
        res.status(500).json(orders);
    res.json(orders);
}

module.exports = {
    addOrderController,
    confirmOrderController,
    cancelOrderController,
    getAllPendingOrdersController,
    getAllConfirmedOrdersController,
    getAllCancelledOrdersController,
}