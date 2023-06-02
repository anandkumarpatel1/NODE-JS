const express = require('express');
const path = require('path');
const app = express();

const filePath = path.join(__dirname,'public');

app.set('view engine', 'ejs')

app.get('/', (req, res)=>{

    res.sendFile(`${filePath}/index.html`)

})
app.get('/about', (req, res)=>{

    res.sendFile(`${filePath}/about.html`)

})


app.get('/profile', (req, res)=>{
    const user={
        name : 'anand kumar',
        id : '23',
        skills : ['WEB dev', 'c', 'c++', 'js']
    }
    res.render('profile',{user})

})


app.get('/login', (req, res)=>{
    
    res.render('login')

})


app.get('/help', (req, res)=>{

    res.sendFile(`${filePath}/help.html`)

})

app.get('*', (req, res)=>{

    res.sendFile(`${filePath}/404.html`)

})


app.listen(5000);
