import { useState } from "react";
import MyButton from "./MyButton";

const MyInputBox = () => {
  console.log("MyInputBox run!!  👌👌");
  const [text, setText] = useState("기본값");

  const changeHandler = (e) => {
    setText(e.target.value);
  };

  const resetHandler = () => {
    setText("");
  };

  return (
    <div>
      <label>{text}</label>
      <br />
      <input type="text" value={text} onChange={changeHandler} />
      <MyButton clickHandler={resetHandler} title="RESET" />
    </div>
  );
};

export default MyInputBox;
