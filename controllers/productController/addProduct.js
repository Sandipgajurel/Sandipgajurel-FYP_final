const {validationResult} = require('express-validator');
const conn = require('../../dbConnection').promise();

exports.products = async (req,res,next) => {
const errors = validationResult(req);
if(!errors.isEmpty()){
    return res.status(422).json({ errors: errors.array() });
}
try{
const [rows] = await conn.execute('INSERT INTO `products`(name,description,price,type,image) values(?,?,?,?,?)',[
   req.body.name,
   req.body.description,
    req.body.price,
    req.body.type,
    req.file.path
   ]);
if (rows.affectedRows === 1) {
    return res.status(201).json({
        message: "The product has been successfully added.",
    });   
}
} catch(err){
    next(err);
}
// let info ={
//     name: req.body.name,
//     description: req.body.description,
//     price: req.body.price,
//     type: req.body.type,
//     image: req.file.path
// }
// const product = await conn.products.create(info)
// res.status(200).send(product)
// console.log(product)

}