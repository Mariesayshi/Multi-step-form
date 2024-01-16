import classes from "./Button.module.css";
const Button = ({ text, setCurrentPage }) => {
  const clickHandler = () => {
    setCurrentPage((prevState) => {
      if (prevState === "step1") {
        return "step2";
      } else if (prevState === "step2") {
        return "step3";
      } else if (prevState === "step3") {
        return "step4";
      }
    });
  };
  return (
    <button onClick={clickHandler} className={classes.button}>
      {text}
    </button>
  );
};
export default Button;
