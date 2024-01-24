import classes from "./Summary.module.css";

const Summary = ({ addOns, selectedPlan, monthlyBilling, setCurrentPage }) => {
  const period = monthlyBilling ? "mo" : "yr";
  const priceMultipliable = monthlyBilling ? 1 : 10;
  let totalPrice = selectedPlan.price;

  for (const addOn in addOns) {
    if (addOns[addOn].selected) {
      totalPrice += addOns[addOn].price;
    }
  }

  const planChangeHandler = () => {
    setCurrentPage(2);
  };

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
              {selectedPlan.plan} ({monthlyBilling ? "mo" : "yr"})
            </span>
            <button className={classes.changeBtn} onClick={planChangeHandler}>
              Change
            </button>
          </div>
          <span className={classes.price}>
            ${selectedPlan.price * priceMultipliable}/{period}
          </span>
        </h4>
        <hr className={classes.line} />
        {addOns.onlineService.selected && (
          <p className={classes.addOn}>
            <span>Online service</span>
            <span className={classes.addOnPrice}>
              +${addOns.onlineService.price * priceMultipliable}/{period}
            </span>
          </p>
        )}

        {addOns.largerStorage.selected && (
          <p className={classes.addOn}>
            <span>Larger Storage</span>
            <span className={classes.addOnPrice}>
              +$
              {addOns.largerStorage.price * priceMultipliable}/{period}
            </span>
          </p>
        )}
        {addOns.customizableProfile.selected && (
          <p className={classes.addOn}>
            <span>Customizable Profile</span>
            <span className={classes.addOnPrice}>
              +$
              {addOns.customizableProfile.price * priceMultipliable}/{period}
            </span>
          </p>
        )}
      </div>
      <div className={classes.total}>
        <span className={classes.totalPriceHeading}>
          Total ({monthlyBilling ? "per month" : "per year"})
        </span>
        <span className={classes.totalPrice}>
          +${totalPrice * priceMultipliable}/{period}
        </span>
      </div>
    </div>
  );
};

export default Summary;
