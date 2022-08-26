import React from "react";
import Trips from "./Trips/Trips";
import classes from "./Holiday.module.css";

const holidayOrNot = (props) => {
  return (
    <div className={classes.Holiday}>
      <h4
        style={
          props.holiday === "Выходные"
            ? { color: "#831313" }
            : { color: "#004400" }
        }
      >
        {props.holiday}
      </h4>
      <Trips />
    </div>
  );
};

export default holidayOrNot;
