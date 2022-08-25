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
    selectedBuses: [],
  };

  selectBusHandler = (num) => {
    console.log(num);
  };

  render() {
    return (
      <Fragment>
        <div className={classes.BusPlusTime}>
          {busRoutes.map((bus) => (
            <BusRoute
              key={bus.id}
              bus={bus}
              clicked={this.selectBusHandler.bind(this, bus.num)}
            />
          ))}
        </div>
        <TimeTable />
      </Fragment>
    );
  }
}
export default BusBuilder;
