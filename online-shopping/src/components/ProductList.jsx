import { React, useEffect } from 'react'
import {useSelector, useDispatch} from "react-redux";
import {getAllProducts} from "../redux/productSlice";

const ProductList = () => {
	const dispatch = useDispatch();
	const {products} = useSelector((store) => store.product)
	
	useEffect(() => {
	  dispatch(getAllProducts())
	}, [ ])
	
  return (
    <div>
		Product Reducer
    </div>
  )
}

export default ProductList