import React from "react";
import classes from "./MergeRoutes.module.css";

const mergeRoutes = (props) => (
  <button className={classes.MergeRoutes} onClick={props.clicked}>
    {props.toggle ? "Какой раньше" : "Какой чаще"}
  </button>
);

export default mergeRoutes;
