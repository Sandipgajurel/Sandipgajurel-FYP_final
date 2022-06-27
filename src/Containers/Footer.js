import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Grid,
    Link
} from "@material-ui/core";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
  } from "./FooterStyles"
import {
    Security,
    Info
} from "@material-ui/icons";

const Footer = () => {
return(
<>
        <AppBar 
         position="static"
          //elevation={0}
           component="footer" 
         style={{background: `rgb(199,199,209)`,
         background: `linear-gradient(90deg, rgba(199,199,209,1) 0%, rgba(221,231,228,1) 0%, rgba(7,5,14,1) 0%, rgba(9,9,121,1) 100%)` }}
              //backgroundImage: `linear-gradient(red, yellow, green)`
            
        // style={{backgroundColor:`rgb(235, 195, 64)`,   
        //     marginTop:'auto',
        //     width: "100%",
        //     height: '80px'
        // }} 
        >
            {/* <Toolbar style={{ justifyContent: "center", height:"60px"}} >
                <Typography variant="caption" style={{justifyContent: "center"}}>©2022 Online Bag Shop</Typography>
            </Toolbar> */}

{/* <h1 style={{ color: "white", 
                   textAlign: "center", 
                   marginTop: "3px",
                   fontSize:'25px' }}>
       Online Bag Shop
      </h1> */}
      <Container>
        <Row>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">All type of Bag</FooterLink>
          
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">9813687140</FooterLink>
            <FooterLink href="#">9841155726</FooterLink>
         </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
          </Column>

          <Column>
            <Heading>Address</Heading>
            <FooterLink href="#">Kathmandu,Nepal</FooterLink>
          </Column>
        </Row>
      </Container>
        </AppBar>
    </>
)
}
export default Footer;