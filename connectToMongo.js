const { response } = require('express');
const { MongoClient } = require('mongodb');
const url = 'mongodb+srv://admin:anandadmin@cluster0.deq2bbq.mongodb.net/';
const client = new MongoClient(url);
const database = 'anand';

async function dbconnect() {
    let result = await client.connect();
    if (result) {
        console.log('connected to database');
    }
    else{
        console.log('data base not connected');
    }
    let db = result.db(database);
    let collection = db.collection('noob');
    return collection
}


module.exports = dbconnect
// dbconnect().then((response) => {
//     response.find().toArray().then((data) => {

//         console.log(data);
//     })
// })

