const express = require('express');
const app = express();
const productSchema = require('./productSchema');
const config = require('./config');


app.use(express.json());

app.get('/search/:key', async (req, res) => {
    const data = await  productSchema.find(
        {
            "$or" : [
                {"name" : {$regex : req.params.key}},
                {"brand" : {$regex : req.params.key}}
            ]
        }
    )
    res.send(data);
})



app.listen(3000);