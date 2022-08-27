import React from "react";
import TimeTable from "./TimeTable/TimeTable";
import classes from "./ThereFrom.module.css";

const thereFrom = (props) => {
  return (
    <div className={classes.ThereFrom}>
      <h5>{props.direction}</h5>
      <TimeTable />
    </div>
  );
};

export default thereFrom;
