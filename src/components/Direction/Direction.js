import React from "react";
import classes from "./Direction.module.css";

const direction = (props) => {
  return (
    <div className={classes.Direction}>
      {props.fromDacha && (
        <button onClick={() => props.clicked("fromCity")}>
          {props.fromCity ? "Из города" : "Вернуть"}
        </button>
      )}
      {props.fromCity && (
        <button onClick={() => props.clicked("fromDacha")}>
          {props.fromDacha ? "Из садов" : "Вернуть"}
        </button>
      )}
    </div>
  );
};

export default direction;
