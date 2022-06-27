const {validationResult} = require('express-validator');
const conn = require('../../dbConnection').promise();

exports.deleteuser = async (req,res,next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array() });
    }
    try{
const userId = req.params.userId;
// var query = "DELETE FROM product WHERE id=?";
// conn.query(query,[id],
    const [rows] = await conn.execute("DELETE FROM users WHERE userId=?",[userId]);
    // (err,results)=>{
    // if(!err){
        if(rows.affectedRows === 1){
            return res.status(200).json({message:"user DELETED sucessfully"}); 
        }
        return res.status(404).json({message:"user id doesnot found"});
    
//}
    // else{
    //     return res.status(500).json(err);
    // }
//}

}
catch(err){
    next(err);
}
}

