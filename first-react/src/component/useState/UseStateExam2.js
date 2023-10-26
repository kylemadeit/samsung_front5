import { useState } from "react";

function UseStateExam2() {
  const [names, setNames] = useState(["kang", "carami", "kim"]);
  const [input, setInput] = useState("");

  const inputChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const updateHandler = () => {
    setNames((prevState) => {
      console.log(prevState);
      return [input, ...names];
    });
  };

  return (
    <div>
      <input type="text" value={input} onChange={inputChangeHandler} />
      <button onClick={updateHandler}>입력</button>

      {names.map((name, index) => (
        <p key={index}>{name}</p>
      ))}
    </div>
  );
}

export default UseStateExam2;
