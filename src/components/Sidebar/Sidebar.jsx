import classes from "./Sidebar.module.css";
import Step from "./StepNumber";
const Sidebar = ({ currentPage }) => {
  return (
    <aside className={classes.sidebar}>
      <Step current={currentPage === 1} num="1" stepHeading="YOUR INFO" />
      <Step current={currentPage === 2} num="2" stepHeading="SELECT PLAN" />
      <Step current={currentPage === 3} num="3" stepHeading="ADD-ONS" />
      <Step current={currentPage === 4} num="4" stepHeading="SUMMARY" />
    </aside>
  );
};

export default Sidebar;
