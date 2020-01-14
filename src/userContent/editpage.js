import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Header from "../header/header";
import Footer from "../footer";
import EditProfile from "../userContent/editProfile"
import { getToken } from "../_config/bearer";

const isLogin = localStorage.getItem("isLogin")
const token = localStorage.getItem('token')

class EditPage extends Component {

    render() {
        getToken(token)

        if (isLogin === "true") {
            return (
                <div className="App">
                    <Header />
                    <EditProfile />
                    <Footer />
                </div>
            );
        } else {
            window.location = "/"
        }

    }
}

export default EditPage;
