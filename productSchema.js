const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name : String,
    price : Number,
    brand : String
})

module.exports = mongoose.model('noobs', productSchema)