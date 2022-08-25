import React, { Component, Fragment } from "react";
import BusRoute from "../../components/BusRoute/BusRoute";
import TimeTable from "../../components/TimeTable/TimeTable";
import classes from "./BusPlusTime.module.css";

const busRoutes = [
  { id: "16279", startPoint: "Клиффорд", endPoint: "c/о Русь", num: 296 },
  { id: "16280", startPoint: "РТИ", endPoint: "c/о Русь", num: 297 },
  {
    id: "16247",
    startPoint: "Клиффорд",
    endPoint: "c/о Ростоши-2",
    num: 100,
  },
  {
    id: "16248",
    startPoint: "Клиффорд",
    endPoint: "c/о Ростоши-3",
    num: 110,
  },
];

class BusBuilder extends Component {
  state = {
    buses: [],
    selectedBuses: [],
  };

  componentDidMount() {
    const newArray = [];
    busRoutes.map(() => newArray.push(false));
    this.setState({ selectedBuses: [...newArray] });
  }

  selectBusHandler = (index) => {
    const newArray = [...this.state.selectedBuses];
    newArray[index] = !this.state.selectedBuses[index];
    this.setState({ selectedBuses: [...newArray] });
  };

  render() {
    return (
      <Fragment>
        <div className={classes.BusPlusTime}>
          {busRoutes.map((bus, i) => (
            <BusRoute
              key={bus.id}
              index={i}
              color={this.state.selectedBuses[i]}
              bus={bus}
              clicked={this.selectBusHandler.bind(this, i)}
            />
          ))}
        </div>
        <TimeTable />
      </Fragment>
    );
  }
}
export default BusBuilder;
