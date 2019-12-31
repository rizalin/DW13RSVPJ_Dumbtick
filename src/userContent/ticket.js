import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import QR from "../img/opera_JN4LpDssIv.png";

export function Ticket() {
  return (
    <div className="ticket">
      <div className="ticket-header justify-content-between">
        <h1>Anon</h1>
        <p>Face Value Rp300.000</p>
      </div>
      <div className="ticket-body justify-content-between">
        <div style={{ width: "70%" }}>
          <h1>Anon Concert</h1>
          <h2>Tanggal entah kapan</h2>
          <p>Ini alamatnya</p>
        </div>
        <div style={{ width: "fitContent", paddingTop: "8px" }}>
          <img src={QR} />
        </div>
      </div>
    </div>
  );
}
