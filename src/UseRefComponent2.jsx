import { React, useRef } from "react";

const UseRefComponent2 = () => {
  const inputEle = useRef();
  const handleClick = () => {
    console.log(inputEle.current);

    inputEle.current.style.width = "300px";
    inputEle.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputEle} />
      <button type="submit" onClick={handleClick}>
        Click here
      </button>
    </div>
  );
};

export default UseRefComponent2;
