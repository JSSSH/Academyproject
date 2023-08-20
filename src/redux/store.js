import { configureStore, createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name : 'cart',
  initialState : [],
  reducers : {
    addCart(state, action) {
      let index = state.findIndex((data) => {
        return data.id === Number(action.payload.id);
      })

      if(index === -1)
        state.push(action.payload);
      else
        state[index].count++;
    },

    removeCart(state, action) {
      let index = state.findIndex((data) => {
        return data.id === action.payload; 
      })

      state.splice(index, 1);
    },

    addCount(state, action) {
      let index = state.findIndex((data) =>{
        return data.id === Number(action.payload);
      })

      state[index].count++;
    },

    subCount(state, action) {
      let index = state.findIndex((data) =>{
        return data.id === Number(action.payload);
      })
      if(state[index].count > 1)
        state[index].count--;
      else
        alert('이미 최소 수량입니다');
    }
  }
})

export const { addCart, removeCart, addCount, subCount } = cart.actions;

export default configureStore({
  reducer : {
    cart : cart.reducer
  }
})