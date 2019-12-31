import React from "react";
import { Avatar, Link } from "@material-ui/core";
import { Popover, OverlayTrigger, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("name");
  localStorage.removeItem("isLogin");
  window.location = "/";
}

const isLogin = localStorage.getItem("isLogin");

const popover = (
  <Popover id="popover-basic">
    <Popover.Content>
      <Dropdown.Item href="/profile">Profile</Dropdown.Item>
      <Dropdown.Item href="/my_ticket">My Ticket</Dropdown.Item>
      <Dropdown.Item href="/my_event">My Event</Dropdown.Item>
      <Dropdown.Item href="/payment">Payment</Dropdown.Item>
      <Dropdown.Item href="/add_event">Add Event</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
    </Popover.Content>
  </Popover>
);

function Popovers() {
  return (
    <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
      <Avatar
        style={{
          fontSize: "15px",
          height: "50px",
          width: "50px",
          display: isLogin ? "block" : "none"
        }}
      >
        R
      </Avatar>
    </OverlayTrigger>
  );
}

export default Popovers;
