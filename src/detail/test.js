import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Row, Container, Col } from "reactstrap";
import { IconButton } from "@material-ui/core";
import moment from "moment"
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import EventIcon from "@material-ui/icons/Event";
import ScheduleIcon from "@material-ui/icons/Schedule";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import PhoneIcon from "@material-ui/icons/Phone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import "../App.css";


export default class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num : 1
        };
    }

    buttonInc = () => {
        this.setState({num: this.state.num + 1})
        document.getElementById("num").value = this.state.num;
    }

    buttonDec = () => {
        this.setState({num: this.state.num - 1})
        document.getElementById("num").value = this.state.num;
        if (this.state.num <= 1) {
            this.setState({num: 1})
        } 
    }
 

    render() {
        let times = this.state.num
        console.log(times)
        const cost = this.props.price
        let price = times*cost

        const startTime = new Date(this.props.startTime);
        const endTime = new Date(this.props.endTime)
        const startDate = moment(startTime).format("DD MMM YYYY");
        const endDate = moment(endTime).format("DD MMM YYYY");
        const startTimes = moment(startTime).format("kk:mm");
        const endTimes = moment(endTime).format("kk:mm ")
        return (
            <Container>
                <br></br>
                <br></br>
                <div className="box">
                    <img
                        src={`${this.props.img}`}
                        width="100%"
                        height="700vh"
                        alt="pamflet"
                    />
                    <div className="text-box">
                        <Row className="justify-content-between">
                            <h1>{this.props.title}</h1>
                            <h2>{price}</h2>
                        </Row>
                        <Row className="justify-content-between">
                            <Col style={{ maxWidth: "fitContent" }}>
                                <h4>{this.props.category}</h4>
                            </Col>
                            <Col>
                                <Row>
                                    <IconButton aria-label="min" onClick={this.buttonDec}>
                                        <RemoveIcon />
                                    </IconButton>
                                    <input
                                        id="num"
                                        type="number"
                                        min={1}
                                        value={`${this.state.num}`}
                                        style={{
                                            maxWidth: "20px",
                                            textAlign: "center",
                                            border: "none",
                                            backgroundColor: "#F4E1E1"
                                        }}
                                    />
                                    <IconButton aria-label="add" onClick={this.buttonInc}>
                                        <AddIcon />
                                    </IconButton>
                                    <Button>Buy</Button>{" "}
                                </Row>
                            </Col>
                        </Row>
                        <hr></hr>
                        <Row className="justify-content-between">
                            <Col>
                                <h3>Hosted by</h3>
                                <p>Juni Concert</p>
                            </Col>
                            <Col>
                                <h3>Date & Time</h3>
                                <p>
                                    <EventIcon style={{ marginRight: "10px" }} />
                                    {startDate} - {endDate}
                                </p>
                                <p>
                                    <ScheduleIcon style={{ marginRight: "10px" }} />
                                    {startTimes} - {endTimes}
                                </p>
                            </Col>
                            <Col style={{ padding: "0 30px" }}>
                                <h3>Contact Person</h3>
                                <p>
                                    <ContactMailIcon style={{ marginRight: "10px" }} />
                                    {this.props.name}
                                </p>
                                <p>
                                    <PhoneIcon style={{ marginRight: "10px" }} />
                                    {this.props.phone}
                                </p>
                                <p>
                                    <MailOutlineIcon style={{ marginRight: "10px" }} />
                                    {this.props.email}
                                </p>
                            </Col>
                        </Row>
                    </div>
                </div>
                <br></br>
                <br></br><Row>
                    <Col>
                        <h3>Event Description</h3>
                        <p>
                            {this.props.desc}
                        </p>
                    </Col>
                    <Col>
                        <h3>Location</h3>
                        <p>
                            {this.props.address}
                        </p>
                    </Col>
                </Row>
            </Container>
        )
    }
}