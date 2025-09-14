const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            trim : true
        },
        description : {
            type : String,
            trim : true
        },
        quantity : {type : Number},
        price : {type : Number},
        discount : {type : Number},
        category : {
            type : String,
            trim : true
        }
    }, {strict: true}
)

module.exports = mongoose.model("Product", ProductSchema);