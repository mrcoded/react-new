import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  //use selector allows us to get a slice of the store
  //changes to the store will cause the subscription to be be executed
  const counter = useSelector(state => state.counter);

  //dispatch fn calls actions against redux store
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: "increment" })
  }

  const decrementHandler = () => {
    dispatch({ type: "decrement" })
  }

  const toggleCounterHandler = () => { };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>
        -- COUNTER VALUE --
        {counter}
      </div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
