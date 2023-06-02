const express = require('express');
const app = express();
const reqFilter = require('./middleware/checking');
const route = express.Router();


// app.use(reqFilter); This is use for all aplication


route.use(reqFilter)

app.get('/', (req, res) => {

    res.send('Welcome, This is home page');

})
route.get('/user', (req, res) => {

    res.send('Welcome, This is home page');

})

app.get('/about', (req, res) => {

    res.send('This is about page');

})


route.get('/contact', (req, res) => {

    res.send('This is contact page');

})

app.use('/', route)

app.listen('5000');