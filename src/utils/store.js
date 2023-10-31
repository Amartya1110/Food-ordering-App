import { configureStore } from "@reduxjs/toolkit"

// Importing the slices' reducers
import cartSlice from "./features/cart/cartSlice"

const store = configureStore({
    reducer: {
        cart: cartSlice,
    },
})

export default store