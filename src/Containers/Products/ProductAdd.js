import React from 'react';
import { useState, useEffect } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { TextField, Button } from '@material-ui/core';
import { Form, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../Navbar';
import { useNavigate } from 'react-router'
import { Toast } from 'react-bootstrap';
export default function ProductAdd() {

 const [name, setName] = useState("")
const [description, setDescription] = useState("")
const [price, setPrice] = useState("")
const [type, setType] = useState("")
const [image, setImage] = useState("")

toast.configure()

const navigate = useNavigate();
const addProductHandler = async (e) => {
  // let item ={name,description,price,type,image}
  // console.log(item)
e.preventDefault()

  const formData = new FormData()
  formData.append('name',name)
  formData.append('description',description)
  formData.append('price',price)
  formData.append('type',type)
  formData.append('image',image)

  axios.post("http://localhost:3001/product/create", formData)
  .then((res) => {
  if (res.status === 201) {
    toast("product successfully added");
    navigate('/Dashboard')
    //window.location.reload();
  } else Promise.reject();
})
.catch((err) => toast("Something went wrong"));

}
  return (
    <React.Fragment>
      <CssBaseline />
      <div className="p-3 mb-2 bg-secondary" >
     
      <Container maxWidth="md" >
        <Typography component="div" style={{ backgroundColor: '#d7d9db', height:'98vh' }} >
        <div className="card-header" style={{textAlign:'center'}}>
      
          
          <h3 className="card-title text-dark" >Add New Product</h3>
        </div>
        <form onSubmit={addProductHandler} method='POST' encType='multipart/form-data' style={{ display:'flex', paddingLeft:'110px',display: 'flex',  justifyContent:'center', alignItems:'center' }} >
        
     <div className ="form-inner">
     
       <div className ="form-group" >
         <label style={{paddingTop:"10px",paddingBlockEnd:'5px'}} htmlFor="name"> Product Name</label> < br />
         <TextField  variant="outlined" type="text" value={name} onChange={(e)=>setName(e.target.value)} required style={{paddingBottom:"10px", width:'300px'}} /> 
        </div>

        <div className ="form-group">
         <label style={{paddingTop:"10px",paddingBlockEnd:'5px'}} htmlFor="name">Description</label> < br />
         <TextField  variant="outlined" type="text" value={description} onChange={(e)=>setDescription(e.target.value)} required style={{paddingBottom:"10px",width:'300px'}} />
        </div>
<div >
        <div className ="form-group">
         <label style={{paddingTop:"10px",paddingBlockEnd:'5px'}} htmlFor="name">price</label> < br />
         <TextField  variant="outlined" type="number" min="0" value={price} onChange={(e)=>setPrice(e.target.value)} required style={{paddingBottom:"10px",width:'300px'}} />
        </div>
        <div className ="form-group">
         <label style={{paddingTop:"10px",paddingBlockEnd:'5px'}} htmlFor="name"> Product Type</label> < br />
         <TextField  variant="outlined" type="text" value={type} onChange={(e)=>setType(e.target.value)} required style={{paddingBottom:"15px",width:'300px'}} />
        </div>


        <div className ="form-group" style={{paddingBottom:"10px",float:"right",marginRight:'15px'}} >
        <Form.Label>Upload image</Form.Label>
        <Form.Control type='file'  onChange={(e) =>setImage (e.target.files[0])} name='image' size="md" />
        </div>

{/* <div className="custom-file" style={{paddingBottom:"10px",float:"right",marginRight:'15px'}}>
                    <input
                      type="file"
                      accept="image/png, image/gif, image/jpeg"
                      onChange={(e) =>setImage (e.target.value)} required
                      className="custom-file-input"
                      value={image}
                    //   {...register('BackgroundImageFile')}
                    />
                    <label
                      className="custom-file-label success"
                      style={{ width: 285 }}
                    >
                      Select Image
                    </label>

                  </div> */}
  
<Button type='submit' variant="outlined" color="primary" style={{float:"right",marginRight:'15px', height:'30px',width:'80px'}}>
 Add
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
