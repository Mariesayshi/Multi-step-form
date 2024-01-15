import classes from "./Summary.module.css";

const Summary = ({ price, plan, billingOption }) => {
  return (
    <div>
      <h1 className={classes.heading}>Finishing up</h1>
      <p className={classes.formDescription}>
        Double-check everything looks OK before confirming.
      </p>
      <div className={classes.summary}>
        <h4 className={classes.currentPlan}>
          <div className={classes.planAndChangebtn}>
            <span className={classes.plan}>
              {plan} ({billingOption})
            </span>
            <button className={classes.changeBtn}>Change</button>
          </div>
          <span className={classes.price}>${price}/mo</span>
        </h4>
        <hr className={classes.line} />
        <p className={classes.addOn}>
          <span>Online service</span>
          <span className={classes.addOnPrice}>+$1/mo</span>
        </p>
        <p className={classes.addOn}>
          <span>Larger Storage</span>
          <span className={classes.addOnPrice}>+$2/mo</span>
        </p>
      </div>
      <div className={classes.total}>
        <span className={classes.totalPriceHeading}>Total (per month)</span>
        <span className={classes.totalPrice}>+$12/mo</span>
      </div>
    </div>
  );
};

export default Summary;
