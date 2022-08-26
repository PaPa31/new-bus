import React from "react";
import classes from "./NewAndOld.module.css";
import Holiday from "./Holiday/Holiday";

const newAndOld = (props) => {
  return (
    <div className={classes.NewAndOld}>
      <h2>{props.children}</h2>
      <Holiday holiday="Рабочие дни" />
      <Holiday holiday="Выходные дни" />
    </div>
  );
};

export default newAndOld;
