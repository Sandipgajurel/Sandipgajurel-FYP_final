const jwt = require('jsonwebtoken');
const conn = require('../../dbConnection').promise();
const Express = require('express')
var app = Express()
app.use(Express.json());
exports.getUser = async (req,res,next) => {

    try{

        // if(
        //     !req.headers.authorization ||
        //     !req.headers.authorization.startsWith('Bearer') ||
        //     !req.headers.authorization.split(' ')[1]
        // ){
        //     return res.status(422).json({
        //         message: "Please provide the token",
        //     });
        // }

        // const theToken = req.headers.authorization.split(' ')[1];
        // const decoded = jwt.verify(theToken, 'the-super-secrect');
        const email = req.params.email;
        const [row] = await conn.execute(
            "SELECT `name`,`userId`, password  FROM `users` WHERE `email`=?",
            [email]
        );

        if(row.length > 0){
            return res.json({
                user:row[0]
            });
        }

        res.json({
            message:"No user found"
        });
        
    }
    catch(err){
        next(err);
    }
}