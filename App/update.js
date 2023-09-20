module.exports = function(db, app, ObjectID)
{
    app.post('/api/update', async function(req, res) {
        if(!req.body) {
            return res.sendStatus(400)
        }
        product = req.body;

        const collection = db.collection('products');
        productID = req.body.id;
        obj = await collection.findOne({id: productID});

        if(obj)
        {
            collection.updateOne({_id: obj._id}, {$set: {id: product.id, name: product.name, description: product.description, price: product.price, units: product.units}},()=>{
                res.send({'ok':product.id});
            })
        }
        
    });
}

