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
        placeholder="e.g. Stephen King"
        labelText="Name"
        type="text"
        value={name.value}
        setValue={setName}
        valid={name.valid}
        errorMsg={name.errorMsg}
      />
      <Input
        id="emailInput"
        placeholder="e.g. stephenking@lorem.com"
        labelText="Email Address"
        type="email"
        value={email.value}
        setValue={setEmail}
        valid={email.valid}
        errorMsg={email.errorMsg}
      />
      <Input
        id="phoneInput"
        placeholder="e.g. +1 234 567 890"
        labelText="Phone Number"
        type="number"
        value={phoneNum.value}
        setValue={setPhoneNum}
        valid={phoneNum.valid}
        errorMsg={phoneNum.errorMsg}
      />
    </form>
  );
};

export default PersonalInfoForm;
