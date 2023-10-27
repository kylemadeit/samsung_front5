import { useRef, useState } from "react";

const UseRefExam = () => {
  console.log("UseRefExam run 👌👌");
  let countLet = 0;
  const [countState, setCountState] = useState(0);
  const countRef = useRef(0);

  const increaseLet = () => {
    console.log(countLet);
    countLet++;
  };
  const increaseState = () => {
    console.log(countState);
    setCountState(countState + 1);
  };

  const increaseRef = () => {
    console.log(countRef);
    console.log(countRef.current);
    countRef.current = countRef.current + 1;
  };

  return (
    <div>
      <p>let : {countLet}</p>
      <p>useState : {countState}</p>
      <p>useRef : {countRef.current}</p>

      <button onClick={increaseLet}>Let UP!!</button>
      <button onClick={increaseState}>state UP!!</button>
      <button onClick={increaseRef}>ref UP!!</button>
    </div>
  );
};

export default UseRefExam;
