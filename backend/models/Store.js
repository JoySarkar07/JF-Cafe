const mongoose = require("mongoose");

const StoreSchema = new mongoose.Schema(
    {
        storeName : {
            type : String,
            trim : true
        },
        address : {type : String},
        landmark : {type : String},
        contact : {type: String},
        email : {
            type: String, 
            trim: true
        }
    }, {strict: true}
)

module.exports = mongoose.model("Store", StoreSchema);