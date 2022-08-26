import React from "react";
import BusRoute from "./BusRoute/BusRoute";
import classes from "./BusPark.module.css";

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

const busPark = (props) => {
  return (
    <div className={classes.BusPark}>
      {busRoutes.map((bus, i) => (
        <BusRoute
          key={bus.id}
          color={props.selectedBuses[i]}
          bus={bus}
          clicked={() => props.clicked(i)}
        />
      ))}
    </div>
  );
};

export default busPark;
