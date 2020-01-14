import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import { Popover, OverlayTrigger, Dropdown, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { connect } from "react-redux"
import { getUser } from "../_actions/user"
import { getToken } from "../_config/bearer"

function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("name");
  localStorage.removeItem("isLogin");
  window.location = "/";
}

const isLogin = localStorage.getItem("isLogin");
const token = localStorage.getItem("token")

const popover = (
  <Popover id="popover-basic">
    <Popover.Content>
      <Dropdown.Item><Link to="/profile">Profile</Link> </Dropdown.Item>
      <Dropdown.Item><Link to="/my_ticket">My Ticket</Link></Dropdown.Item>
      <Dropdown.Item><Link to="/my_event">My Event</Link></Dropdown.Item>
      <Dropdown.Item><Link to="/payment"> Payment</Link></Dropdown.Item>
      <Dropdown.Item><Link to="/add_event">Add Event</Link></Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
    </Popover.Content>
  </Popover>
);

class Popovers extends Component {
  componentDidMount() {
    const id = localStorage.getItem("id")
    this.props.dispatch(getUser(id))
  }

  render() {
    getToken(token)
    const { data } = this.props.user
    return (
      <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
        <div className="profileDropdown">
          <h2 >{data.username}</h2>
          <Avatar src={`${data.img}`}
            style={{
              height: "50px",
              width: "50px",
              display: isLogin ? "block" : "none"
            }} />
        </div>
      </OverlayTrigger>
    );
  }
}



const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Popovers);
