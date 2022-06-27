const { validationResult } = require('express-validator');
const conn = require('../../dbConnection').promise();

exports.addorder = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    try {
        const [rows] = await conn.execute('INSERT INTO `orders`(orderId,productId,name,address,phone,price,quantity,singlePrice,email,date) VALUES (?,?,?,?,?,?,?,?,?,?)', [
            req.body.orderId,
            req.body.productId,
            req.body.name,
            req.body.address,
            req.body.phone,
            req.body.price,
            req.body.quantity,
            req.body.singlePrice,
            req.body.email,
            req.body.date
        ]);
        if (rows.affectedRows === 1) {
            return res.status(201).json({
                message: "The order has been successfully added.",
            });
        }
    } catch (err) {
        next(err);
    }

}