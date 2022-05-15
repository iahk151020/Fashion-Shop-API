const orderModel = require('../schema/order.mongo');
const { getProductById, updateStockOfProductById } = require('./product.model');


async function addOrder(order){
    try{
        const buyingProductList = order.buyingProductList;

        for(let i = 0; i < buyingProductList.length; i++){
            const productId = buyingProductList[i].productId;
            const product = await getProductById(productId);
            const quantity = buyingProductList[i].quantity;

            if (product.stock < quantity){
                return "Not enough stock for " + product.name;
            } else {
                await updateStockOfProductById(productId, -quantity);
            }
        }

        order.status = 'pending';
        await orderModel.create(order);
        return "Created new order successfully";
    } catch(err){
        console.log(err);
        return "Error occur while adding order";
    }
}

async function confirmOrder(orderId){
    try{
        await orderModel.findByIdAndUpdate(orderId, {status: 'confirmed'});
        return "Confirmed order successfully";
    } catch(err){
        console.log(err);
        return "Error occur while confirming order";
    }
}

async function cancelOrder(orderId){
    try{
        await orderModel.findByIdAndUpdate(orderId, {status: 'cancelled'});
        return "Cancelled order successfully";
    } catch(err){
        console.log(err);
        return "Error occur while cancelling order";
    }
}

async function getAllPendingOrders(){
    try{
        const orders = await orderModel.find({status: 'pending'}).exec();
        return orders;
    } catch(err){
        console.log(err);
        return "Error occur while getting orders";
    }
}

async function getAllConfirmedOrders(){
    try{
        const orders = await orderModel.find({status: 'confirmed'}).exec();
        return orders;
    } catch(err){
        console.log(err);
        return "Error occur while getting orders";
    }
}

async function getAllCancelledOrders(){
    try{
        const orders = await orderModel.find({status: 'cancelled'}).exec();
        return orders;
    } catch(err){
        console.log(err);
        return "Error occur while getting orders";
    }
}

module.exports = {
    addOrder,
    confirmOrder,
    cancelOrder,
    getAllCancelledOrders,
    getAllConfirmedOrders,
    getAllPendingOrders,
}