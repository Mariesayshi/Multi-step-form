import classes from "./ConfirmationCard.module.css";
import confirmationIcon from "../../assets/icon-thank-you.svg";

const ConfirmationCard = () => {
  return (
    <div className={classes.confirmationCard}>
      <img className={classes.confirmationIcon} src={confirmationIcon} />
      <h1 className={classes.confirmationHeading}>Thank you!</h1>
      <p className={classes.confirmationMsg}>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default ConfirmationCard;
