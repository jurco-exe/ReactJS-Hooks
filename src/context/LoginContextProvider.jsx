import { React, createContext, useState } from "react";

//? 1. step:
export const LoginContext = createContext(); // every time we need to fetch the link "MainComponent" into this created Context

const LoginContextProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState("IM HERE");

  return (
    <LoginContext.Provider value={userDetails}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
