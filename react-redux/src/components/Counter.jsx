import { useSelector, useDispatch, connect } from 'react-redux';
import classes from './Counter.module.css';
// import { Component } from 'react';
import { counterActions } from '../store';

const Counter = () => {
  //use selector allows us to get a slice of the store
  //changes to the store will cause the subscription to be be executed
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);

  //dispatch fn calls actions against redux store
  const dispatch = useDispatch();

  const incrementHandler = () => {
    // dispatch({ type: "increment" })
    dispatch(counterActions.increment())
  };

  const increaseHandler = () => {
    // dispatch({ type: "increase", payload: 5 })
    dispatch(counterActions.increase(5))
  };

  const decrementHandler = () => {
    // dispatch({ type: "decrement" })
    dispatch(counterActions.decrement())
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && (
        <div className={classes.value}>
          -- COUNTER VALUE --
          {counter}
        </div>
      )
      }
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>Increase</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment()
//   }

//   decrementHandler() {
//     this.props.decrement()
//   }

//   toggleCounterHandler() { }

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>
//           -- COUNTER VALUE --
//           {this.props.counter}
//         </div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>
//             Increment
//           </button>
//           <button onClick={this.decrementHandler.bind(this)}>
//             Decrement
//           </button>
//         </div>
//         <button onClick={this.props.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
