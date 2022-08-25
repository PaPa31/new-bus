import React from "react";
import classes from "./BusRoute.module.css";

const busRoute = (props) => {
  return (
    <button onClick={props.clicked} className={classes.BusRoute}>
      {props.bus.num}
    </button>
  );
};

export default busRoute;
