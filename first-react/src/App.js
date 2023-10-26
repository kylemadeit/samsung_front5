import Counter from "./Counter";
import Hello from "./Hello";
import MyInputBox from "./MyInputBox";
import TitlePriceInputBox from "./TitlePriceInputBox";
import ChildrenExam from "./component/propsChildren/ChildrenExam";
import UseStateExam1 from "./component/useState/UseStateExam1";
import UseStateExam2 from "./component/useState/UseStateExam2";
import UseStateExam3 from "./component/useState/UseStateExam3";

function App() {
  console.log("App run!! 👌");
  // let name = "carami";

  return (
    <div className="card">
      hello react!!
      {/* <Hello color="pink" name="carami" isSpecial={true}></Hello>
      <Hello name="kang" />
      <ChildrenExam /> */}
      {/* <Counter /> */}
      {/* <UseStateExam1 /> */}
      {/* <UseStateExam2 /> */}
      {/* <UseStateExam3 /> */}
      {/* <MyInputBox /> */}
      <TitlePriceInputBox />
    </div>
  );
}

export default App;
