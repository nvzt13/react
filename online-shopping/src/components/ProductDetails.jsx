import {React, useEffect} from 'react'
import {useParams} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import {setSelectedProduct} from '../redux/productSlice'

const ProductDetails = () => {
	const {id} = useParams()
  const { products, selectedProduct } = useSelector((store) => store.product)
  const dispatch = useDispatch();
  const { title, description, image, price } = selectedProduct;
  useEffect(() =>{
    getProductById();
  }, [ ])

  const getProductById = () => {
    products && products.map((product) =>{
      if(product.id == id){
        dispatch(setSelectedProduct(product))
        console.log(product)
        }
    })
  }
  return (
    <div>
      {title}
      {description}
      {price}
      <img src={image} alt="product" />
      {title}
     </div>
  )
}

export default ProductDetails



