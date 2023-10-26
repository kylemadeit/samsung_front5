import First from "./First";
import Parent from "./Parent";
import Second from "./Second";

const ChildrenExam = () => {
  return (
    <Parent>
      <First />
      <Second name="hoho" />
      <Second name="haha" />
    </Parent>
  );
};

export default ChildrenExam;
