import React from "react";
import '../../../src/cart.css';
import { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import SendIcon from '@mui/icons-material/Send';
import { Box } from "@material-ui/core";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import Footer from "../Footer";

const CartForUser = ({ cart, setCart, handleChange }) => {
    const [pric, setPrice] = useState(0);
    const [orderId, setOrderId] = useState(0);
    const [itemss, setItemss] = useState([]);
    const [qty, setQuantity] = useState(0);
    const [nme, setName] = useState("");
    const [pid, setProductId] = useState(0);
    const [sp, setSinglePrice] = useState(0);

    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    const email = localStorage.getItem("email");
    function checkout(items) {
        const nme = (cart.map((items) => JSON.stringify(items.name)))
        setName(nme);
        const qty = (cart.map((items) => JSON.stringify(items.quantity)))
        setQuantity(qty);
        const pId = (cart.map((items) => JSON.stringify(items.productId)))
        setProductId(pId);

        const sp = (cart.map((items) => JSON.stringify(items.price)))
        setSinglePrice(sp);
    }
    toast.configure();

    async function addorder(req, res, next) {
        let price = (pric.toString());
        let name = (nme.toString());
        let productId = (pid.toString());
        let quantity = (qty.toString());
        let singlePrice = (sp.toString());
        let item = { orderId, productId, name, quantity, singlePrice, price, email, phone, address, date };
        console.log(item);

        axios.post("http://localhost:3001/addorder", item
        ).then((res) => {
            if (res.status === 201) {
                toast("order successfully added");
            } else Promise.reject();
        })
            .catch((err) => toast("Something went wrong"));
    }


    const handleRemove = (productId) => {
        const arr = cart.filter((items) => items.productId !== productId);
        setCart(arr);
        handlePrice();
    }

    const handlePrice = () => {
        let ans = 0;
        cart.map((items) => (ans += items.quantity * items.price))
        setPrice(ans)
    }



    useEffect(() => {
        handlePrice();
        checkout();
    }, [cart])



    return (
        // <><article>
        //     {cart.map((items) => (
        //         <div className="cart_box" key={items.productId}>
        //             <div className="cart_img">
        //                 <img src={`http://localhost:3001/${items.image} `} alt="" />
        //                 <p>{items.name} </p>
        //                 <p>{items.type}</p>
        //             </div>
        //             <div>
        //                 <button onClick={() => handleChange(items, 1)}>+</button>
        //                 <button>{items.quantity}</button>
        //                 <button onClick={() => handleChange(items, -1)}>-</button>
        //             </div>
        //             <div>
        //                 <span>{items.price}</span>
        //                 <button onClick={() => handleRemove(items.productId)}>Remove</button>
        //             </div>
        //         </div>
        //     ))}
        //     <div className="total">
        //         <span>Total Amount Of Your Cart</span>
        //         <span> RS: {pric}</span>
        //     </div>
        //     <Card sx={{ maxWidth: 345, marginTop: '10px', marginBottom: '40px',float:'none' }}>
        //         <CardActionArea>
        //             <CardContent>
        //                 <Typography gutterBottom variant="h5" component="div">
        //                 Fill this form and place order
        //                 </Typography>
        //             </CardContent>
        //         </CardActionArea>
        //         <CardActions>
        //             <div style={{ alignItems: 'center' }}>
        //                 <h1 style={{ color: 'brown', fontFamily: 'fantasy', marginTop: '5px', fontSize: '2rem' }}> Check Out</h1>
        //                 <TextField id="outlined-basic" type='number' min="0" value={phone} onChange={(e) => { setPhone(e.target.value); } } label="Phone" variant="outlined" /><br /><br />
        //                 <TextField id="outlined-basic" type='text' value={address} onChange={(e) => { setAddress(e.target.value); } } label="Address" variant="outlined" /> <br />
        //                 <Button variant="outlined" style={{ marginTop: '5px' }} onClick={addorder} endIcon={<SendIcon />}>
        //                     Checkout
        //                 </Button>
        //             </div>
        //         </CardActions>
        //     </Card>

        // </article><Footer /></>

        <div style={{ height:'auto', paddingTop:'0px',
            background: `rgb(177,176,242)`,
                    background: `linear-gradient(90deg, rgba(177,176,242,0.9668242296918768) 28%, rgba(148,187,233,0.9136029411764706) 73%)`
        }}>
        <article style={{paddingTop:'10px'}}>
            {cart.map((items) => (
                <div className="cart_box" key={items.productId}>
                    <div className="cart_img">
                        <img src={`http://localhost:3001/${items.image} `} alt="" />
                        <p>{items.name} </p>
                        <p>{items.type}</p>
                    </div>
                    <div>
                        <button onClick={() => handleChange(items, 1)}>+</button>
                        <button>{items.quantity}</button>
                        <button onClick={() => handleChange(items, -1)}>-</button>
                    </div>
                    <div>
                        <span>{items.price}</span>
                        <button onClick={() => handleRemove(items.productId)}>Remove</button>
                    </div>
                </div>
            ))}
            <div className="total">
                <span>Total Amount Of Your Cart</span>
                <span> RS: {pric}</span>
            </div>
            <Card sx={{ maxWidth: 345, marginTop: '10px', marginBottom: '40px',float:'none',background: `rgb(132,132,180)`,
background: `linear-gradient(90deg, rgba(132,132,180,1) 0%, rgba(208,218,231,1) 85%)` }}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Fill this form and place order
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <div style={{ alignItems: 'center' }}>
                        <h1 style={{ color: 'brown', fontFamily: 'fantasy', marginTop: '5px', fontSize: '2rem' }}> Check Out</h1>
                        <label> Address</label> <br />
                        <TextField id="outlined-basic" type='text'  value={address} onChange={(e) => { setAddress(e.target.value) } } variant="outlined" required /> <br />
                        <label> Phone</label> <br />
                         <TextField type="number" variant="outlined" InputProps={{  inputProps: {  max: 9999999999, min: 0  }}} value={phone} onChange={(e) => { setPhone(e.target.value) } }  required/><br />
                        <Button variant="outlined" style={{ marginTop: '5px' }} onClick={addorder} endIcon={<SendIcon />}>
                            Checkout
                        </Button>
                    </div>
                </CardActions>
            </Card>
        </article><Footer />
        </div>
    )
}

export default CartForUser