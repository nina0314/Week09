module.exports = function(db, app)
{
    app.get('/api/getlist', async function(req, res){
        let products = await db.collection("products").find({}).toArray();
        if(products.length > 0)
        {
            console.log(products);
            res.send(products);
        }
    });

}