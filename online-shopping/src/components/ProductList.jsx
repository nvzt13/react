import { React, useEffect } from 'react'
import {useSelector, useDispatch} from "react-redux";
import {getAllProducts} from "../redux/productSlice";
import Product        from './Product'; 
const ProductList = () => {
	const dispatch = useDispatch();
	const {products} = useSelector((store) => store.product)
	
	useEffect(() => {
	  dispatch(getAllProducts())
	}, [ ])
	
  return (
    <div>
		{
			products.map((product) => (
				<Product key={product.id} product={product} />
				))
		}
    </div>
  )
}

export default ProductList