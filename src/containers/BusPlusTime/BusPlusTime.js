import React, { Component, Fragment } from "react";
import BusPark from "../../components/BusPark/BusPark";
import ByRoute from "../../components/ByRoute/ByRoute";
import ByTime from "../../components/ByTime/ByTime";
import Direction from "../../components/Direction/Direction";
import MergeRoutes from "../../components/MergeRoutes/MergeRoutes";
import classes from "./BusPlusTime.module.css";

class BusBuilder extends Component {
  state = {
    buses: [],
    selectedBuses: [],
    byRoute: true,
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
        {length > 1 ? <MergeRoutes /> : null}
        {this.state.byRoute ? (
          <ByRoute selectedRoutes={this.state.buses} />
        ) : (
          <ByTime />
        )}
      </Fragment>
    );
  }
}
export default BusBuilder;
