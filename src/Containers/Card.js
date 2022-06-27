import React from 'react'
import Card from '@mui/material/Card';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Cardimage = () => {
  const [products, setProducts] = useState([]);
  const [productWithId, setProductWithId] = useState([]);
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [type, setType] = useState("")
  const [image, setImage] = useState("")


  const { productId } = useParams();
  const productDetail = (req, res, next) => {
    //const id = req.params.productId;
    //const id = products.map(datas => (datas.productId))
    axios
      .get(`http://localhost:3001/getproductwithid/${productId}`)
      .then(response => {
        setProductWithId(response.data);
        console.log(response.data)
        setName(response.data.name)
        setDescription(response.data.description)
        setPrice(response.data.price)
        setType(response.data.type)
        setImage(response.data.image)
      })
  }

  const getproduct = () => {
    axios
      .get('http://localhost:3001/getproduct')

      .then(response => {
        //console.log(response)
        setProducts(response.data)

      })
      .catch(err => {
        console.log(err)
      })

  }


  useEffect(() => {
    getproduct();
  }, [])

  return (
    <>


      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ paddingLeft: '15px', paddingRight: '15px' }}>
          <div>
            <h1 style={{fontStyle:'italic', color:'white'}}>Featured Products</h1>
            <div className='item-container' >
              {products.map((product) => (
                <Card key={product.productId} className='shadow-md m2 p3 rounded' style={{width:'270px', background: `rgb(64,64,113)`,
background: `radial-gradient(circle, rgba(64,64,113,1) 0%, rgba(20,20,20,1) 100%)`}}>
                  <CardActionArea style={{alignItems:'center'}}>
                    {/* <img src={'http://localhost:3001/images/image-1648718787557.jpg'} alt='' /> */}
                    <img style={{width:'270px'}} src={`http://localhost:3001/${product.image} `} alt='' />
                   <div style={{textAlign:'center'}}>
                    <h3 style={{backgroundColor:'black',fontStyle:'italic', color:'whitesmoke' }}>{product.name}</h3>
                    <h4 style={{color:'white'}}>Price : {product.price}</h4>
                    <p style={{color:'white'}}>description: {product.description}</p>
                    <p style={{color:'white'}}>Type : {product.type}</p>
                    </div>
                  </CardActionArea>
                  {/* <CardActions>
                    <Button size="small" color="primary">
                      Add To Cart
                    </Button>

                  </CardActions> */}
                </Card>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
export default Cardimage