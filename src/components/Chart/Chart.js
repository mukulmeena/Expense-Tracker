import React from "react";
import Chartbar from "./Chartbar";
import "./Chart.css"

const Chart = (props) => {
    const dataPointValue = props.dataPoints.map(datapoint => datapoint.value)
    const maxval= Math.max(...dataPointValue)

  return (
    <div className="Chart">
      {props.dataPoints.map((dataPoint) => (
        <Chartbar
          key={dataPoint.label}
          value={dataPoint.value}
          maxVal={maxval}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart
