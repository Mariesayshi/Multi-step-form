import classes from "./AddOnsForm.module.css";
import AddOn from "../../AddOn/AddOn";
const AddOnsForm = () => {
  return (
    <form>
      <h1 className={classes.heading}>Pick add-ons</h1>
      <p className={classes.formDescription}>
        Add-ons help enhance your gaming experience.
      </p>

      <AddOn
        title="Online service"
        description="Access to multiplayer games"
        id="onlineServices"
        price="1"
      />
      <AddOn
        title="Larger storage"
        description="Extra 1TB of cloud save"
        id="largerStorage"
        price="2"
      />
      <AddOn
        title="Customizable Profile"
        description="Custom theme on your profile"
        id="customizableProfile"
        price="3"
      />
    </form>
  );
};

export default AddOnsForm;
