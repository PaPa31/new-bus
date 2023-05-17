import React from "react";
import RouteTimeTable from "./RouteTimeTable/RouteTimeTable";
import classes from "./ByRoute.module.css";
import "./ByRoute.css";

const byTime = (props) => {
  return (
    <div className={classes.ByRoute}>
      {props.selectedRoutes.filter(Boolean).map((route) => {
        return <RouteTimeTable key={route.id} num={route.num} />;
      })}
    </div>
  );
};
export default byTime;
