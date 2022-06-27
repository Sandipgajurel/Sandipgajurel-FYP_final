const {validationResult} = require('express-validator');
const conn = require('../../dbConnection').promise();


exports.userupdate = async (req,res,next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array() });
    }
    try{

const userId = req.params.userId;
    const [rows] = await conn.execute("UPDATE users SET name=?,email=?,password=? WHERE userId=?",[
        req.body.name,
        req.body.email,
        req.body.password,
        userId
    ]);
   
   if (rows.affectedRows === 1){
    return res.status(201).json({
        message: "The user has been successfully updated.",
    });
   }else{
       return res.status(404).json({message:"user id doesnot found"});
   }  
}
catch(err){
    next(err);
}
}

