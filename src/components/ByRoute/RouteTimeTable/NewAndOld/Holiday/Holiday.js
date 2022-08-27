import React from "react";
import Trips from "./Trips/Trips";
import classes from "./Holiday.module.css";

const holidayOrNot = (props) => {
  return (
    <div className={classes.Holiday}>
      <h4 className={props.holiday ? classes.Red : classes.Green}>
        {props.holidayOrNot}
      </h4>
      <Trips />
    </div>
  );
};

export default holidayOrNot;
