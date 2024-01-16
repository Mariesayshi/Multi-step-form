import classes from "./Input.module.css";
const Input = ({ labelText, id, placeholder, type, value, setValue }) => {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={classes.input}
        type={type}
        id={id}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
