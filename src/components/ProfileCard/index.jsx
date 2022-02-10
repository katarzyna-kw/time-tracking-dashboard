import React from "react";
import "./ProfileCard.css";
import avatar from "../../img/image-jeremy.png";

function ProfileCard({ timeframe, view }) {
  let name = "Jeremy Robson";

  return (
    <section className="profile__card" data-testid="profilecard">
      <header className="profile__user">
        <img className="profile__avatar" src={avatar} alt="profile avatar" />
        <div className="profile__subhead">
          <p className="profile__subhead__text">Report for</p>
          <h1 className="profile__subhead__header">{name}</h1>
        </div>
      </header>

      <ul className="profile__parameters">
        <li
          data-testid="daily"
          className={
            timeframe === "daily"
              ? "profile__parameters-links active"
              : "profile__parameters-links"
          }
          onClick={() => view("daily")}
        >
          Daily
        </li>
        <li
          className={
            timeframe === "weekly"
              ? "profile__parameters-links active"
              : "profile__parameters-links"
          }
          onClick={() => view("weekly")}
        >
          Weekly
        </li>
        <li
          className={
            timeframe === "monthly"
              ? "profile__parameters-links active"
              : "profile__parameters-links"
          }
          onClick={() => view("monthly")}
        >
          Monthly
        </li>
      </ul>
    </section>
  );
}

export default ProfileCard;
