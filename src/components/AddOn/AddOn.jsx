import classes from "./AddOn.module.css";

const AddOn = ({ description, title, id, price }) => {
  return (
    <div className={classes.addOn}>
      <input
        className={classes.checkbox}
        id={`checkbox_${id}`}
        type="checkbox"
      />
      <label htmlFor={`checkbox_${id}`} className={classes.label}>
        <div className={classes.headings}>
          <h5 className={classes.title}>{title}</h5>
          <p className={classes.description}>{description}</p>
        </div>
        <span className={classes.price}>+${price}/mo</span>
      </label>
    </div>
  );
};

export default AddOn;
