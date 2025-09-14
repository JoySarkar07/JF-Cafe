const storeServices = require("../services/storeServices");

const addStore = async (request, response)=>{
    try{
        response.status(200).send(await storeServices.addStore(request.body));
    }catch(e){
        response.status(500).send(e.message);
    }
}

const getStore = async (request, response)=>{
    try{
        response.status(200).send(await storeServices.getStore());
    }catch(e){
        response.status(404).send(e.message);
    }
}

const updateStore = async (request, response)=>{
    try{
        response.status(200).send(await storeServices.updateStore(request.params.storeId, request.body));
    }catch(e){
        response.status(500).send(e.message);
    }
}

module.exports = {
    addStore,
    getStore,
    updateStore
}