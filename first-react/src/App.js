import Counter from "./Counter";
import UseStateExam1 from "./component/useState/UseStateExam1";
import UseStateExam2 from "./component/useState/UseStateExam2";

function App() {
  console.log("App run!! 👌");
  // let name = "carami";

  return (
    <div className="card">
      hello react!!
      {/* <Counter /> */}
      {/* <UseStateExam1 /> */}
      <UseStateExam2 />
    </div>
  );
}

export default App;
