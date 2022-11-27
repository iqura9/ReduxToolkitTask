import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalQuantity: 0,
}

const cartSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            const {id, title, price} = action.payload;
            if (findId(state.items,id)) {
                updatePrice(state,id,1);
                return;
            }
            const obj = {id: id, title: title, quantity: 1, totalPrice: price, price: price}
            state.items.push(obj);
            state.totalQuantity += obj.quantity;
        },
        removeItemFromCart: (state, action) => {
            const id = action.payload;
            updatePrice(state,id,-1);
        }
    }
});

export function findId(arr,id) {
    return arr.some(e => e.id === id)
}
function updatePrice(state,id,val) {
    state.items.forEach(el => {
        if (el.id === id) {
            if(el.quantity === 1 && val === -1){
                deleteElement(state,id);
                state.totalQuantity += val;
                return;
            }
            el.quantity += val;
            el.totalPrice = el.quantity * el.price;
            state.totalQuantity += val;
        }
    })
}
function deleteElement(state,id){
    state.items = state.items.filter(el => el.id !== id);
}
// these exports should stay the way they are
export const cartActions = cartSlice.actions;

export default cartSlice;
