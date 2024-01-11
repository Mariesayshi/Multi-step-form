import classes from "./PersonalInfoForm.module.css"
import Input from "../../Input/Input"

const PersonalInfoForm = () => {
    return <form>
        <h1>Personal info</h1>
        <p className={classes.formDescription}>Please provide your name, email address and phone number.</p>
        <Input id="nameInput" placeholder="First and last name" labelText="Name" type="text" />
        <Input id="emailInput" placeholder="@ Address" labelText="Email Address" type="email" />
        <Input id="phoneInput" placeholder="Phone Number" labelText="Phone Number" type="number" />

    </form>
}

export default PersonalInfoForm;