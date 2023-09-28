import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({

    name : 'cart' ,
    initialState : {
        items:[],
        itemPrice:[]
    },
    reducers : {
        addItem : (state,action) => {
            state.items.push(action.payload.foodItem) ;
            state.itemPrice.push(action.payload.itemCost) ;
            // console.log(action);
            // console.log(state);
            console.log(state.items,state.itemPrice) ;
        },
        resetCart : (state,action) => {
            state.items = []
        },
        deleteItems : (state,action) => {
            let indexValue = state.items.indexOf(action.payload);
            console.log(indexValue)
            if(indexValue == -1 ){
                alert("Didn't find in Your Cart..!")
            }else{
                state.items.splice(indexValue,1) ;
                state.itemPrice.splice(indexValue,1) ;
            }
           
        }
    }
})

export const {addItem,resetCart,deleteItems} = CartSlice.actions ;
export default CartSlice.reducer ;