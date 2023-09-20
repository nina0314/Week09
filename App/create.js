
module.exports = function(db, app) {
    app.post('/api/create', async function(req, res) {

        if(!req.body)
        {
            return res.sendStatus(400);
        }
        else
        {
            const existingData = await db.collection("products").find({}).toArray();
            if (existingData.length === 0) 
            {
                const collection = await db.collection("products");
                const result = await collection.insertMany([
                    {id: "1", name: "shampoo", description: "Best shampoo ever :)",price : 24.50, units: 500},
                    {id: "2", name: "conditioner", description: "Best conditioner ever :)", price: 15.50, units: 600},
                    {id: "3", name: "body soap", description: "Best soap ever :)", price: 17.50, units: 300}
                ]);
                res.status(200).json({ message: 'Data inserted successfully' });
            }
        }
        
    });
}


