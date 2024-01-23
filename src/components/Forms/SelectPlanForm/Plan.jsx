import classes from "./Plan.module.css";
import classNames from "classnames";

const Plan = ({
  setSelectedPlan,
  selected,
  src,
  heading,
  monthlyPrice,
  monthlyBilling,
}) => {
  const clickHandler = () => {
    setSelectedPlan({ plan: heading, price: monthlyPrice });
  };
  return (
    <div
      onClick={clickHandler}
      className={classNames(classes.plan, {
        [classes.selected]: selected === heading,
      })}
    >
      <img src={src} className={classes.planIcon} />
      <div className={classes.headingAndPrice}>
        <h4 className={classes.heading}>{heading}</h4>
        <span className={classes.price}>
          ${monthlyBilling ? monthlyPrice : monthlyPrice * 10}/
          {monthlyBilling ? "mo" : "yr"}
        </span>
        {!monthlyBilling && (
          <span className={classes.freeMonths}>2 months free</span>
        )}
      </div>
    </div>
  );
};

export default Plan;
