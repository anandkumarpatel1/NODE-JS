const fs = require('fs')
const path = require('path')

const pathName = path.join(__dirname,'curd')
const fileName = `${pathName}/apple.txt`


//creating a file.
// fs.writeFileSync(fileName,'this is a apple and it is so good')



//reading a file.
// fs.readFile(fileName,'utf8',(err, item)=>{

//     console.log(item)

// })


//updating a file
// fs.appendFile(fileName,' and this is apple.txt',(err)=>{
//     if(!err) console.log('file is updated')
// })


//rename a file
// fs.rename(fileName,`${pathName}/fruit.txt`,(err)=>{
//     if(!err) console.log('renamed succesfully')
// })

//deleting a file
// fs.unlinkSync(fileName)