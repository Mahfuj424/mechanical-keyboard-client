import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartItem = {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  brand: string;
};

type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item._id === product._id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (item) => item._id !== action.payload
      );
    },
    increaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item._id === action.payload);
      if (item) item.quantity += 1;
    },
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item._id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
