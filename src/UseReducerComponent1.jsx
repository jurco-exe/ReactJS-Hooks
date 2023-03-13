import { React, useState, useReducer } from "react";

//? useReducer:
//! manage complex states in our react app
//! works like state management tool

//* state management is used to mange all states of application in a simple way
//* always use the useReducer hook when you have a lot of states and methods to handle

//? simple counter app with increase and decrease buttons

//! define our default state:
const initialState = { count: 0 };

//! reducer func.:
//? reducer( state, action )
//* state == where our app is currently at
//* action == which action we would like to perform (increase, decrease...)
const reducer = (state, action) => {
  //? we can use Switch case or If Else statement:
  switch (action.type) {
    case "INCREASE":
      return { count: state.count + 1 };

    case "DECREASE":
      return { count: state.count - 1 };

    default:
      return state;
  }

  return { count: state.count + 1 };
};

const UseReducerComponent1 = () => {
  // const [count, setCount] = useState(0);
  //? useReducer (reducer func., default state)
  //* reducer func == it will manage all states
  const [state, dispatch] = useReducer(reducer, initialState);

  const increaseCount = () => {
    // dispatch();
    //* to use multiple different actions we need to make it like this in every other func.
    //? now to access it we use our action parameter

    dispatch({ type: "INCREASE" });
  };

  const decreaseCount = () => {
    //? here also:
    dispatch({ type: "DECREASE" });
  };

  return (
    <div>
      <h3>Count: {state.count}</h3>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>{" "}
    </div>
  );
};

export default UseReducerComponent1;
