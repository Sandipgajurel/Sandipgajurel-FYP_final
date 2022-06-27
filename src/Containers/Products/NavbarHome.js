import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Select from '@mui/material/Select';
import { Icon } from '@iconify/react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';


const useStyles = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const NavbarHome = ({ setShow, size}) => {
    const classes = useStyles();
  return (
    <div>
        <AppBar position="static" style={{background: `rgb(199,199,209)`,
background: `linear-gradient(90deg, rgba(199,199,209,1) 0%, rgba(221,231,228,1) 0%, rgba(7,5,14,1) 0%, rgba(9,9,121,1) 100%)` }} >

<Toolbar>

    <Typography variant="h6" className={classes.title} style={{ textAlign: 'left', fontSize: '25px' }}>
        Online Bag Shop <AddShoppingCartIcon onClick={() => setShow(true)} ></AddShoppingCartIcon>
    </Typography>
    <a href="www.facebook.com">
        <Icon icon="mdi:facebook" style={{ paddingLeft: '10px', enableBackground: 'new 0 0 24 24', height: '35', viewBox: '0 0 24 24', width: '35' }} />
    </a>
    <a href="www.instragram.com">
        <Icon icon="mdi:instagram" style={{ paddingLeft: '10px', enableBackground: 'new 0 0 24 24', height: '35', viewBox: '0 0 24 24', width: '35' }} />
    </a>
    <a href="/">
        <LogoutIcon  style={{ paddingLeft: '10px', enableBackground: 'new 0 0 24 24', height: '35', viewBox: '0 0 24 24', width: '35' }} />
    </a>

    {/* shopping cart */}
    {/* <Badge color="secondary" >
        <ShoppingCartIcon style={{ paddingLeft: '10px', enableBackground: 'new 0 0 24 24', height: '35', viewBox: '0 0 24 24', width: '35' }}
        />{" "}
    </Badge> */}
    <div className='nav_box'>
        
    <div className='cart' onClick={() => setShow(false)} style={{cursor:'pointer', marginLeft:'15px', marginTop:'5px'}}>
        <span>
            <i className="fas fa-cart-plus" style={{fontSize:'2rem', color:'black'}} ></i>
        </span>
        <span style={{padding:'3px', backgroundColor:'white', color:'black', fontWeight:'bold', borderRadius:'5px', position:'relative', top:'-15px' }}>{size}</span>
    </div>
    </div>


</Toolbar>
</AppBar>
    </div>
  )
}

export default NavbarHome