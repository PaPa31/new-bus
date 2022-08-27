import React from "react";
import classes from "./Direction.module.css";

const direction = (props) => {
  return (
    <div className={classes.Direction}>
      <button>Из города</button>
      <button>Из садов</button>
    </div>
  );
};

export default direction;
