import React from "react";
import classes from "./BusRoute.module.css";

const busRoute = (props) => {
  return (
    <div className={classes.BusRoute}>
      <div>Old Timetable</div>
      <div>New Timetable</div>
    </div>
  );
};

export default busRoute;
