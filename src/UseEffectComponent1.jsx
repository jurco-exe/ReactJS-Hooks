import React, { useEffect } from "react";
import { useState } from "react";

//? useEffect:
//! runs on every render, controlled by dependencies
//* ==> used to perform side effects in ou component
//* ==> SIDEEFFECTS = actions which are performed with the "outside world"
//* ==> :: we perform a side effect when we need to reach outside of our React components to do something

//! fetching data from API
//! updating the DOM document & window
//! timer functions

//? VARIATION OF USEEFFECT:
//* 1. useEffect without dependecies:
//* 2. useEffect with empty array
//* 3. useEffect with variables

const UseEffectComponent1 = () => {
  const [counter, setCounter] = useState(0);
  const [otherCounter, setOtherCounter] = useState(5);
  const [time, setTime] = useState(0);

  //? useEffect( callback, dependecies )
  //* callback ==> function in which we write our sideEffect logic, this function is executed everytime something change to our component
  //* depemdecies ==> array of variables, it is optional
  //! callback ==> WHAT TO RUN | dependencies ==> WHEN TO RUN

  //* 1. VARIATION:
  // useEffect(() => {
  //   document.title = `${counter} <== update`;
  // });

  //* 2. VARIATION:
  // useEffect(() => {
  //   document.title = `${counter} <== update`;
  // }, []); //? this will be set on [0]
  //! this type of useEffect runs 1 time and then never again

  //* 3. VARIATION:
  // useEffect(() => {
  //   document.title = `${counter} <== update`;
  // }, []);

  // useEffect(() => {
  //   document.title = `${otherCounter} <== update`;
  // }, [otherCounter]); //! it will change only by this variable not that above

  //* Cleanup Function:
  //? to use cleanup function we need to use return in our useEffect
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     //* this interval wont stop until we add a cleanup fucntion
  //     setTime(time + 1);
  //   }, 1000);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // });

  //? function in button is function [increaseCounter] from component UseStateComponent1.jsx but we simplified it

  return (
    <div>
      <h3>Counter: {counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <h3>Other Counter: {otherCounter}</h3>
      <button onClick={() => setOtherCounter(otherCounter + 5)}>
        Increase by 5
      </button>
      <h3>Timer: {time} in seconds</h3>
    </div>
  );
};

export default UseEffectComponent1;
