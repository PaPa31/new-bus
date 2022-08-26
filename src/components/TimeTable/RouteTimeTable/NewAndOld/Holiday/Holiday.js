import React from "react";
import Trips from "./Trips/Trips";
import classes from "./Holiday.module.css";

const holidayOrNot = (props) => {
  return (
    <div className={classes.Holiday}>
      <h3>{props.holiday}</h3>
      <Trips />
    </div>
  );
};

export default holidayOrNot;
