import { useState } from "react";
const work = () => {
  //서버를 통해서 값을 얻어어는 코드라던지...
  //복잡한 일을 통해서 값을 가져온다면??

  console.log("work()함수 실행!!");
  return ["kang", "carami", "kim"];
};

const UseStateExam3 = () => {
  const [names, setNames] = useState(() => {
    //다른 작업들이 진행되어야 한다면...
    //함수를 인자로 사용할 수 있다.

    return work();
  });
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
};

export default UseStateExam3;
