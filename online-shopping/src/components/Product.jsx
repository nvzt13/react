import React from 'react'
import '../css/product.css'
import {useNavigate} from 'react-router-dom'


const Product = ({product}) => {
    const {id, price, title, image} = product; 
    const navigate = useNavigate();
  return (
    <div className="card flex-column">
        <img className="product-image" src={image} alt="" />
        <h4> {title}</h4>
        <p> Price:{price}</p>
        <button onClick={ ()=>navigate('/product-details/' + id)}>Detaya Git</button>
    </div>
  )
}

export default Product