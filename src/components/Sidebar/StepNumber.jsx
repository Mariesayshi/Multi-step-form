import classes from "./StepNumber.module.css";
const Step = ({ num, stepHeading }) => {
  return (
    <div className={classes.step}>
      <div className={classes.stepNumber}>{num}</div>
      <div className={classes.stepHeadings}>
        <span className={classes.subHeading}>STEP {num}</span>
        <h5 className={classes.heading}>{stepHeading.toUpperCase()}</h5>
      </div>
    </div>
  );
};

export default Step;
