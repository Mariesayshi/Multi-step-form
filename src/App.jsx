// import classes from "./App.css";
import Card from "./components/Card/Card";
import PersonalInfoForm from "./components/Forms/PersonalInfoForm/PersonalInfoForm"
import Button from "./components/Button/Button"

const App = () => {
  return <Card>
    <PersonalInfoForm />
    <Button text="Next Step"></Button>
  </Card>;
};

export default App;
