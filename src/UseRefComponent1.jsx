import { React, useState, useEffect, useRef } from "react";

//? useRef:
//* allows us to access DOMs elements
//* for creating mutable variables which wil not re-render the component

//! mutable variable ==>

//? for example we want to count how many times is wensite rendered when we input the name

const UseRefComponent1 = () => {
  const [name, setName] = useState("");
  //? here is why cannot do it with useState hook

  // const [count, setCount] = useState(0);
  //?  count is constantly updating bcs when this component is rendered(useEffect) it will update this count variable by one, and bcs that state variable is updated, the component is rendered again and again

  //! so we re stuck in infinite loop bcs we used useState

  // useEffect(() => {
  //   setCount((prev) => prev + 1);
  // });

  //*=================USE REF SOLUTION=================
  const count = useRef(0);

  //in console we see this:
  //! {current: 0}
  // so this we need to use in our output
  console.log(count);

  //? now lets go update this value when component rendere with useEffect

  useEffect(() => {
    count.current += 1;
  });

  return (
    <div>
      <h3>Value from Input: [ {name} ]</h3>
      <h3>Renders: {count.current}</h3>
      <input type="text" onChange={(e) => setName(e.target.value)} />
    </div>
  );
};

export default UseRefComponent1;
