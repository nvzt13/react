import {React, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import {setSelectedProduct} from '../redux/productSlice';
import {addToBasket} from '../redux/basketSlice';
import '../css/product-details.css'
import { FaPlusCircle, FaMinusCircle} from "react-icons/fa";


const ProductDetails = () => {

	// Tiklanilan urunun id'sini al
  const {id} = useParams()

  // api'dan cekilen urunleri ve o anki secilen urunu stordan al

  const { products, selectedProduct } = useSelector((store) => store.product);
  const { items } = useSelector((store) => store.basket.items);

  // secilen urune object destructin yap
  const { title, description, image, price } = selectedProduct;

  // sepete eklenen urun sayisi icin state
  const [count, setCount] = useState(1);

  const dispatch = useDispatch();
  const increment = () => {
	setCount( count + 1 )
  }
  const decrement = () => {
	setCount( count - 1 )
  }
  // useEffect Hook
  useEffect(() =>{
    getProductById();
  }, [ ])
  // ProductDetails sayfasi acilirken secilen urunu stora eklelemek icin action olustur
  const getProductById = () => {
    products && products.map((product) =>{
      if(product.id == id){
        dispatch(setSelectedProduct(product))
        }
    })
  }
  
  // sepete eklele
  const addBasket = () => {
      const payload = {
        id,
        price,
        title,
        image,
        count
      }
	dispatch(addToBasket(payload))
  }
  console.log("Product Details Componenti çalıştı!!")
  return (
    <div className="container">
			<div className="img-wrapper">
		      <img src={image} alt="product" />
			</div>
			<div className="product-body">
		     <h1>{title}</h1> 
		      <h3>{description}</h3>
		      <h1>{price * count} Tl</h1>
		      <div className="icons">
					<FaPlusCircle onClick={increment} className="icon"/>
					<span className="icon">{count}</span>
					<FaMinusCircle onClick={decrement} className="icon"/>
		      </div>
					<button onClick={addBasket}>Sepete Ekle</button>
			</div>
     </div>
  )
}

export default ProductDetails



