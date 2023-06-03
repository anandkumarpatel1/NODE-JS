const dbconnect = require('./connectToMongo')


const delet = async ()=>{
    const db = await dbconnect();
    const result = await db.deleteMany(
        {Model: 'G40 Fusion'}
    )

    if(result.deletedCount){

        console.log('Your data is deleted');
    }

}


delet();