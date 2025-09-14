require("dotenv").config();
const User = require("../models/User");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

const saltRounds = 10;

const signup = async (userDetails)=>{
    userDetails.password = await bcrypt.hash(userDetails.password, saltRounds);
    userDetails.role="USER";
    return await new User(userDetails).save();
}

const login = async (email, password)=>{
    const existingUser = await User.findOne({email});
    if (!existingUser) {
        throw new Error("Invalid credentials");
    }

    // Check if password is correct
    const isPasswordCorrect = await isCorrectPassword(password, existingUser.password);
    if (!isPasswordCorrect) {
        throw new Error("Invalid credentials");
    }

    const token = jwt.sign(
        { userId: existingUser._id, email: existingUser.email, address: existingUser.address, role: existingUser.role },
        process.env.JWT_SECRET || 'your-secret-key',
        { expiresIn: '24h' }
    );

    return {token};
}

const getUsers = async ()=>{
    return await User.find();
}

const updateUser = async (id, updatedValue)=>{
    if(updatedValue.role){
        updatedValue.role="USER";
    }
    if(updatedValue.password){
        updatedValue.password = await bcrypt.hash(updatedValue.password, saltRounds);
    }
    return await User.findByIdAndUpdate(
        id,
        { $set: updatedValue},
        { new: true, runValidators: true}
    )
}

const deleteUser = async (id)=>{
    await User.findByIdAndDelete(id);
}

const isCorrectPassword = async (password, hashPassword)=>{
    return await bcrypt.compare(password, hashPassword);
}

const getUserById = async (userId)=>{
    return await User.findById(userId).select("name email address");
}

module.exports = {
    signup,
    login,
    getUsers,
    updateUser,
    deleteUser,
    getUserById
}