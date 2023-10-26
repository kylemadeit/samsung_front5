const btnStyle = {
  color: "white",
  background: "teal",
  padding: ".375rem .75rem",
  margin: ".5rem",
  border: "1px solid teal",
};

const MyButton = ({ clickHandler, title }) => {
  return (
    <button style={btnStyle} onClick={clickHandler}>
      {title}
    </button>
  );
};

MyButton.defaultProps = {
  title: "이름없음",
};
export default MyButton;
