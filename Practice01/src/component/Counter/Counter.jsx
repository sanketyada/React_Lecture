import React, { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);

  let handleIncrease = () => {
    if (count < 20) {
      //  setCount(count+1)
      //  setCount(count+1)
      //  setCount(count+1)
      //  setCount(count+1)
      //  setCount(count+1)
      setCount((prevVal) => prevVal + 1);
      setCount((prevVal) => prevVal + 1);
      setCount((prevVal) => prevVal + 1);
      setCount((prevVal) => prevVal + 1);
      setCount((prevVal) => prevVal + 1);
    }
  };

  let handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <h1 className="font-bold">Counter {count}</h1>
      <p className="m-4">0-20 only</p>
      <button onClick={handleIncrease}>ADD</button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={handleDecrease}>REMOVE</button>
    </div>
  );
}

export default Counter;
