import classes from "./Input.module.css";
import classNames from "classnames";
const Input = ({
  labelText,
  id,
  placeholder,
  type,
  value,
  setValue,
  valid,
  errorMsg,
}) => {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <div className={classes.inputAndMsg}>
        <span
          className={classNames(classes.errorMsg, {
            [classes.visible]: !valid && valid !== null,
          })}
        >
          {errorMsg}
        </span>
        <input
          value={value}
          onChange={(e) =>
            setValue({ value: e.target.value, valid: null, errorMsg: "" })
          }
          className={classes.input}
          type={type}
          id={id}
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default Input;
