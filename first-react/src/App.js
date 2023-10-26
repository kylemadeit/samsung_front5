import Counter from "./Counter";
import Hello from "./Hello";
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
      <Hello color="pink" name="carami"></Hello>
      <Hello name="kang" />
      <ChildrenExam />
      {/* <Counter /> */}
      {/* <UseStateExam1 /> */}
      {/* <UseStateExam2 /> */}
      {/* <UseStateExam3 /> */}
    </div>
  );
}

export default App;
