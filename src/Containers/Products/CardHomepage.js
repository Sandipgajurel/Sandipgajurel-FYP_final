import React, { useEffect, useState } from 'react';
import { Card, Row } from 'react-bootstrap';
import { Button, CardActionArea, CardActions } from '@mui/material';


const CardHomepage = ({ items, handleClick }) => {

//add value of quantity = 1 remain 
    let { name, description, quantity, price, type, image, productId } = items;
    //console.log(quantity);
    return (
        <div>
            <div>
                <>
                    <div style={{ display: 'flex', flexDirection: 'row' }} >
                        <div style={{ paddingLeft: '5px', paddingRight: '5px' }}>
                            <div>
                               
                                <div className='item-container' >
                                    {/* {products.map((product) => ( */}

                                    <Card className='shadow-md m2 p3 rounded'style={{background: `rgb(64,64,113)`,
background: `radial-gradient(circle, rgba(64,64,113,1) 0%, rgba(20,20,20,1) 100%)`}}>
                                        <CardActionArea>
                                            {/* <img src={'http://localhost:3001/images/image-1648718787557.jpg'} alt='' /> */}
                                            <img src={`http://localhost:3001/${image} `} alt='' />
                                            <h3 style={{color:'silver', fontStyle:'italic'}}>{name}</h3>
                                            <h4 style={{color:'silver'}} >Price : {price}</h4>
                                            <p style={{color:'silver'}}>Description : {description}</p>
                                            <p style={{color:'silver'}}>Type : {type}</p>
                                        </CardActionArea>
                                        <CardActions>
                                            <Button size="small" onClick={() => handleClick(items)} color="primary">
                                                Add To Cart
                                            </Button>

                                        </CardActions>
                                    </Card>

                                    {/* ))} */}
                                </div>
                            </div>

                        </div>
                    </div>
                </>
            </div>
        </div>
    )
}

export default CardHomepage