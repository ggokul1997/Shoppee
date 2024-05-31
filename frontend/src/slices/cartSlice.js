import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")):{cartItems: []};

const addDecimals = (num)=>{
    return (Math.round(num*100)/100).toFixed(2)
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart: (state,action) => {
            const item = action.payload;

            const existItem = state.cartItems.find((x)=>x._id === item._id)

            if(existItem){
                state.cartItems = state.cartItems.map((x)=>x._id===existItem._id? item:x)
            }else{
                state.cartItems=[...state.cartItems,item]
            }

            // Calculate Item price
            state.itemPrice =addDecimals(state.cartItems.reduce((a,b)=>a+b.price*item.qty,0)
        ) 
            // Calculate Shipping price
            state.shippingPrice = addDecimals(state.itemPrice>100?0:10)

            // Calculate Tax price
            state.taxPrice = addDecimals(Number((1.5*state.itemPrice).toFixed(2)))

            // Calculate Total price
            state.totalPrice = (
                Number(state.itemPrice)+
                Number(state.shippingPrice)+
                Number(state.taxPrice)
            ).toFixed(2)

            localStorage.setItem('cart',JSON.stringify(state))

        }
    }
})
export const {addToCart} = cartSlice.actions
export default cartSlice.reducer