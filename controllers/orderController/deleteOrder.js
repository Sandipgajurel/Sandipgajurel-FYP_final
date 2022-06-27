const {validationResult} = require('express-validator');
const conn = require('../../dbConnection').promise();

exports.deleteorder = async (req,res,next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array() });
    }
    try{
const orderId = req.params.orderId;
    const [rows] = await conn.execute("DELETE FROM orders WHERE orderId=?",[orderId]);
        if(rows.affectedRows === 1){
            return res.status(200).json({message:"order DELETED sucessfully"}); 
        }
        return res.status(404).json({message:"order id doesnot found"});
}
catch(err){
    next(err);
}
}

