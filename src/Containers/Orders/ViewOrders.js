import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {Card, Container, Row, Table } from 'react-bootstrap';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ViewOrders = () => {
const [orders, setOrders] = useState([]);

const  getorder = (req,res,next) => {
axios.get('http://localhost:3001/getorder')
.then(response => {
    console.log(response)
    setOrders(response.data);

  })
  .catch(err => {
    console.log(err)
  })

    }
toast.configure();
  //   const id = orders.map(datas => (datas.orderId))
  // const deleteOrder = () => {
  //   axios
  //     .delete(
  //       'http://localhost:3001/deleteOrder/' + id)
  //     .then((res) => {
  //       if (res.status === 200) {
  //         toast("Order successfully deleted");
  //         window.location.reload();
  //       } else Promise.reject();
  //     })
  //     .catch((err) => toast("Something went wrong"));
  // };
  const deleteOrder = (orderId) => {
    if (window.confirm('Are you sure?')) {
      axios
        .delete(
          'http://localhost:3001/deleteOrder/' + orderId)
        .then((res) => {
          if (res.status === 200) {
            toast("Order successfully deleted");
            window.location.reload();
          } else Promise.reject();
        })
        .catch((err) => toast("Something went wrong"));

    }
  };


    useEffect(() => {
        getorder();
      }, [])

  return (
    <Container fluid style={{
      background: `rgb(49,49,73)`,
      background: `linear-gradient(90deg, rgba(49,49,73,1) 0%, rgba(65,74,87,1) 100%)`
    }}>
      <Row>
        <div>
          <div className="card-header" style={{
            textAlign: 'center',
            background: `rgb(49,49,73)`,
            background: `linear-gradient(90deg, rgba(49,49,73,1) 0%, rgba(43,95,163,1) 52%)`
            , marginBottom: '10px'
          }}>
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
    
            <h2 className="card-title text-dark" >View Orders</h2>
          </div>

          {/* <li >name:{result.products.name}</li>
    <li >description:{result.products.description}</li>
*/}
          {/*mileko***************
         <table className="table table-sm table-dark">
          <thead className='thead-dark'>
            <tr>
              <th>orderId</th>
              <th>productId</th>
              <th>name</th>
              <th>address</th>
              <th>phone</th>
              <th>price</th>
              <th>quantity</th>
              <th>Item price</th>
              <th>email</th>
              <th>Order date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              orders.map(data => (
                <tr>
                  <td key={data.orderId} >{data.orderId}</td>
                  <td key={data.productId} >{data.productId}</td>
                  <td key={data.name}>{data.name}</td>
                  <td key={data.address}>{data.address}</td>
                  <td key={data.phone}>{data.phone}</td>
                  <td key={data.price}>{data.price}</td>
                  <td key={data.quantity}>{data.quantity}</td>
                  <td key={data.singlePrice}>{data.singlePrice}</td>
                  <td key={data.email}>{data.email}</td>
                  <td key={data.date}>{data.date}</td>
                  <td>
                    <button type="button" title="Delete" data-type="confirm"
                      onClick={() => { deleteOrder() }}
                      style={{ color: "white" }} className="btn btn-icon btn-sm js-sweetalert" ><i><DeleteTwoToneIcon /></i></button>
                  </td>
                </tr>

              )
              )
            }
          </tbody>
        </table> 
        */}




          <Table size="lg" striped bordered hover>
            <tbody>
              {
                orders.map(data => (
                  <Card style={{
                    width: '100%', height: '200px', marginBottom: '10px', background: `rgb(177,176,242)`,
                    background: `linear-gradient(90deg, rgba(177,176,242,0.9668242296918768) 28%, rgba(148,187,233,0.9136029411764706) 73%)`
                  }}>
                    <Table size='lg' striped bordered hover>
                      <thead className='thead-dark'>
                        <tr>
                          <th>orderId</th>
                          <th>productId</th>
                          <th>name</th>
                          <th>quantity</th>
                          <th>Item price</th>
                          <th>address</th>
                          <th>phone</th>
                          <th>price</th>
                          <th>email</th>
                          <th>Order date</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tr>
                        <td key={data.orderId} >{data.orderId}</td>
                        <td key={data.productId} >{data.productId}</td>
                        <td key={data.name}>{data.name}</td>
                        <td key={data.quantity}>{data.quantity}</td>
                        <td key={data.singlePrice}>{data.singlePrice}</td>
                        <td key={data.address}>{data.address}</td>
                        <td key={data.phone}>{data.phone}</td>
                        <td key={data.price}>{data.price}</td>
                        <td key={data.email}>{data.email}</td>
                        <td key={data.date}>{data.date}</td>
                        <td>
                          <button type="button" title="Delete" data-type="confirm"
                            onClick={() => deleteOrder(data.orderId)}
                            style={{ color: "black" }} className="btn btn-icon btn-sm js-sweetalert" ><i><DeleteTwoToneIcon /></i></button>
                        </td>
                      </tr>
                    </Table>
                  </Card>
                )
                )
              }

            </tbody>
          </Table>



        </div>
      </Row>
    </Container>
  )
}

export default ViewOrders