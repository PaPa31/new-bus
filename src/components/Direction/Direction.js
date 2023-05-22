import React from "react";
import classes from "./Direction.module.css";

const direction = (props) => {
  return (
    <div className={classes.Direction}>
      {props.dacha && (
        <button
          className={props.city ? undefined : "Red"}
          onClick={() => props.clicked("fromCity")}
        >
          Из города
        </button>
      )}
      {props.city && (
        <button
          className={props.dacha ? undefined : "Red"}
          onClick={() => props.clicked("fromDacha")}
        >
          Из садов
        </button>
      )}
    </div>
  );
};

export default direction;
