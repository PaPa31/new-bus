import React from "react";
import Table from "./Table/Table";
import classes from "./ThereFrom.module.css";

const thereFrom = (props) => {
  return (
    <div className={classes.ThereFrom}>
      <h5>{props.direction}</h5>
      <Table />
    </div>
  );
};

export default thereFrom;