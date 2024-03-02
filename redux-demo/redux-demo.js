const redux = require('redux');

//reducer function - takes in old state and dispatched action
//returns new state that is a pure function without side effects
//like make HTTP call, store/fetch data in local storage

//goal is to do same thing inside reducer with different actions

const counterReducer = (state = {
  //fallback defaultValue
  counter: 0
}, action) => {
  if (action.type === 'increment') {
    return {
      //old counter runs when the store is created
      counter: state.counter + 1
    };
  }
  if (action.type === 'decrement') {
    return {
      //old counter runs when the store is created
      counter: state.counter - 1
    }
  }

  //default initilization action
  return state;
}

//initialized store
//pass which reducer will be changing value/manipulating data to the store
const store = redux.createStore(counterReducer)

//suscribed fn
const counterSubscriber = () => {

  // gives latest snapshot after state was updated 
  const latestState = store.getState();
  console.log(latestState);
}

//we point at the subscribe method fn
store.subscribe(counterSubscriber)

//dispatch an action (JS bject with a type property)
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });

