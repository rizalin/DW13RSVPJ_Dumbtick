import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import moment from "moment"

import "../App.css";
import QR from "../img/opera_JN4LpDssIv.png";

export function Ticket(props) {
  const startTime = new Date(props.date);
  const start = moment(startTime).format("ddd. DD MMM YYYY HH:mm")

  return (
    <div className="ticket">
      <div className="ticket-header justify-content-between">
        <h1>{props.name}</h1>
        <p>Face Value Rp{props.price}</p>
      </div>
      <div className="ticket-body justify-content-between">
        <div style={{ width: "70%" }}>
          <h1>{props.title}</h1>
          <h2>{start}</h2>
          <p>{props.address}</p>
        </div>
        <div style={{ width: "fitContent", paddingTop: "8px" }}>
          <img src={QR} />
        </div>
      </div>
    </div>
  );
}
