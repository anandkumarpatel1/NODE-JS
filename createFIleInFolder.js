const fs = require('fs')
const path = require('path')


const pathName = path.join(__dirname,'files')

for (let i = 0; i < 5; i++) {

    fs.writeFileSync(pathName + `/hello${i}.txt`,'this is testing for creating multiple file')
    
}


fs.readdir(pathName,(err,files)=>{

    files.forEach((item)=>{
        console.log(item)
    })

})