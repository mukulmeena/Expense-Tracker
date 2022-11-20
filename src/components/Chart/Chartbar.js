import React from "react";
import "./Chartbar.css";

const Chartbar = (props) => {
  var barFillHeight = "0%";

  if (props.maxVal > 0) {
    barFillHeight = Math.round((props.value / props.maxVal) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__fill__box">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default Chartbar;
