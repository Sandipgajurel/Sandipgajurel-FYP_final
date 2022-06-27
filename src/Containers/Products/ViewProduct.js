import React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Row, Table } from 'react-bootstrap';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ProductView = () => {
  const [products, setProducts] = useState([]);
  toast.configure();

  const getproduct = () => {
    axios
      .get('http://localhost:3001/getproduct')

      .then(response => {
        console.log(response)
        setProducts(response.data)

      })
      .catch(err => {
        console.log(err)
      })

  }


  useEffect(() => {
    getproduct();
  }, [])



  // const id = products.map(datas => (datas.productId))
  // const deleteProduct = () => {
  //   axios
  //     .delete(
  //       'http://localhost:3001/deleteproduct/' + id)
  //     .then((res) => {
  //       if (res.status === 200) {
  //         toast("product successfully deleted");
  //         window.location.reload();
  //       } else Promise.reject();
  //     })
  //     .catch((err) => toast("Something went wrong"));
  // };
  const deleteProduct = (productId) => {
    if (window.confirm('Are you sure?')) {
      axios
        .delete(
          'http://localhost:3001/deleteproduct/' + productId)
        .then((res) => {
          if (res.status === 200) {
            toast("product successfully deleted");
            window.location.reload();
          } else Promise.reject();
        })
        .catch((err) => toast("Something went wrong"));
    }
  };

  return (
    <Container fluid>
      <Row>
        <div>
          <div className="card-header" style={{ textAlign: 'center', backgroundColor: "#b2bbbf" }}>
    
          <Box sx={{ width:'100px' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Pages</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Options"
        >
           <MenuItem>
           <Link to={`/`}>Logout</Link>
           </MenuItem>
           <MenuItem>
           <Link to={`/Dashboard`}>Dashboard</Link>
           </MenuItem>
           <MenuItem>
           <Link to={`/ProductAdd`}>Add product</Link>
           </MenuItem>
           <MenuItem>
           <Link to={`/ProductView`}>View products</Link>
           </MenuItem>
           <MenuItem>
           <Link to={`/orderview`}>View Orders</Link>
           </MenuItem>
        </Select>
      </FormControl>
    </Box>
    
     <h3 className="card-title text-dark" >View Products</h3>
          </div>
          {/* <li >name:{result.products.name}</li>
      <li >description:{result.products.description}</li>
 */}
          <table className="table table-sm table-dark">
            <thead className='thead-dark'>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Type</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                products.map(data => (
                  <tr>
                    {/* <td key={data.productId} >{data.productId}</td> */}
                    <td key={data.productId} >{data.productId}</td>
                    <td key={data.name} >{data.name}</td>
                    <td key={data.description}>{data.description}</td>
                    <td key={data.price}>{data.price}</td>
                    <td key={data.type}>{data.type}</td>
                    <td key={data.image}><img style={{height:'50px', width:'55px'}} src={`http://localhost:3001/${data.image} `} alt="" /></td>
                    <td>
                      <Link to={`/editProduct/${data.productId}`}>
                        <button type="button" title="Edit"
                          className="btn btn-icon btn-sm" style={{ color: "white" }}><i className="fa fa-edit"></i></button>
                      </Link>

                      <button type="button" title="Delete" data-type="confirm"
                        onClick={() => deleteProduct(data.productId)}
                        style={{ color: "white" }} className="btn btn-icon btn-sm js-sweetalert" ><i><DeleteTwoToneIcon /></i></button>
                    </td>
                  </tr>

                )
                )
              }
            </tbody>
          </table>
        </div>
      </Row>
    </Container>
  )
}
export default ProductView;
