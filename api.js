const dbconnect = require('./connectToMongo');
const express = require('express');
const app = express();


app.use(express.json())

app.get('/', async (req, res) => {
    const start = await dbconnect();
    const reslut = await start.find().toArray();
    res.send(reslut);
})

app.post('/', async (req, res) => {
    const start = await dbconnect();
    const result = await start.insertOne(req.body);
    if (result.acknowledged) {

        res.send('data inserted successfully');
    }
})

app.put('/', async (req, res) => {
    const start = await dbconnect();
    const result = await start.updateMany(
        { Model: "RN7PRO" },
        { $set: req.body }
    )
    if (result.modifiedCount) {
        res.send("data has been updated");
    }
})

app.delete('/:Model', async(req, res)=>{
    const start = await dbconnect();
    const result = await start.deleteMany(
        {Model : req.params.Model}
    )
    if(result.deletedCount){
        res.send('Data has been deleted successfully');
    }
})


app.listen(5000);