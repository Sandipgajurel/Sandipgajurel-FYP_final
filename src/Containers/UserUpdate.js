import React, { useEffect } from 'react';
import { useState } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { TextField, Button } from '@material-ui/core';
import axios from 'axios';
import { useNavigate } from 'react-router'
import { useParams } from 'react-router-dom'
import { Form, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const bcrypt = require('bcryptjs');


const EditUser = () => {
const [data, setData] = useState([]);

const [name, setName] = useState("");
const [userId, setUserId] = useState("");
const [password, setPassword] = useState("");
toast.configure()

// function myComponent() {
//     const data = localStorage.getItem('email')
//     setEmail(JSON.parse(data))
// }
// const requestOptions = {
//     method: 'GET',
//     headers: { 'Content-Type': 'application/json' },
//     body: (email)
// };
const { email } = useParams();
const getdata  = () =>{
  axios
   .get(`http://localhost:3001/getuser`,{
     email:email
   }
     )
.then(response =>{
  console.log(response)
//   setData(response.data);
//   setName(response.data.users.name)
//   setUserId(response.data.users.userId)
//   bcrypt.setPassword(response.data.users.password)
})

}
let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/Dashboard`; 
      navigate(path);
    }
    
useEffect( ()=> {
   
 
} ,[] )

// const updateProduct = async (e) => {
//   e.preventDefault()

//   const formData = new FormData()
//   formData.append('name',name)
//   formData.append('description',description)
//   formData.append('price',price)
//   formData.append('type',type)
//   formData.append('image',image)
// axios
//     .put(
// `http://localhost:3001/updateproduct/ +${productId}`,
//    formData) .then((res) => {
//     if (res.status === 201) {
//       toast("product successfully updated");
//       // window.location.reload();
//       routeChange();
//     } else Promise.reject();
//   })
//   .catch((err) => toast("Something went wrong"));
// }

 return (
    <React.Fragment>
      <CssBaseline />
      <div className="p-3 mb-2 bg-secondary" >
      <Container maxWidth="md" >
        <Typography component="div" style={{ backgroundColor: '#d7d9db', height:'98vh' }} >
        <div className="card-header" style={{textAlign:'center'}}>
          <h3 className="card-title text-dark" >Edit User</h3>
        </div>
        <form type="submit" 
        //onSubmit={updateProduct}
         method='POST' encType='multipart/form-data' style={{ display:'flex', paddingLeft:'110px',display: 'flex',  justifyContent:'center', alignItems:'center' }}  >
        
     <div className ="form-inner">
     
       <div className ="form-group" >
         <label style={{paddingTop:"10px",paddingBlockEnd:'5px'}} htmlFor="name"> Name</label> < br />
         <TextField  id ="name" 
        // value={name} onChange={(e) =>{setName(e.target.value)}} 
         variant="outlined" type="text"  required style={{paddingBottom:"10px", width:'300px'}}  /> 
        </div>

        <div className ="form-group">
         <label style={{paddingTop:"10px",paddingBlockEnd:'5px'}} htmlFor="password">password</label> < br />
         <TextField  id="password"variant="outlined" type="password" 
         //value={description} onChange={(e) =>{setDescription(e.target.value)}} 
         required style={{paddingBottom:"10px",width:'300px'}} />
        </div>
<div >
        
  
<Button 
// onClick={() => {updateProduct() }}
 type='submit'  variant="outlined" color="primary" required  style={{float:"right",marginRight:'15px',paddingBottom:"20px",paddingTop:"20px", height:'50px',width:'90px'}}>
 Update Product
</Button>

</div>
     </div>
   </form >
   </Typography>
      </Container>
      </div>
    </React.Fragment>
  );
}
export default (EditUser);