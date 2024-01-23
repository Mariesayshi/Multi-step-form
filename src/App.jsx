// import classes from "./App.css";
import Card from "./components/Card/Card";
import PersonalInfoForm from "./components/Forms/PersonalInfoForm/PersonalInfoForm";
import SelectPlanForm from "./components/Forms/SelectPlanForm/SelectPlanForm";
import AddOnsForm from "./components/Forms/AddOnsForm/AddOnsForm";
import Summary from "./components/Forms/Summary/Summary";
import Button from "./components/Button/Button";
import Sidebar from "./components/Sidebar/Sidebar";
import ConfirmationCard from "./components/ConfirmationCard/ConfirmationCard";
import classes from "./App.module.css";
import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState({
    plan: "Arcade",
    price: 9,
  });
  const [purchaseConfirmed, setPurchaseConfirmed] = useState(false);
  const [monthlyBilling, setMonthlyBilling] = useState(true);
  const [addOns, setAddOns] = useState({
    onlineService: { selected: false, price: 1 },
    largerStorage: { selected: false, price: 2 },
    customizableProfile: { selected: false, price: 3 },
  });

  let formContent = null;
  if (currentPage === 1) {
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
  } else if (currentPage === 2) {
    formContent = (
      <SelectPlanForm
        selectedPlan={selectedPlan}
        setSelectedPlan={setSelectedPlan}
        monthlyBilling={monthlyBilling}
        setMonthlyBilling={setMonthlyBilling}
      />
    );
  } else if (currentPage === 3) {
    formContent = (
      <AddOnsForm
        monthlyBilling={monthlyBilling}
        addOns={addOns}
        setAddOns={setAddOns}
      />
    );
  } else if (currentPage === 4) {
    formContent = (
      <Summary
      selectedPlan={selectedPlan}
        monthlyBilling={monthlyBilling}
        addOns={addOns}
      />
    );
  }

  const pageChangeHandler = (next) => {
    setCurrentPage((prevState) => {
      if (next) {
        return prevState + 1;
      } else {
        return prevState - 1;
      }
    });
  };

  const confirmationHandler = () => {
    setPurchaseConfirmed(true);
  };

  return (
    <Card>
      <Sidebar currentPage={currentPage} />
      {!purchaseConfirmed ? (
        <div className={classes.formAndButton}>
          {formContent}
          <div className={classes.pageBtns}>
            {currentPage !== 1 && (
              <button
                onClick={() => pageChangeHandler(false)}
                className={classes.backBtn}
              >
                Go back
              </button>
            )}

            {currentPage !== 4 && (
              <Button
                text="Next Step"
                onClick={() => pageChangeHandler(true)}
              />
            )}
            {currentPage === 4 && (
              <button
                onClick={confirmationHandler}
                className={classes.confirmBtn}
              >
                Confirm
              </button>
            )}
          </div>
        </div>
      ) : (
        <ConfirmationCard />
      )}
    </Card>
  );
};

export default App;
