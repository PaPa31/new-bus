import React from "react";
import NewAndOld from "./NewAndOld/NewAndOld";
import classes from "./RouteTimeTable.module.css";

const routeTimeTable = (props) => {
  return (
    <div className={classes.RouteTimeTable}>
      <h1>{props.num}</h1>
      <NewAndOld>c 29.06.2022:</NewAndOld>
      <NewAndOld>c 23.08.2022:</NewAndOld>
    </div>
  );
};

export default routeTimeTable;
