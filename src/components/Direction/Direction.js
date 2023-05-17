import React from "react";
import classes from "./Direction.module.css";

const direction = (props) => {
  return (
    <div className={classes.Direction}>
      {props.dacha && (
        <button onClick={() => props.clicked("fromCity")}>
          {props.city ? "Из города" : "Вернуть"}
        </button>
      )}
      {props.city && (
        <button onClick={() => props.clicked("fromDacha")}>
          {props.dacha ? "Из садов" : "Вернуть"}
        </button>
      )}
    </div>
  );
};

export default direction;
