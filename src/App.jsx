// import classes from "./App.css";
import Card from "./components/Card/Card";
// import PersonalInfoForm from "./components/Forms/PersonalInfoForm/PersonalInfoForm";
import SelectPlanForm from "./components/Forms/SelectPlanForm/SelectPlanForm";
import Button from "./components/Button/Button";
import Sidebar from "./components/Sidebar/Sidebar";
import classes from "./App.module.css";

const App = () => {
  return (
    <Card>
      <Sidebar />
      <div className={classes.formAndButton}>
        {/* <PersonalInfoForm /> */}
        <SelectPlanForm/>
        <Button text="Next Step"></Button>
      </div>
    </Card>
  );
};

export default App;
