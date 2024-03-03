import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true }

//React redux**************************
// const counterReducer = (state = initialState, action) => {
//   if (action.type === 'increment') {
//     return {
//never mutate the exisitn state in redux
//example state.counter++
//always copy and create a new object
//     counter: state.counter + 1,
//     showCounter: state.showCounter
//   }
// };

// if (action.type === 'decrement') {
//   return {
//     counter: state.counter - 1,
//     showCounter: state.showCounter
//   }
// };

// if (action.type === 'increase') {
//   return {
//     counter: state.counter - action.payload,
//     showCounter: state.showCounter
//   }
// };

// if (action.type === 'toggle') {
//   return {
//     counter: state.counter,
//     showCounter: !state.showCounter
//   }
// };

//   return state;
// }

// const store = createStore(counterReducer);

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload
    },
    toggle(state) {
      state.showCounter = !state.showCounter
    }
  }
});


//configStore makes combining multiple reducers ino one easier
const store = configureStore({
  reducer: counterSlice.reducer,
});

//Action creator
export const counterActions = counterSlice.actions

export default store;