import classes from "./AddOnsForm.module.css";
import AddOn from "../../AddOn/AddOn";
const AddOnsForm = ({ monthlyBilling, addOns, setAddOns }) => {
  return (
    <form>
      <h1 className={classes.heading}>Pick add-ons</h1>
      <p className={classes.formDescription}>
        Add-ons help enhance your gaming experience.
      </p>

      <AddOn
        added={addOns.onlineService.selected}
        setAddOns={setAddOns}
        title="Online service"
        description="Access to multiplayer games"
        id="onlineService"
        monthlyPrice={addOns.onlineService.price}
        monthlyBilling={monthlyBilling}
      />
      <AddOn
        added={addOns.largerStorage.selected}
        setAddOns={setAddOns}
        title="Larger storage"
        description="Extra 1TB of cloud save"
        id="largerStorage"
        monthlyPrice={addOns.largerStorage.price}
        monthlyBilling={monthlyBilling}
      />
      <AddOn
        added={addOns.customizableProfile.selected}
        setAddOns={setAddOns}
        title="Customizable Profile"
        description="Custom theme on your profile"
        id="customizableProfile"
        monthlyPrice={addOns.customizableProfile.price}
        monthlyBilling={monthlyBilling}
      />
    </form>
  );
};

export default AddOnsForm;
