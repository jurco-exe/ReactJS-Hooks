import React, { useState } from "react";

const UseStateComponent2 = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <h3>Value from Input: [ {name} ]</h3>
      <input type="text" onChange={(e) => setName(e.target.value)} />
    </div>
  );
};

export default UseStateComponent2;
