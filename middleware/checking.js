const reqFilter = (req, res, next)=>{
    if(!req.query.age){
        res.send('Please Enter a age');
    }
    else if(req.query.age < 18){
        res.send('Your age is less than 18');
    }
    else{
        next();
    }
}

module.exports = reqFilter;