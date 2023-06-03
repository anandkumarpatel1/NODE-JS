const dbconnect = require('./connectToMongo')

const update = async () => {

    const db = await dbconnect()
    const result = await db.updateMany(
        { Model: 'RN7PRO' },
        {
            $set:
                { Model: 'Motorola', price: '1000' }
        }
    )
    if(result.modifiedCount){
        console.log('updated successfully');
    }
    
}

update();