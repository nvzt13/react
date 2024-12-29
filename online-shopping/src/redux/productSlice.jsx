import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
	pruducts: [],
	selectedProduct: {},
	loading: false
}

const BASE_URL = "https://fakestoreapi.com";

const getAllProducts = createAsyncThunk("getAllProducts", async () => {
	const response = await axios.get(`${BASE_URL}/products`);
	console.log(response)
	return response.data;
	})

export const productSlice = createSlice({
	name: "product",
	initialState,
	reducers:{
		
	},
	extraReducers: (builder) => {
		builder.addCase(getAllProducts.pending, (state) => {
			state.loading = true;
		})
		builder.addCase(getAllProducts.fulfilled, (state) => {
			state.loading = false;
			state.products = action.payload;
		})
	}
})

export const { } = productSlice.actions
export default productSlice.reducer