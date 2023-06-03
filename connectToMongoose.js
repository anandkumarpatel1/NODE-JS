const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:anandadmin@cluster0.deq2bbq.mongodb.net/anand');
const productSchema = new mongoose.Schema({
    Model : String,
    price : Number,
    brand : String
});

//creating product
const create = async () =>{
    
    const productModel =  mongoose.model('noob', productSchema);
    const data = new productModel({
        Model : "ONE PLUS 5T"
    });
    const result = await data.save();
    console.log(result);
}

//updating product
const update = async ()=>{    
    const productModel = mongoose.model('noobs', productSchema);
    const data = await productModel.updateMany(
        {Model : "ONE PLUS 5T"},
        {$set : {
            Model : "ONE PLUS 6T",
            price : 500,
            brand : "ONE PLUS"
        }});
    console.log(data)
}

//deleteing product 
const Delete = async ()=>{
    const productModel = await mongoose.model('noobs',productSchema);
    const data = await productModel.deleteOne({
        Model : "ONE PLUS 6T"
    })
    console.log(data)
}

// reading product
const reading = async ()=>{
    const productModel = await mongoose.model('noobs', productSchema);
    const data = await productModel.find();
    console.log(data);
}

reading();