import * as  React from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { TextField, Button } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignUpForm() {

 const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

toast.configure()

const navigate = useNavigate();
const routetohome = () => {
  let path = `/`;
  navigate(path);
}

function sucess() {
  return ( toast('User has been added sucessfully'),
   routetohome()
   )}
  
async function signup(req, res, next ){
  let item ={name,email,password}
  console.log(item)

let result = await fetch("http://localhost:3001/register",{
  method:"POST",
  body:JSON.stringify(item),
  headers:{
    "Content-Type":"application/json",
    "Accept":"application/json"
  }
}).then((res) => {
  if (res.status === 201) {
    toast("user added sucessfuly");
    navigate('/')
    //window.location.reload();
  } 
  else if(res.status === 500) {
    toast("Email has been used already");
  }
  else Promise.reject();
})
.catch((err) => toast("Something went wrong"));
}
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" style={{marginTop:'15px'}} >
        <Typography component="div" style={{ backgroundColor: '#d7d9db', height: '95vh' }} >

        <form  style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '80vh'}} >
     
     <div className ="form-inner">
       <h2 style={{paddingTop:"40px"}} > Signup</h2>< br/>
       
       <div className ="form-group">
         <label htmlFor="name">Name</label> < br />
         <TextField  variant="outlined" type="text" value={name} onChange={(e)=>setName(e.target.value)} required  />
         
          
</div>
<br />
<div className ="form-group" style={{paddingBottom:"10px"}} >
         <label htmlFor="email">Email</label><br />
         <TextField    variant="outlined" type="email"   value={email} onChange={(e)=>setEmail(e.target.value)} required />
         
</div> 
<div className ="form-group" style={{paddingBottom:"10px"}}>
         <label htmlFor="Password">Password</label><br />
         <TextField variant="outlined"  type="password" value={password} onChange={(e)=>setPassword(e.target.value)}  required />
</div>
<div >
  
<FormControlLabel
          //value="end"
          control={<Checkbox color="primary" />}
          label="I aggree to term of service and policy"
          labelPlacement="end"
        />
</div>
<Button variant="outlined" color="primary" style={{float:"left"}} onClick={signup} >
  Sign Up
</Button>
     </div>
   </form >
   </Typography>
      </Container>
    </React.Fragment>
  );
}
