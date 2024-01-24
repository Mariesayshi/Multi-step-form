import classes from "./ToggleSwitch.module.css";
const ToggleSwitch = ({ switchHandler, checked }) => {
  return (
    <>
      <input
        onChange={switchHandler}
        type="checkbox"
        id="switch"
        className={classes.switch}
        checked={checked}
      />
      <label className={classes.label} htmlFor="switch">
        Toggle
      </label>
    </>
  );
};

export default ToggleSwitch;
