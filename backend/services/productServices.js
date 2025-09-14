const Product = require("../models/Product");

const addProduct = async (newProduct)=>{
    return await new Product(newProduct).save();
}

const getProducts = async ()=>{
    return await Product.find();
}

const updateProduct = async (id, updatedValue)=>{
    return await Product.findByIdAndUpdate(
        id,
        { $set: updatedValue},
        { new: true, runValidators: true}
    )
}

const deleteProduct = async (id)=>{
    await Product.findByIdAndDelete(id);
}

const getProductById = async (productId)=>{
    return await Product.findById(productId).select("name price quantity discount");
}

module.exports = {
    addProduct,
    getProducts,
    updateProduct,
    deleteProduct,
    getProductById
}