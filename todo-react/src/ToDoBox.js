import ToDoList from "./ToDoList";
import ToDoInput from "./TodoInput";
import { useState } from "react";

const ToDoBox = () => {
  const [toDoList, setToDoList] = useState([
    { id: 1, title: "Learn React" },
    { id: 2, title: "Learn GraphQL" },
    { id: 3, title: "Learn Apollo" },
  ]);
  return (
    <div>
      <ToDoInput />
      <ToDoList toDoList={toDoList} />
    </div>
  );
};

export default ToDoBox;
