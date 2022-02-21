import React from "react";
import Ellipsis from "../Ellipsis";
import Timeframes from "../Timeframes";
import "./TrackingCard.css";

function TrackingCard({ timeframe, item }) {
  return (
    <div class="card" data-testid="card">
      <div class="card__header"></div>
      <div class="card__body">
        <div className="card__label">
          <p className="card__title" key="title">
            {item.title}
          </p>
          <Ellipsis />
        </div>
        <Timeframes timeframe={timeframe} item={item} />
      </div>
    </div>
  );
}

export default TrackingCard;
