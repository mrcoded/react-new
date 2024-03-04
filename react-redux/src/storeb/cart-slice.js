import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id)
      if (!existingItem) {
        state.items.push({
          itemId: newItem.id,
          name: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price
        })
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price
      }
    }
  }
})

export const uiActions = cartSlice.actions

export default cacarSlice;