import { useState } from "react";

const Counter = () => {
  console.log("Counter run 👌👌👌");
  //   let count = 5;
  const [count, setCount] = useState(0);
  const plusHandler = () => {
    console.log(count);
    // count++;
    setCount(count + 1);
  };

  const minusHandler = () => {
    console.log(count);
    // count--;
    setCount(count - 1);
  };

  return (
    <div>
      <h2>{count}</h2>
      <input type="button" value="+" onClick={plusHandler} />
      <input type="button" value="-" onClick={minusHandler} />
    </div>
  );
};

export default Counter;
