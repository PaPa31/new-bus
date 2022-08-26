import React from "react";
import RouteTimeTable from "./RouteTimeTable/RouteTimeTable";
import classes from "./TimeTable.module.css";
import "./TimeTable.css";

const timeTable = (props) => {
  return (
    <div className={classes.TimeTable}>
      {props.selectedRoutes.filter(Boolean).map((route) => {
        return <RouteTimeTable key={route.id} num={route.num} />;
      })}
    </div>
  );
};

export default timeTable;
