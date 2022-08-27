import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import BusPark from "../../components/BusPark/BusPark";
import ByRoute from "../../components/ByRoute/ByRoute";
import ByTime from "../../components/ByTime/ByTime";
import Direction from "../../components/Direction/Direction";
import MergeRoutes from "../../components/MergeRoutes/MergeRoutes";
import classes from "./BusPlusTime.module.css";
import * as actionTypes from "../../store/actions";

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
              clicked={this.props.onToggle}
              city={this.props.city}
              dacha={this.props.dacha}
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

const mapStateToProps = (state) => {
  return {
    city: state.fromCity,
    dacha: state.fromDacha,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onToggle: (dir) =>
      dispatch({ type: actionTypes.TOGGLE_THERE_FROM, direction: dir }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BusBuilder);
