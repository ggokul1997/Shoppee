export const addDecimals = (num) =>{
    return (Math.round(num*100)/100).toFixed(2);
}

export const updateCart = (state) => {
     // Calculate Item price
     state.itemPrice =addDecimals(state.cartItems.reduce((a,b)=>a+b.price*b.qty,0)
    ) 
        // Calculate Shipping price
        state.shippingPrice = addDecimals(state.itemPrice>100?0:10)

        // Calculate Tax price
        state.taxPrice = addDecimals(Number((0.15*state.itemPrice).toFixed(2)))

        // Calculate Total price
        state.totalPrice = (
            Number(state.itemPrice)+
            Number(state.shippingPrice)+
            Number(state.taxPrice)
        ).toFixed(2)

        localStorage.setItem('cart',JSON.stringify(state))

        return state;
}