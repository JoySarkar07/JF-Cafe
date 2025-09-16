const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            trim : true
        },
        email : {
            type : String,
            trim : true
        },
        address : {
            type : String,
            trim : true
        },
        phone : {
            type : String,
            trim : true,
        },
        password : {type : String},
        role : {
            type : String,
            enum : ["ADMIN", "USER"],
            default : "USER"
        }
    }, {strict: true, timestamps: true}
)

module.exports = mongoose.model("User", UserSchema);