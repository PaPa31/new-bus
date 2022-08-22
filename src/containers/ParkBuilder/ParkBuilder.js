import React, { Component, Fragment } from "react";

class ParkBuilder extends Component {
  state = {
    busRoutes: [
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
    ],
  };
  render() {
    return (
      <Fragment>
        <BusRoute routes={this.state.busRoutes} />
        <div>Buld Control</div>
      </Fragment>
    );
  }
}
export default ParkBuilder;
