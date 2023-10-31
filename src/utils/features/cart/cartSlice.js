import { createSlice } from "@reduxjs/toolkit";

/*

=> Each element of cartItems- array will represent each type of dish that we have added in our cart
=> Structure of each object in cartItems- array:
{
    id: ,
    itemCount: , -> This property will show the count of each dish, in case we have added more than one same dish
    title: ,
    .
    .
    .
    etc.
}


*/


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        count: 0,
        cartItems: [],
    },
    reducers: {
        addItem: (state, action) => {
            // Optional chaining not valid on the left-hand side of an assignment
            // state?.count += 1  => Uncaught SyntaxError: Invalid left-hand side in assignment
            state.count += 1

            // itemID is the unique ID of the dish that user has added to cart
            const itemID = action?.payload?.id
            // Find whether the dish already exists in our cartItems- array
            const itemIndex = state?.cartItems.findIndex((item, index) => {
                return (item.id === itemID) 
                // As soons as this condition will return true, findIndex() - method will return index 
                // of that element in cartItems - array
            })
            // console.log(itemIndex)
            // (itemIndex === 1) => means said dish doesn't exist in cartItems- array, so simply push it.
            if(itemIndex === -1) {
                state.cartItems.push({...action.payload, itemCount: 1})
            }
            // else, said dish already exists in cart, so just increase the count- property of that existing
            // dish in cartItems- array by 1. No need to add a new object for said dish, since it already exists. 
            else {
                state.cartItems[itemIndex].itemCount++
            }
        },
        removeItem: (state, action) => {
            state.count--
            // itemID is the unique ID of the dish that user has removed from the cart
            const itemID = action?.payload?.id 
            // Find whether the dish already exists in our cartItems- array
            const itemIndex = state?.cartItems.findIndex((item, index) => {
                return (item.id === itemID) 
                // As soons as this condition will return true, findIndex() - method will return index 
                // of that element in cartItems - array
            })
            // (itemIndex === 1) => means said dish doesn't exist in cartItems- array, no need to do
            // anything. Simply return from the reducer function
            if(itemIndex === -1) {
                return
            }
            // else, said dish already exists in cart, so just increase the count- property of that existing
            // dish in cartItems- array by 1. No need to add a new object for said dish, since it already exists. 
            else {
                state.cartItems[itemIndex].itemCount -= 1
                // Now if the count of the said dish has become 0, then no need to keep that dish in
                // cartItems- array. Better remove it from the cartItems- array.
                if(state.cartItems[itemIndex].itemCount === 0) {
                    state.cartItems.splice(itemIndex, 1)
                }
            }
        },
        clearCart: (state, action) => {
            state.count = 0
            state.cartItems = []
        },
    }
})

export default cartSlice.reducer

export const {addItem, removeItem, clearCart} = cartSlice.actions