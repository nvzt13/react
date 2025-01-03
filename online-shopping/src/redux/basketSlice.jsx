import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	items: 0,
}

const basketSlice = createSlice({
	name: "basket",
	initialState,
	reducer: {
		addToBasket: (state) => {
			state.items += 1
		}
	}
});

export const { addToBasket } = basketSlice.actions;
export default basketSlice.reducer