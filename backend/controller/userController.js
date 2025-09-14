const userService = require("../services/userService");

const signup = async (request, response)=>{
    try{
        response.status(200).send(await userService.signup(request.body));
    }catch(e){
        response.status(500).send(e.message);
    }
}

const login = async (request, response)=>{
    try{
        const { email, password } = request.body;
        response.status(200).send(await userService.login(email, password));
    }catch(e){
        response.status(401).send(e.message);
    }
}

const getUsers = async (request, response)=>{
    try{
        const user = request.user;
        if(user.role!=="ADMIN"){
            throw new Error("This route is restricted for you");
        }
        response.status(200).send(await userService.getUsers());
    }catch(e){
        response.status(404).send(e.message);
    }
}

const updateUser = async (request, response)=>{
    try{
        response.status(200).send(await userService.updateUser(request.params.userId, request.body));
    }catch(e){
        response.status(500).send(e.message);
    }
}

const deleteUser = async (request, response)=>{
    try{
        response.status(200).send(await userService.deleteUser(request.params.userId));
    }catch(e){
        response.status(500).send(e.message);
    }
}

module.exports = {
    signup,
    login,
    getUsers,
    updateUser,
    deleteUser
}