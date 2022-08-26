import React from "react";
import classes from "./Trips.module.css";
import ThereFrom from "./ThereFrom/ThereFrom";

const trips = (props) => (
  <div className={classes.Trips}>
    <ThereFrom direction="Туда" />
    <ThereFrom direction="Обратно" />
  </div>
);

export default trips;
