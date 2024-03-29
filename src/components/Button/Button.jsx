import classes from "./Button.module.css";
const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className={classes.button}>
      {text}
    </button>
  );
};
export default Button;
