import { React, useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux";
import Product        from './Product'; 
import '../css/productlist.css'
import {getAllProducts} from '../redux/productSlice'



const ProductList = () => {
	const dispatch = useDispatch();
	const {products} = useSelector((state) => state.product)
	useEffect(() =>{
		dispatch(getAllProducts());
	},[])

	console.log("Bu component çalıste ")
  return (
    <div className="product-list">
		{
			products && products.map((product) => (
				<Product key={product.id} product={product} />
				))
		}
    </div>
  )
}

export default ProductList