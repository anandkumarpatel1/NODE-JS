
const app = require('./app.js')

const arr = [2,6,3,6,8,3,7,9]

const main = arr.filter((item)=>{
    return item >= 3
})

console.log(main);