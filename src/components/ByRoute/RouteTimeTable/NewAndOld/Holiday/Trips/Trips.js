import React from "react";
import { connect } from "react-redux";
import classes from "./Trips.module.css";
import ThereFrom from "./ThereFrom/ThereFrom";

const trips = (props) => (
  <div className={classes.Trips}>
    {props.dacha && <ThereFrom direction="Туда" />}
    {props.city && <ThereFrom direction="Оттуда" />}
  </div>
);

const mapStateToProps = (state) => {
  return {
    city: state.fromCity,
    dacha: state.fromDacha,
  };
};
export default connect(mapStateToProps)(trips);
