
module.exports = function(db, app, ObjectId)
{
    app.post('/api/deleteitem', async function(req, res) {
        if(!req.body)
        {
            return res.sendStatus(400);
        }
        const collection = db.collection('products');
        productID = req.body.productid;
        obj = await collection.findOne({id: productID});
        if(obj)
        {
            var objectid = (obj._id);
            collection.deleteOne({_id: objectid}, (err, docs) => {
                collection.find({}).toArray((err, data)=>{
                    res.send(data);
                });
            });
        }
        else
        {
            console.log("heeee")
        }

       
    });       
}


