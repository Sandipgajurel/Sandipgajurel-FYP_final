import React, { useEffect } from 'react';
import { useState } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { TextField, Button} from '@material-ui/core';
import axios from 'axios';
import { useNavigate } from 'react-router'
import { useParams } from 'react-router-dom'
import { Form, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';


const EditProduct = () => {
const [data, setData] = useState([]);

const [name, setName] = useState("");
const [description, setDescription] = useState("");
const [price, setPrice] = useState("");
const [type, setType] = useState("");
const [image, setImage] = useState("");
//const [productId, setProductId] = useState(null);

toast.configure();

const { productId } = useParams();
const getdata  = () =>{
  axios
   .get(`http://localhost:3001/getproductwithid/${productId}`)
.then(response =>{
  //console.log(response.data)
  setData(response.data);
  setName(response.data.products.name)
  setDescription(response.data.products.description)
  setPrice(response.data.products.price)
  setType(response.data.products.type)
  setImage(response.data.products.image)
  
  //setProductId(response.data[0].productId)
})

}
let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/Dashboard`; 
      navigate(path);
    }
    
useEffect( ()=>{
  getdata();
} ,[] )

// async function updateProduct (){
// let itemss ={ name, description, price, type, image}
// console.warn("itemss",itemss)
// let result = await fetch(`http://localhost:3001/updateproduct/${productId}`,{
//   method:"PUT",
//   body:JSON.stringify(itemss),
//   headers:{
//     "Content-Type":"application/json",
//     "Accept":"application/json"
//   }
// })
// result = await result.json()
// }
const updateProduct = async (e) => {
  //let itemss ={ productId, name, description, price, type, image}
  e.preventDefault()

  const formData = new FormData()
  formData.append('name',name)
  formData.append('description',description)
  formData.append('price',price)
  formData.append('type',type)
  formData.append('image',image)
axios
    .put(
`http://localhost:3001/updateproduct/ +${productId}`,
//{
//   name,
//   description,
//   price,
//   type,
//   image,

// method:'PUT',
// headers:{
//   'Accept':'application/json',
//   'Content-Type':'application/json'
// },
// body:JSON.stringify(itemss)
//},
   formData) .then((res) => {
    if (res.status === 201) {
      toast("product successfully updated");
      // window.location.reload();
      routeChange();
    } else Promise.reject();
  })
  .catch((err) => toast("Something went wrong"));
   
//    .then((result) =>{
//       result.json().then((resp)=>{
// console.warn(resp)
       

//      })
//    })
}

 return (
    <React.Fragment>
      <CssBaseline />
      <div className="p-3 mb-2 bg-secondary" >
      <Container maxWidth="md" >
        <Typography component="div" style={{ backgroundColor: '#d7d9db', height:'98vh' }} >
         
        <div className="card-header" style={{textAlign:'center'}}>
      
          <h3 className="card-title text-dark" >Edit Product</h3>
        </div>
        <form type="submit" onSubmit={updateProduct} method='POST' encType='multipart/form-data' style={{ display:'flex', paddingLeft:'110px',display: 'flex',  justifyContent:'center', alignItems:'center' }}  >
        
     <div className ="form-inner">
     
       <div className ="form-group" >
         <label style={{paddingTop:"10px",paddingBlockEnd:'5px'}} htmlFor="name"> Product Name</label> < br />
         <TextField  id ="name" value={name} onChange={(e) =>{setName(e.target.value)}} variant="outlined" type="text"  required style={{paddingBottom:"10px", width:'300px'}}  /> 
        </div>

        <div className ="form-group">
         <label style={{paddingTop:"10px",paddingBlockEnd:'5px'}} htmlFor="name">Description</label> < br />
         <TextField  id="description"variant="outlined" type="text" value={description} onChange={(e) =>{setDescription(e.target.value)}} required style={{paddingBottom:"10px",width:'300px'}} />
        </div>
<div >
        <div className ="form-group">
         <label style={{paddingTop:"10px",paddingBlockEnd:'5px'}} htmlFor="name">price</label> < br />
         <TextField id= "price" variant="outlined" type="number" min="0" value={price} onChange={(e) =>{setPrice(e.target.value)}}  required style={{paddingBottom:"10px",width:'300px'}} />
        </div>
        <div className ="form-group">
         <label style={{paddingTop:"10px",paddingBlockEnd:'5px'}} htmlFor="name"> Product Type</label> < br />
         <TextField id="type" value={type} onChange={(e) =>{setType(e.target.value)}} variant="outlined" type="text"  required style={{paddingBottom:"15px",width:'300px'}} />
        </div>
        
        <div className ="form-group" >
        <Form.Label>Upload image</Form.Label>
        <Form.Control type='file' 
         onChange={(e) =>setImage (e.target.files[0])} 
          name='image' size="md" />
        </div>

{/* <div className="custom-file" style={{paddingBottom:"10px",float:"right",marginRight:'15px'}}>
                    <input
                      type="file"
                      accept="image/png, image/gif, image/jpeg"
                      required
                      className="custom-file-input"
                      
                      id= "image"
                    //   {...register('BackgroundImageFile')}
                    />
                    <label
                      className="custom-file-label success"
                      style={{ width: 285 }}
                    >
                      Select Image
                    </label>

                  </div> */}
  
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
export default (EditProduct);