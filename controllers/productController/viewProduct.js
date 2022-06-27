const {validationResult} = require('express-validator');
const conn = require('../../dbConnection').promise();

exports.productsView = async (req,res,next) => {
try{
const productId = req.params.productId;
const [row] = await conn.execute("SELECT `productId`, `name`,`description`,`price`, `type`,`image` FROM products WHERE `productId`=?",[productId]);


if(row.length > 0){
    return res.json({
        products:row[0]
    });
}

res.json({
    message:"No product found"
});


} catch(err){
    next(err);
}
}

