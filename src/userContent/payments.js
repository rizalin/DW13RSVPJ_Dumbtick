import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import moment from "moment"
import { connect } from "react-redux"
import axios from 'axios'

import "../App.css";
import QR from "../img/opera_JN4LpDssIv.png";
import Prove from "../img/opera_2bMnptgwbr.png";
import { getToken } from "../_config/bearer";



const login = localStorage.getItem("isLogin")
const token = localStorage.getItem('token')

class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Pending',
            classNm: 'pen-Button',
            status: this.props.status,
            id: this.props.id,

        };
    }


    handleStatus = () => {
        const orderID = this.state.id
        const order = { status: 'confirmed' }
        axios.patch('https://dumbtick.herokuapp.com/api/v1/order/' + orderID, order)
            .then(res => res.data);
        alert('Pembayaran berhasil dikonfirmasi')
    }

    render() {
        const startTime = new Date(this.props.date);
        const start = moment(startTime).format("ddd. DD MMM YYYY HH:mm")
        const { data } = this.props.order
        console.log(data)
        getToken(token)

        let statusButton;
        if (this.state.status === "pending") {
            statusButton = <a onClick={this.handleStatus} href="/payment" ><div className="pen-Button">Pending</div></a>
        } else {
            statusButton = <a onClick={() => alert("Silahkan tunggu order ini diproses")} href="" ><div className="payButton">Confirmed</div></a>
        }


        if (login == "true") {
            return (
                <div className="paymentBox" id={`${this.props.id}`}>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="ticket">
                        <div className="ticket-header justify-content-between">
                            <div>
                                <h1>{this.props.name}</h1>
                                <p>Order ID : {this.props.id}</p>
                            </div>
                            <p>Face Value Rp{this.props.price}</p>
                        </div>
                        <div className="ticket-body justify-content-between">
                            <div style={{ width: "70%" }}>
                                <h1>{this.props.title}</h1>
                                <h2>{start}</h2>
                                <p>{this.props.address}</p>
                            </div>
                            <div style={{ width: "fitContent", paddingTop: "8px" }}>
                                <img src={QR} />
                            </div>
                        </div>
                    </div>
                    <div className="payment">
                        <br></br>
                        <h2>Shopping Summary</h2>
                        <div
                            className="justify-content-between"
                            style={{ display: "flex" }}
                        >
                            {" "}
                            <p>Total Price ({this.props.item} item)</p>
                            <p>Rp. {this.props.total}</p>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="payment">
                        <h2>Prove of Payment</h2>
                        <div
                            className="justify-content-between"
                            style={{ display: "flex" }}
                        >
                            <img
                                src={Prove}
                                style={{ marginLeft: "20px", marginTop: "20px" }}
                            />
                            {statusButton}
                        </div>
                    </div>

                    <br></br>
                    <br></br>
                </div>

            );
        }

    }
}

const mapStateToProps = state => {
    return {
        order: state.order
    };
};

export default connect(mapStateToProps)(Payment);
