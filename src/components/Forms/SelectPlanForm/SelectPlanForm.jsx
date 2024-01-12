import classes from "./SelectPlanForm.module.css";
import Plan from "./Plan";
import arcadeIcon from "../../../assets/icon-arcade.svg";
import advancedIcon from "../../../assets/icon-advanced.svg";
import proIcon from "../../../assets/icon-pro.svg";
import ToggleSwitch from "../../ToggleSwitch/ToggleSwitch";
const SelectPlanForm = () => {
  return (
    <form>
      <h1 className={classes.heading}>Select Plan</h1>
      <p className={classes.formDescription}>
        You have the option of monthly or yearly billing.
      </p>
      <div className={classes.plans}>
        <Plan src={arcadeIcon} heading="Arcade" price="9" />
        <Plan src={advancedIcon} heading="Advanced" price="12" />
        <Plan src={proIcon} heading="Pro" price="15" />
      </div>
      <div className={classes.billingSwitch}>
        <span className={classes.billingOption}>Monthly</span>
        <ToggleSwitch />
        <span className={classes.billingOption}>Yearly</span>
      </div>
    </form>
  );
};

export default SelectPlanForm;
