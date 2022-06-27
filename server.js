const router = require('express').Router();
const {body} = require('express-validator');
const express = require('express')
var app = express()

//user
const {register} = require('./controllers/userController/userRegister');
const {login} = require('./controllers/userController/userLogin');
const {getUser} = require('./controllers/userController/getUser');
const {deleteuser} = require('./controllers/userController/deleteUser');
const {userupdate} = require('./controllers/userController/updateUser');
//products
const {products} = require('./controllers/productController/addProduct');
const {productsView} = require('./controllers/productController/viewProduct');
const {productupdate} = require('./controllers/productController/updateProduct');
const {deleteproduct} = require('./controllers/productController/deleteProduct');
//orders
const {ordersView} = require('./controllers/orderController/viewOrder');
const {orderupdate} = require('./controllers/orderController/updateOrder');
const {deleteorder} = require('./controllers/orderController/deleteOrder');
const { addorder } = require('./controllers/orderController/SendOrder');

const { application } = require('express');
const db_connection = require('./dbConnection');
// image upload 
const http = require("http");
const fs = require("fs");
const url = require("url");



const cors = require("cors");
const bodyParser = require('body-parser');
const path = require('path')
const multer = require('multer');
app.use(bodyParser.json());
app.use(cors());

//! Use of Multer
var storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, './client/public/images/')     // './public/images/' directory name where save the file
    },
    // filename: (req, file, callBack) => {
    //     callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    // }
})

 
var upload = multer({
    storage: storage
}).single('image')
 

//user
router.post('/register', [
    body('name',"The name must be of minimum 3 characters length")
    .notEmpty()
    .escape()
    .trim()
    .isLength({ min: 3 }),
    body('email',"Invalid email address")
    .notEmpty()
    .escape()
    .trim().isEmail(),
    body('password',"The Password must be of minimum 4 characters length").notEmpty().trim().isLength({ min: 4 }),
], register);

// serving static files
router.use('/client/public/images', express.static(__dirname + '/client/public/images'));

router.get('/getProductImages',(req,res) =>{    
    var query = "select image from products";
        db_connection.query(query,(err,results)=>{
            if(!err){
                return res.send(results);
            }
            else{
                return res.status(500).json(err);
            }
    
    })}
    )

router.post('/login',[
    body('email',"Invalid email address")
    .notEmpty()
    .escape()
    .trim().isEmail(),
    body('password',"The Password must be of minimum 4 characters length").notEmpty().trim().isLength({ min: 4 }),
],login);



router.get('/getuser:/email',getUser);





router.delete('/deleteuser/:userId',deleteuser);
router.patch('/userupdate/:userId',userupdate);


//product 
router.post('/product/create',upload,[
    body('name',"enter product name")
    .notEmpty()
    ],products);

//router.get ('/getproduct',productsView);
//we can also write like this:
// router.get ('/getproduct',(req,res,next)=>{
router.get('/getproduct',(req,res) =>{    
var query = "select * from products";
    db_connection.query(query,(err,results)=>{
        if(!err){
            return res.send(results);
        }
        else{
            return res.status(500).json(err);
        }

})}
)

// router.get('/getproductwithid/:productId',(req,res) =>{    
//     const productId = req.params.productId;
//     var query =("SELECT `productId`, `name`,`description`,`price`, `type`,`image` FROM products WHERE `productId`=?",[productId]);
//         db_connection.query(query,(err,results)=>{
//             if(!err){
//                 return res.send(results);
//             }
//             else{
//                 return res.status(500).json(err);
//             }
    
//     })}
//     )


router.get ('/getproductwithid/:productId', productsView);
router.put('/updateproduct/:productId',upload, productupdate);
router.delete('/deleteproduct/:productId', deleteproduct);

//orders
router.post ('/addorder',addorder);

router.patch('/updateorder/:orderId', orderupdate);
router.delete('/deleteorder/:orderId', deleteorder);
//router.get ('/getorder',ordersView);
router.get('/getorder',(req,res) =>{    
    var query = "select * from orders";
        db_connection.query(query,(err,results)=>{
            if(!err){
                return res.send(results);
            }
            else{
                return res.status(500).json(err);
            }
    
    })}
    );

module.exports = router;