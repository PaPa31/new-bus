import React from "react";
import classes from "./RouteTimeTable.module.css";

const routeTimeTable = (props) => {
  return <div className={classes.RouteTimeTable}>{props.num}</div>;
};

export default routeTimeTable;
