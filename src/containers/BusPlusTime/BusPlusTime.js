import React, { Component, Fragment } from "react";
import BusPark from "../../components/BusPark/BusPark";
import TimeTable from "../../components/TimeTable/TimeTable";
import classes from "./BusPlusTime.module.css";

class BusBuilder extends Component {
  state = {
    buses: [],
    selectedBuses: [],
  };

  selectBusHandler = (index) => {
    const newArray = [...this.state.selectedBuses];
    newArray[index] = !this.state.selectedBuses[index];
    this.setState({ selectedBuses: [...newArray] });
  };

  render() {
    return (
      <Fragment>
        <BusPark
          clicked={this.selectBusHandler}
          selectedBuses={this.state.selectedBuses}
        />
        <TimeTable />
      </Fragment>
    );
  }
}
export default BusBuilder;
