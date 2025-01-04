import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	items: [],
  openBasket: false,
  test: 0
}

 

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
		// Eğer ürün sepete eklenmiş ise ekleme adedini güncelle
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      if (existingItem) {
		existingItem.count += action.payload.count
        console.log(existingItem.count);
      } else {
		// Eklenmemiş ise ürünü sepete ekle
        state.items.push(action.payload);
      }
    },
    togleFunction: (state) => {
      state.openBasket = !state.openBasket
    }
  }
});
export const { addToBasket, togleFunction } = basketSlice.actions;
export default basketSlice.reducer