const productServices = require("../services/productServices");

const addProduct = async (request, response)=>{
    try{
        const user = request.user;
        if(user.role!=="ADMIN"){
            throw new Error("This route is restricted for you");
        }
        response.status(200).send(await productServices.addProduct(request.body));
    }catch(e){
        response.status(500).send(e.message);
    }
}

const getProducts = async (request, response)=>{
    try{
        response.status(200).send(await productServices.getProducts());
    }catch(e){
        response.status(404).send(e.message);
    }
}

const updateProduct = async (request, response)=>{
    try{
        const user = request.user;
        if(user.role!=="ADMIN"){
            throw new Error("This route is restricted for you");
        }
        response.status(200).send(await productServices.updateProduct(request.params.productId, request.body));
    }catch(e){
        response.status(500).send(e.message);
    }
}

const deleteProduct = async (request, response)=>{
    try{
        const user = request.user;
        if(user.role!=="ADMIN"){
            throw new Error("This route is restricted for you");
        }
        response.status(204).send(await productServices.deleteProduct(request.params.productId));
    }catch(e){
        response.status(500).send(e.message);
    }
}

module.exports = {
    addProduct,
    getProducts,
    updateProduct,
    deleteProduct
}