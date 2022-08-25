import React from "react";
import classes from "./BusRoute.module.css";

const busRoute = (props) => {
  return <button className={classes.BusRoute}>{props.bus.num}</button>;
};

export default busRoute;
