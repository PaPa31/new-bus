import React from "react";
import classes from "./NewAndOld.module.css";
import Holiday from "./Holiday/Holiday";

const newAndOld = (props) => {
  return (
    <div className={classes.NewAndOld}>
      <h3>{props.children}</h3>
      <Holiday holidayOrNot="Рабочие дни" />
      <Holiday holidayOrNot="Выходные дни" holiday />
    </div>
  );
};

export default newAndOld;
