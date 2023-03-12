import React, { useState } from "react";

const UseStateComponent3 = () => {
  const [details, setDetails] = useState({ counter: 0, name: "******" });

  function increaseCounter() {
    // setDetails({ counter: details.counter + 1 });
    //! this we need to use whenever we use an object as state variable

    setDetails((prev) => ({
      ...prev,
      counter: prev.counter + 1
    }));
  }

  return (
    <div>
      <h3>Object as a state variable</h3>
      <li>We used past 2 examples together with object state variable</li>
      <br />
      <h3>
        {details.name} has clicked {details.counter} times !!
      </h3>
      <input type="text" onChange={(e) => setDetails(e.target.value)} />
      <button onClick={increaseCounter}>Increase</button>
    </div>
  );
};

export default UseStateComponent3;
