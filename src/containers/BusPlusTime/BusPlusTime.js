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
    fromCity: true,
    fromDacha: true,
  };

  selectBusHandler = (bus, index) => {
    const b = this.state.selectedBuses;
    const newArray = [...b];
    newArray[index] = !b[index];
    const newBuses = [...this.state.buses];
    newBuses[index] = newArray[index] ? bus : undefined;
    this.setState({ selectedBuses: [...newArray], buses: [...newBuses] });
  };

  toggleRouteOrTimeHandler = () => {
    this.setState({ byRoute: !this.state.byRoute });
  };

  toggleDirectionHandler = (dir) => {
    this.setState({ [dir]: !this.state[dir] });
  };

  render() {
    const length = this.state.buses.filter(Boolean).length;
    return (
      <Fragment>
        <BusPark
          clicked={this.selectBusHandler}
          selectedBuses={this.state.selectedBuses}
        />
        <div className={classes.Buttons}>
          {length > 0 ? (
            <Direction
              clicked={this.toggleDirectionHandler}
              fromCity={this.state.fromCity}
              fromDacha={this.state.fromDacha}
            />
          ) : null}
          {length > 1 ? (
            <MergeRoutes
              clicked={this.toggleRouteOrTimeHandler}
              toggle={this.state.byRoute}
            />
          ) : null}
        </div>
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
