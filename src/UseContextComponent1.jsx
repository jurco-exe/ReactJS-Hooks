import React from "react";
import MainComponent from "./components/MainComponent";
import LoginContextProvider from "./context/LoginContextProvider";

//? useContext | createContext:
//! Create Context requires 3 simple steps:
//* 1. Creating the Context
//* 2. Providing the Context
//* 3. Consuming the Context

// used to manage global data in react
// if you want to pass data just for Child component, then you can use PROPS

//! for better quality of code use better name of folders and add to them right files

//? 2. step:
const UseContextComponent1 = () => {
  return (
    <LoginContextProvider>
      <MainComponent />
    </LoginContextProvider>
  );
};

export default UseContextComponent1;
