const orderService = require("../services/orderService");

const addOrder = async (request, response)=>{
    try{
        response.status(200).send(await orderService.addOrder(request.body));
    }catch(e){
        response.status(500).send(e.message);
    }
}

const getOrders = async (request, response)=>{
    try{
        const user = request.user;
        if(user.role!=="ADMIN"){
            throw new Error("This route is restricted for you");
        }
        response.status(200).send(await orderService.getOrders());
    }catch(e){
        response.status(404).send(e.message);
    }
}

const getOrderOfUser = async (request, response)=>{
    try{
        const user = request.user;
        response.status(200).send(await orderService.getOrderByUserId(user.userId));
    }catch(e){
        response.status(404).send(e.message);
    }
}

const updateOrder = async (request, response)=>{
    try{
        response.status(200).send(await orderService.updateOrder(request.params.orderId, request.body));
    }catch(e){
        response.status(500).send(e.message);
    }
}

const deleteOrder = async (request, response)=>{
    try{
        const user = request.user;
        if(user.role!=="ADMIN"){
            throw new Error("This route is restricted for you");
        }
        response.status(204).send(await orderService.deleteOrder(request.params.orderId));
    }catch(e){
        response.status(500).send(e.message);
    }
}

module.exports = {
    addOrder,
    getOrders,
    updateOrder,
    deleteOrder,
    getOrderOfUser
}