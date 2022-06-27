import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Icon } from '@iconify/react';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router'
import image1 from '../img/7.jpg';
import Cardimage from './Card';
import Footer from './Footer';
import { Container } from '@material-ui/core';
import Card from '@mui/material/Card';
import { Button, CardActionArea, CardActions } from '@mui/material';
import image from '../img/download (4).jpg';
import image2 from '../img/download (5).jpg';
import image3 from '../img/download (6).jpg';
import image4 from '../img/school.jpg';

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


const MainPage = () => {
  const classes = useStyles();

  const navigate = useNavigate();
  const routetouserlogin = () => {
    let path = `/userlogin`;
    navigate(path);
  }
  const routetoadminlogin = () => {
    let path = `/login`;
    navigate(path);
  }


  return (
    <div>
      <>
        <AppBar position="static" style={{
          background: `rgb(199,199,209)`,
          background: `linear-gradient(90deg, rgba(199,199,209,1) 0%, rgba(221,231,228,1) 0%, rgba(7,5,14,1) 0%, rgba(9,9,121,1) 100%)`
        }} >

          <Toolbar>

            <Typography variant="h6" className={classes.title} style={{ textAlign: 'left', fontSize: '25px' }}>
              Online Bag Shop
            </Typography>
            <a href="www.facebook.com">
              <Icon icon="mdi:facebook" style={{ paddingLeft: '10px', enableBackground: 'new 0 0 24 24', height: '35', viewBox: '0 0 24 24', width: '35' }} />
            </a>
            <a href="www.instragram.com">
              <Icon icon="mdi:instagram" style={{ paddingLeft: '10px', enableBackground: 'new 0 0 24 24', height: '35', viewBox: '0 0 24 24', width: '35' }} />
            </a>

            {/* shopping cart */}
            <Badge color="secondary" >
              <ShoppingCartIcon style={{ paddingLeft: '10px', enableBackground: 'new 0 0 24 24', height: '35', viewBox: '0 0 24 24', width: '35' }}
              />{" "}
            </Badge>
            <Select
              label="Login"
              style={{ marginLeft: '20px' }}
              IconComponent={() => <PersonIcon style={{ color:'white', enableBackground: 'new 0 0 24 24', height: '45', viewBox: '0 0 24 24', width: '35' }} />}
            >
              <MenuItem onClick={routetoadminlogin} >Admin Login</MenuItem>
              <MenuItem onClick={routetouserlogin}>User Login</MenuItem>
            </Select>

          </Toolbar>
          {/* <ModalDialog open={open} handleClose={handleClose} /> */}
        </AppBar>
      </>
      <img src={image1} alt="*" style={{ width: '100%', height: '500px' }} />

      <div style={{ backgroundColor: 'black', paddingTop: '20px', paddingBottom: '20px', display: 'flex', justifyContent: 'center' }}>
        <h1 style={{ color: 'Highlight', fontStyle: 'italic', marginTop: '55vh' }}>All type of bags are available for order.</h1>
        <Container style={{
          width: 'auto', background: `rgb(64,64,113)`,
          background: `linear-gradient(90deg, rgba(64,64,113,1) 0%, rgba(93,92,92,1) 100%)`, alignItems: 'center'
          , borderRadius: '30px',
          //padding: '40px',
          marginRight: '15px',
          //marginLeft:'30px',
          //marginTop:'15px',
          //marginBottom:'10px',
          paddingBottom: '15px'
          //   ,
          //   width: 'auto',
          //   height: '100',
        }}>
          <div class="container">

            <div class="row">

              <div class="col">
                <h1 style={{ textAlign: 'center', marginTop: '20px', color: 'white' }}> Our services</h1>


                <div>
                  <h3 style={{ textAlign: 'center', marginTop: '20px', paddingTop: '10px', color: 'Highlight', fontWeight: 'bold', fontStyle: 'italic' }}> MOVIE CAMERA BAGS</h3>
                  <h4 style={{ textAlign: 'center', color: 'black', fontStyle: 'italic' }}>It is suitable for movie camera and lens. </h4>
                  <h5 style={{ textAlign: 'center', color: 'black' }}>Price:5000-20000</h5>
                </div>

                {/* <div>
     <h3 style={{textAlign:'center', marginTop:'20px', paddingTop:'100px'}}> MEDIUM CAMERA BAG </h3>
     <h4>It is good for medium size camera and there are seafty for lens.</h4>
    </div> */}

                <div>
                  <h3 style={{ textAlign: 'center', marginTop: '40px', paddingTop: '35px', color: 'Highlight', fontWeight: 'bold', fontStyle: 'italic' }}> DSLR CAMERA BAGS</h3>
                  <h4 style={{ textAlign: 'center', fontStyle: 'italic', color: 'black' }} >This bag is good for DSLR camera and lens.</h4>
                  <h5 style={{ textAlign: 'center', color: 'black' }}>Price:5000-10000</h5>
                </div>

                <div>
                  <h3 style={{ textAlign: 'center', marginTop: '40px', paddingTop: '35px', color: 'Highlight', fontWeight: 'bold', fontStyle: 'italic' }}> SCHOOL AND TRAVEL BAGS </h3>
                  <h4 style={{ textAlign: 'center', fontStyle: 'italic', color: 'black' }}>This bags can be used for school, college and travel purpose.</h4>
                  <h5 style={{ textAlign: 'center', color: 'black' }}>Price:1000-5000</h5>
                </div>
              </div>


              <div class="col">
                <div style={{ marginTop: '40px', paddingTop: '30px', paddingLeft: '250px' }}>
                  <img style={{ width: '190px', height: '200px' }} src={image} alt='' />
                </div>
                <div style={{ paddingTop: '10px', paddingLeft: '250px' }}>
                  <img style={{ width: '190px', height: '200px' }} src={image3} alt='' />
                </div>
                <div style={{ paddingTop: '10px', paddingLeft: '250px' }}>
                  <img style={{ width: '190px', height: '210px' }} src={image4} alt='' />
                </div>

              </div>
            </div>
          </div>

        </Container>
      </div>


      <div style={{
        background: `rgb(0,0,80)`,
        background: `linear-gradient(90deg, rgba(0,0,80,1) 0%, rgba(50,32,32,1) 100%)`, paddingBottom: '20px'
      }}>
        <Cardimage />
      </div>
      <div >
        <Footer />
      </div>
    </div>
  )
}

export default MainPage