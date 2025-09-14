const Store = require("../models/Store");

const addStore = async (storeDetails)=>{
    return await new Store(storeDetails).save();
}

const getStore = async ()=>{
    return (await Store.find()).at(0);
}

const updateStore = async (id, updatedValue)=>{
    return await Store.findByIdAndUpdate(
        id,
        { $set: updatedValue},
        { new: true, runValidators: true}
    )
}

module.exports = {
    addStore,
    getStore,
    updateStore
}