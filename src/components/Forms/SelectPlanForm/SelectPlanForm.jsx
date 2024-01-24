import classes from "./SelectPlanForm.module.css";
import Plan from "./Plan";
import arcadeIcon from "../../../assets/icon-arcade.svg";
import advancedIcon from "../../../assets/icon-advanced.svg";
import proIcon from "../../../assets/icon-pro.svg";
import ToggleSwitch from "../../ToggleSwitch/ToggleSwitch";
const SelectPlanForm = ({
  selectedPlan,
  setSelectedPlan,
  monthlyBilling,
  setMonthlyBilling,
}) => {
  const switchHandler = () => {
    console.log;
    setMonthlyBilling((prevState) => {
      return !prevState;
    });
  };

  return (
    <form>
      <h1 className={classes.heading}>Select Plan</h1>
      <p className={classes.formDescription}>
        You have the option of monthly or yearly billing.
      </p>
      <div className={classes.plans}>
        <Plan
          setSelectedPlan={setSelectedPlan}
          selected={selectedPlan.plan}
          src={arcadeIcon}
          heading="Arcade"
          monthlyPrice={9}
          monthlyBilling={monthlyBilling}
        />
        <Plan
          setSelectedPlan={setSelectedPlan}
          selected={selectedPlan.plan}
          src={advancedIcon}
          heading="Advanced"
          monthlyPrice={12}
          monthlyBilling={monthlyBilling}
        />
        <Plan
          setSelectedPlan={setSelectedPlan}
          selected={selectedPlan.plan}
          src={proIcon}
          heading="Pro"
          monthlyPrice={15}
          monthlyBilling={monthlyBilling}
        />
      </div>
      <div className={classes.billingSwitch}>
        <span className={classes.billingOption}>Monthly</span>
        <ToggleSwitch switchHandler={switchHandler} checked={!monthlyBilling} />
        <span className={classes.billingOption}>Yearly</span>
      </div>
    </form>
  );
};

export default SelectPlanForm;
