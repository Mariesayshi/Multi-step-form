import classes from "./Plan.module.css";
const Plan = ({ src, heading, price }) => {
  return (
    <div className={classes.plan}>
      <img src={src} />
      <div className={classes.headingAndPrice}>
        <h5 className={classes.heading}>{heading}</h5>
        <span className={classes.price}>${price}/mo</span>
      </div>
    </div>
  );
};

export default Plan;
