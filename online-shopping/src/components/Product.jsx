import React from 'react'

const Product = ({product}) => {
    const {id, price, description, image} = product;  
  return (
    <div>
        <img src={image} alt="" />
        <p> Price: ${price}</p>
        <p> Price: ${  description}</p>
    </div>
  )
}

export default Product