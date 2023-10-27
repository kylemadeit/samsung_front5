import { useState } from "react";

const ToDoInput = () => {
  //   const [toDo, setTodo] = useState("");
  const inputHandler = (e) => {
    console.log(e.key);
  };
  return (
    <input
      type="text"
      placeholder="할일을 입력하세요."
      onKeyDown={inputHandler}
    />
  );
};

export default ToDoInput;
