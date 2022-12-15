const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  

    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Category'
    },
    
    imagepath: {
        type:Array
    },
    
},
{timestamps:true})
const images=mongoose.model('Images',productSchema)
module.exports = images;