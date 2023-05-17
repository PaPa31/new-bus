import React from "react";
import { connect } from "react-redux";
import NewAndOld from "./NewAndOld/NewAndOld";
import classes from "./RouteTimeTable.module.css";

const routeTimeTable = (props) => {
  return (
    <div className={classes.RouteTimeTable}>
      <h2>{props.num}</h2>
      <div className={classes.TwoBlocks}>
        <NewAndOld>c 29.06.2022:</NewAndOld>
        <NewAndOld>c 23.08.2022:</NewAndOld>
      </div>
      <div className={classes.Center}>
        <h6
          className={
            props.city && props.dacha ? classes.Wider : classes.Narrower
          }
        >
          Перевозчик – ООО «Оренбурггазтранс», телефон диспетчерской 73-20-50
        </h6>
      </div>
    </div>
  );
};

const mapStatetoProps = (state) => {
  return {
    city: state.fromCity,
    dacha: state.fromDacha,
  };
};

export default connect(mapStatetoProps)(routeTimeTable);
