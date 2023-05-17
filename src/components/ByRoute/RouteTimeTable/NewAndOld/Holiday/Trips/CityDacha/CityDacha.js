import React from "react";
import TimeTable from "./TimeTable/TimeTable";
import classes from "./CityDacha.module.css";

const cityDacha = (props) => {
  return (
    <div className={classes.CityDacha}>
      <h5>{props.direction}</h5>
      <TimeTable />
    </div>
  );
};

export default cityDacha;
