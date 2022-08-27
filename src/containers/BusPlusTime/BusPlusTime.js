import React, { Component, Fragment } from "react";
import BusPark from "../../components/BusPark/BusPark";
import TimeTable from "../../components/TimeTable/TimeTable";
import Direction from "../../components/Direction/Direction";
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
    const length = this.state.buses.filter(Boolean).length;
    return (
      <Fragment>
        <BusPark
          clicked={this.selectBusHandler}
          selectedBuses={this.state.selectedBuses}
        />
        {length > 0 ? <Direction /> : null}
        <TimeTable selectedRoutes={this.state.buses} />
      </Fragment>
    );
  }
}
export default BusBuilder;
