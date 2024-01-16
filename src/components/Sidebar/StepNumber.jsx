import classes from "./StepNumber.module.css";
import classNames from "classnames";
const Step = ({ num, stepHeading, current }) => {
  return (
    <div className={classes.step}>
      <div
        className={classNames(classes.stepNumber, {
          [classes.currentStepNumber]: current,
        })}
      >
        {num}
      </div>
      <div className={classes.stepHeadings}>
        <span className={classes.subHeading}>STEP {num}</span>
        <h5 className={classes.heading}>{stepHeading.toUpperCase()}</h5>
      </div>
    </div>
  );
};

export default Step;
