import classes from "./Sidebar.module.css";
import Step from "./StepNumber";
const Sidebar = () => {
  return (
    <aside className={classes.sidebar}>
      <Step num="1" stepHeading="YOUR INFO" />
      <Step num="2" stepHeading="SELECT PLAN" />
      <Step num="3" stepHeading="ADD-ONS" />
      <Step num="4" stepHeading="SUMMARY" />
    </aside>
  );
};

export default Sidebar;
