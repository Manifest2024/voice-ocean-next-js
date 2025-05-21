import { Actor } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
interface CartState {
  cartCount: number;
  bookedArtists: Actor[];
}

const initialState: CartState = {
  cartCount: 0,
  bookedArtists: [],
};

export const CartSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addCart: (state) => {
      state.cartCount += 1;
    },
    addArtist: (
      state,
      action: { type: string; payload: { bookedArtists: Actor } }
    ) => {
      const isuserPresent = state.bookedArtists.filter(
        (user) => user.id === action.payload.bookedArtists.id
      );

      if (isuserPresent.length) {
        return {
          ...state,
        };
      }
      return {
        ...state,
        bookedArtists: [...state.bookedArtists, action.payload.bookedArtists],
      };
    },
    removeArtist: (
      state,
      action: { type: string; payload: { removedArtist: Actor } }
    ) => {
      const filteredActors = state.bookedArtists.filter(
        (user) => user.id !== action.payload.removedArtist.id
      );
      return {
        ...state,
        bookedArtists: [...filteredActors],
      };
    },
    removeCart: (state) => {
      state.cartCount -= 1;
    },
    clearCart: (state) => {
      state.cartCount = 0;
      state.bookedArtists = [];
    },
  },
});

export default CartSlice.reducer;
export const { addCart, removeCart, addArtist, removeArtist, clearCart } =
  CartSlice.actions;
