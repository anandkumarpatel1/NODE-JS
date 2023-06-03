const dbconnect = require('./connectToMongo')

const main = async ()=>{

    const connect = await dbconnect()
    const log = await connect.find().toArray()
    console.log(log);

}

main();