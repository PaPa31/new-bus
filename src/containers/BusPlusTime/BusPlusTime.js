import React, { Component, Fragment } from "react";
import BusPark from "../../components/BusPark/BusPark";
import TimeTable from "../../components/TimeTable/TimeTable";
import classes from "./BusPlusTime.module.css";

class BusBuilder extends Component {
  state = {
    buses: [],
    selectedBuses: [],
  };

  selectBusHandler = (bus, index) => {
    const b = this.state.selectedBuses;
    const newArray = [...b];
    newArray[index] = !b[index];
    const newBuses = [...this.state.buses];
    newBuses[index] = newArray[index] ? bus : undefined;
    this.setState({ selectedBuses: [...newArray], buses: [...newBuses] });
  };

  render() {
    return (
      <Fragment>
        <BusPark
          clicked={this.selectBusHandler}
          selectedBuses={this.state.selectedBuses}
        />
        <TimeTable
          selectedRoutes={this.state.buses}
          length={this.state.buses.filter(Boolean).length}
        />
      </Fragment>
    );
  }
}
export default BusBuilder;
