const mongoose = require('mongoose');
const { Schema } = mongoose;

const productShema = new Schema({
    pName:String,
    pQuantity:String,
    pDescription:String
})

module.exports = mongoose.model("Product",productShema)