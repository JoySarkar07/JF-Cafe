const Order = require("../models/Order");
const userService = require("../services/userService");
const productService = require("../services/productServices");


const addOrder = async (newOrder)=>{
    const product = await productService.getProductById(newOrder.productId);
    if(product.quantity < newOrder.quantity){
        throw new Error("This quantity is not available. If you need more contact with show owner");
    }
    return await new Order(newOrder).save();
}

const getOrders = async ()=>{
    const orders = await Order.find();
    
    const fullOrder = await Promise.all(
        orders.map(async (order) => {
            const user = await userService.getUserById(order.userId);
            const product = await productService.getProductById(order.productId);
            const { userId, productId, ...orderData } = order.toObject ? order.toObject() : order;
            return { ...orderData, user, product };
        })
    );
    
    return fullOrder;
}

const updateOrder = async (id, updatedValue)=>{
    return await Order.findByIdAndUpdate(
        id,
        { $set: updatedValue},
        { new: true, runValidators: true}
    )
}

const deleteOrder = async (id)=>{
    await Order.findByIdAndDelete(id);
}

module.exports = {
    addOrder,
    getOrders,
    updateOrder,
    deleteOrder
}