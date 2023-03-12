import React, { useState } from "react";

//? useState:
//* ==> function to ADD STATE in functional component

const UseStateComponent = () => {
  //   const array = useState(0);
  //   const counter = array[0];
  //   const setCounter = array[1];

  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h3>Counter: {counter}</h3>
      <button onClick={increaseCounter}>Increase</button>
    </div>
  );
};

export default UseStateComponent;
