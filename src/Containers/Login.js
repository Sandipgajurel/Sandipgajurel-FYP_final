import * as  React from 'react';
import { useState } from 'react'
import { useForm } from "react-hook-form";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Grid, TextField, Button, Input } from '@material-ui/core';
import { Link } from 'react-router-dom';
import LoginApp from './loginapp';
import { useNavigate } from 'react-router-dom';

export default function LoginForm({Login, error}) {
  const [details, setDetails] = useState({email:"", password:""});
  
 
  const submitHandler = e => {
    e.preventDefault();
    Login(details);
  }

//  let navigate = useNavigate();
//   const routetosignuop = () =>{
//     let path = `/signup`; 
//     navigate(path);
//   }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm"style={{paddingTop:"30px"}} >
        <Typography component="div" style={{ backgroundColor: '#d7d9db', height: '90vh' }} >

        <form onSubmit={submitHandler} style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '70vh'}} >
     
     <div className ="form-inner">
       <h2 style={{textAlign:"center"}}>Login</h2>< br/>
       
       {(error !== "") ? (<div className="error">{error}</div>):""}
<br />
<div className ="form-group">
         <label htmlFor="email">Email</label><br />
         <Input id="email" label="email" variant="outlined" type="email"   onChange={e => setDetails({...details, email: e.target.value})} value={details.email} required />
         
</div>
<br />
<div className ="form-group">
         <label htmlFor="Password">Password</label><br />
         <Input id="password" label="password" variant="outlined"  type="password"  onChange={e => setDetails({...details, password: e.target.value})} value={details.password} required />
     
</div>
<br />
<Button  variant="outlined" color="primary" type="submit" value="Login">
  login
</Button>
     </div>
   </form>
   <br />
   <br />
{/* <h3 style={{float:"right", marginRight:"10px"}}>Don't have account? <button type="button" className="btn btn-default" onClick={routetosignuop} >Sign up</button></h3> */}

   </Typography>
      </Container>
    </React.Fragment>
  );
}