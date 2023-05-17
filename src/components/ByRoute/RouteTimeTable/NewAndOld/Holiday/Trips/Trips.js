import React from "react";
import { connect } from "react-redux";
import classes from "./Trips.module.css";
import CityDacha from "./CityDacha/CityDacha";

const trips = (props) => (
  <div className={classes.Trips}>
    {props.dacha && <CityDacha direction="Туда" />}
    {props.city && <CityDacha direction="Оттуда" />}
  </div>
);

const mapStateToProps = (state) => {
  return {
    city: state.fromCity,
    dacha: state.fromDacha,
  };
};
export default connect(mapStateToProps)(trips);
