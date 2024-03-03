import { createStore } from "redux"

const initialState = { counter: 0, showCounter: true }

const counterReducer = (state = initialState, action) => {
  if (action.type === 'increment') {
    return {
      //never mutate the exisitn state in redux
      //example state.counter++
      //always copy and create a new object
      counter: state.counter + 1,
      showCounter: state.showCounter
    }
  };

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter
    }
  };

  if (action.type === 'increase') {
    return {
      counter: state.counter - action.payload,
      showCounter: state.showCounter
    }
  };

  if (action.type === 'toggle') {
    return {
      counter: state.counter,
      showCounter: !state.showCounter
    }
  };

  return state;
}

const store = createStore(counterReducer);

export default store;