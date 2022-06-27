import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Select from '@mui/material/Select';
import { Icon } from '@iconify/react';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router'
import axios from 'axios';
import CardHomepage from './Products/CardHomepage';
import { Container } from '@material-ui/core';
import EditUser from './UserUpdate';
import image1 from '../img/7.jpg';
const useStyles = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));


function Homepage({ handleClick, setShow }) {
    const classes = useStyles();
    const [products, setProducts] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [email, setEmail]= useState("");
    const navigate = useNavigate()
    const logout = () => {
        localStorage.clear()
       // window.location.reload(false)
    }
   

    const getproduct = () => {
        axios
            .get('http://localhost:3001/getproduct')

            .then(response => {
                //console.log(response)
                setProducts(response.data)

            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        getproduct();
    }, [])

    return (
        <div
        //style={{ margin:'0', minHeight:'100vh', width:'100%', height:'100%'}}
        >


            {/* sidebar */}
            <div>
            <img src={image1} alt="*" style={{width:'100%', height:'500px'}} />
                    {/* card inside sidebar */}
                    <Container style={{ width: 'auto', background: `rgb(64,64,113)`,
background: `linear-gradient(90deg, rgba(64,64,113,1) 0%, rgba(93,92,92,1) 100%)`,  alignItems: 'center'
,borderRadius: '30px',
  //padding: '40px',
  //marginRight:'15px',
  marginLeft:'30px',
  marginTop:'15px',
  marginBottom:'10px',
  paddingBottom:'15px'
//   ,
//   width: 'auto',
//   height: '100',
}}>
                        <h1 >Featured Products</h1>
                        <div className='item-container'>
                        {/* <section style={{ display: 'flex', flexDirection: 'row', width: '100vh' }} > */}
                            {products.map((items) => (
                                <CardHomepage key={items.productId} quantity={items.quantity = 1} items={items} handleClick={handleClick} />
                            ))}
                            </div>
                        {/* </section> */}
                    </Container>
               
            </div>

            <Footer />
        </div>
    );
}
export default Homepage;