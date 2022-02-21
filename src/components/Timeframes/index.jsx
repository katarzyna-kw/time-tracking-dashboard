import React from "react";
import "./Timeframes.css";

function Timeframes({ timeframe, item }) {
  return (
    <div class="card__data" data-testid="card-data">
      <p className="card__data--current" key="current">
        {item.timeframes[timeframe].current}hrs
      </p>
      <p className="card__data--previous" key="previous">
        Yesterday - {item.timeframes[timeframe].previous}hrs
      </p>
    </div>
  );
}

export default Timeframes;
