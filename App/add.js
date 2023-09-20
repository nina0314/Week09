
module.exports = function(db, app, ObjectID)
{

    app.post('/api/add', async function(req, res)
    {
        if(!req.body)
        {
            return res.sendStatus(400);
        }

        const productID = req.body;
        const collection = db.collection('products');
        const documents = await collection.findOne({id: productID.id.toString()});
        console.log(documents);
        if(documents)
        {
            res.send({num: 0, err: "duplicate item"});

        }
        else
        {
            collection.insertOne(req.body, (err, dbres) => {
                if(err) throw err;
                let num = dbres.insertedCount;
                res.send({'num': num, err: null});
            });
        }
        });
}