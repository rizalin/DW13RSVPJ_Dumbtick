import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Header from "../header/header";
import Footer from "../footer";
import UserMap from "../mapping/profileMap"
import { getToken } from "../_config/bearer";

const isLogin = localStorage.getItem("isLogin")
const token = localStorage.getItem('token')

class Profile extends Component {

  render() {
    getToken(token)

    if (isLogin === "true") {
      return (
        <div className="App">
          <Header />
          <UserMap />
          <Footer />
        </div>
      );
    } else {
      window.location = "/"
    }

  }
}

export default Profile;
