import React, { useContext } from "react";
import { LoginContext } from "../context/LoginContextProvider";

const SinglePost = () => {
  //? 3. step
  //? and here we are using our created Context
  const login = useContext(LoginContext);
  console.log(login);

  return (
    <div>
      <h3>
        Our useContext = [ <span> {login} </span> ]
      </h3>
    </div>
  );
};

export default SinglePost;
