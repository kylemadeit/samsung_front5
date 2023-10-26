import { useState } from "react";

const TitlePriceInputBox = () => {
  const [inputs, setInputs] = useState({
    title: "",
    price: "",
  });
  console.log({ ...inputs });
  const { title, price } = inputs;

  const changeHandler = (e) => {
    console.log(e.target);

    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const resetHandler = () => {
    setInputs({
      title: "",
      price: "",
    });
  };
  return (
    <div>
      <label>title:{title}</label> <br />
      <label>price:{price}</label> <br />
      제목 :{" "}
      <input
        type="text"
        placeholder="제목을 입력하세요."
        onChange={changeHandler}
        value={title}
        name="title"
      />{" "}
      <br></br>
      가격 :{" "}
      <input
        type="number"
        placeholder="가격을 입력하세요."
        onChange={changeHandler}
        value={price}
        name="price"
      />
      <br />
      <button onClick={resetHandler}>RESET</button>
    </div>
  );
};

export default TitlePriceInputBox;
