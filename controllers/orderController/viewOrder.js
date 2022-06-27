const {validationResult} = require('express-validator');
const conn = require('../../dbConnection').promise();

exports.ordersView = async (req,res,next) => {
try{

const [row] = await conn.execute("SELECT * FROM orders");

if(row.length > 0){
    return res.json({
        orders:row[0]
    });
}

res.json({
    message:"No orders found"
});


} catch(err){
    next(err);
}
}

