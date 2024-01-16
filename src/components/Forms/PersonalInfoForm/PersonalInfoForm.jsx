import classes from "./PersonalInfoForm.module.css";
import Input from "../../Input/Input";

const PersonalInfoForm = ({
  name,
  setName,
  email,
  setEmail,
  phoneNum,
  setPhoneNum,
}) => {
  return (
    <form>
      <h1 className={classes.heading}>Personal info</h1>
      <p className={classes.formDescription}>
        Please provide your name, email address and phone number.
      </p>
      <Input
        id="nameInput"
        placeholder="First and last name"
        labelText="Name"
        type="text"
        value={name}
        setValue={setName}
      />
      <Input
        id="emailInput"
        placeholder="@ Address"
        labelText="Email Address"
        type="email"
        value={email}
        setValue={setEmail}

      />
      <Input
        id="phoneInput"
        placeholder="Phone Number"
        labelText="Phone Number"
        type="number"
        value={phoneNum}
        setValue={setPhoneNum}

      />
    </form>
  );
};

export default PersonalInfoForm;
