// import classes from "./App.css";
import Card from "./components/Card/Card";
import PersonalInfoForm from "./components/Forms/PersonalInfoForm/PersonalInfoForm";
import SelectPlanForm from "./components/Forms/SelectPlanForm/SelectPlanForm";
import AddOnsForm from "./components/Forms/AddOnsForm/AddOnsForm";
import Summary from "./components/Forms/Summary/Summary";
import Button from "./components/Button/Button";
import Sidebar from "./components/Sidebar/Sidebar";
import classes from "./App.module.css";
import { useState } from "react";

const App = () => {
  const [name, setName] = useState("Marie Mdin");
  const [email, setEmail] = useState("marie@gmail.com");
  const [phoneNum, setPhoneNum] = useState("210398123");
  const [currentPage, setCurrentPage] = useState("step1");
  let formContent = null;
  if (currentPage === "step1") {
    formContent = (
      <PersonalInfoForm
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        phoneNum={phoneNum}
        setPhoneNum={setPhoneNum}
      />
    );
  } else if (currentPage === "step2") {
    formContent = <SelectPlanForm />;
  } else if (currentPage === "step3") {
    formContent = <AddOnsForm />;
  } else if (currentPage === "step4") {
    formContent = <Summary price="9" plan="Arcade" billingOption="monthly" />;
  }

  const clickHandler = () => {
    setCurrentPage((prevState) => {
      if (prevState === "step2") {
        return "step1";
      } else if (prevState === "step3") {
        return "step2";
      } else if (prevState === "step4") {
        return "step3";
      }
    });
  };

  return (
    <Card>
      <Sidebar currentPage={currentPage} />
      <div className={classes.formAndButton}>
        {formContent}
        <div className={classes.pageBtns}>
          {currentPage !== "step1" && (
            <button onClick={clickHandler} className={classes.backBtn}>
              Go back
            </button>
          )}

          {currentPage !== "step4" && (
            <Button
              text="Next Step"
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          )}
          {currentPage === "step4" && (
            <button className={classes.confirmBtn}>Confirm</button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default App;
