import React from "react";
import classes from "./BusPark.module.css";
import BusRoute from "./BusRoute/BusRoute";

const busPark = (props) => {
  const parsedBusRoutes = Object.keys(props.busRoutes).map((busKey) => {
    return [...Array(props.busRoutes[busKey])].map((_, i) => {
      return <BusRoute key={busKey + i} busKey={busKey} bus={_} />;
    });
  });
  return <div className={classes.BusPark}>{parsedBusRoutes}</div>;
};

export default busPark;
