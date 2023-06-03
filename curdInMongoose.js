const express = require('express');
const app = express();
const config = require('./config');
const curd = require('./productSchema');
const { default: mongoose } = require('mongoose');

app.use(express.json());

//create data
app.post('/create', async (req, res) => {

    const data = new curd(req.body);
    const result = await data.save();
    res.send(result)

})

//fetch data
app.get('/fetch', async (req, resp) => {
    const data = await curd.find(req.params);
    resp.send(data);
})

//delete data
app.delete('/delete/:_id', async (req, res) => {
    const data = await curd.deleteOne(req.params);
    res.send(data)
})

//updating data
app.put('/put/:name', async (req, res) => {
    const data = await curd.updateMany(
        { name: req.params.name },
        {
            $set: req.body
        }
    )

    res.send(data);
})

app.listen(3000);