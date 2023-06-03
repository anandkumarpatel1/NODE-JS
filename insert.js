const dbconnect = require('./connectToMongo')

const main = async () => {
    const db = await dbconnect()
    const result = await db.insertMany(
        [
            {
                Model: 'RN7PRO',
                price: '500',
                brand: 'MI'
            },
            {
                Model: 'G40 Fusion',
                price: '523',
                brand: 'MOTO'
            }
        ]

    )
    if (result.acknowledged) {
        console.log('Data inserted sucessfully');
    }

}

main();