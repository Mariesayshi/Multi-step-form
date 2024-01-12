import classes from "./ToggleSwitch.module.css";
const ToggleSwitch = () => {
  return (
    <>
      <input type="checkbox" id="switch" className={classes.switch} />
      <label htmlFor="switch">Toggle</label>
    </>
  );
};

export default ToggleSwitch;
