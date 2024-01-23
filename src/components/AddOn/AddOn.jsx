import classes from "./AddOn.module.css";
import classNames from "classnames";

const AddOn = ({
  added,
  setAddOns,
  monthlyBilling,
  description,
  title,
  id,
  monthlyPrice,
}) => {
  const changeHandler = () => {
    setAddOns((prevState) => {
      const newState = JSON.parse(JSON.stringify(prevState));
      newState[id].selected = !newState[id].selected;
      return newState;
    });
  };
  return (
    <div className={classNames(classes.addOn, { [classes.checked]: added })}>
      <input
        className={classes.checkbox}
        id={`checkbox_${id}`}
        type="checkbox"
        checked={added}
        onChange={changeHandler}
      />
      <label htmlFor={`checkbox_${id}`} className={classes.label}>
        <div className={classes.headings}>
          <h5 className={classes.title}>{title}</h5>
          <p className={classes.description}>{description}</p>
        </div>
        <span className={classes.price}>
          +${monthlyBilling ? monthlyPrice : monthlyPrice * 10}/
          {monthlyBilling ? "mo" : "yr"}
        </span>
      </label>
    </div>
  );
};

export default AddOn;
