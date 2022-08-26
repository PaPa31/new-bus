import React from "react";
import NewAndOld from "./NewAndOld/NewAndOld";
import classes from "./RouteTimeTable.module.css";

const routeTimeTable = (props) => {
  return (
    <div className={classes.RouteTimeTable}>
      <h2>{props.num}</h2>
      <NewAndOld>c 29.06.2022:</NewAndOld>
      <NewAndOld>c 23.08.2022:</NewAndOld>
      <h6>
        Перевозчик – ООО «Оренбурггазтранс», телефон диспетчерской 73-20-50
      </h6>
    </div>
  );
};

export default routeTimeTable;
