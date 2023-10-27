import { useRef, useState } from "react";
import MyButton from "./MyButton";

const MyInputBox = () => {
  console.log("MyInputBox run!!  👌👌");
  const [text, setText] = useState("기본값");

  const inputRef = useRef();

  const changeHandler = (e) => {
    console.log(inputRef.current.value);
    setText(inputRef.current.value);
  };

  const resetHandler = () => {
    inputRef.current.focus();
    setText("");
  };

  return (
    <div>
      <label>{text}</label>
      <br />
      <input type="text" value={text} onChange={changeHandler} ref={inputRef} />
      <MyButton clickHandler={resetHandler} title="RESET" />
    </div>
  );
};

export default MyInputBox;
