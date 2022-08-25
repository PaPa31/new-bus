import React from "react";
import classes from "./BusRoute.module.css";
import "./BusRoute.css";

const busRoute = (props) => {
  return (
    <button className={props.color ? "Red" : undefined} onClick={props.clicked}>
      {props.bus.num}
    </button>
  );
};

export default busRoute;
