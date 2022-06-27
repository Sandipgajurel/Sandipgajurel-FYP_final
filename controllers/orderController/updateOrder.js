const {validationResult} = require('express-validator');
const conn = require('../../dbConnection').promise();

exports.orderupdate = async (req,res,next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array() });
    }
    try{
const orderId = req.params.orderId;   
const [rows] = await conn.execute("UPDATE orders SET orderDate=?,orderQuantity=? WHERE orderId=?",[
        req.body.orderDate,
        req.body.orderQuantity,
        orderId
    ]);
   
   if (rows.affectedRows === 1){
    return res.status(201).json({
        message: "The order has been successfully updated.",
    });
   }else{
       return res.status(404).json({message:"order id doesnot found"});
   }  
}
catch(err){
    next(err);
}
}

