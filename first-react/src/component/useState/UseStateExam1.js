import { useState } from "react";

const UseStateExam1 = () => {
  const [time, setTime] = useState(1);

  const updateTime = () => {
    let newTime;
    if (time >= 12) {
      newTime = 1;
    } else {
      newTime = time + 1;
    }
    setTime(newTime);
  };
  return (
    <div>
      <span> 시간 : {time}시</span>
      <button onClick={updateTime}>update time</button>
    </div>
  );
};

export default UseStateExam1;
