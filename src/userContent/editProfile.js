import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Button,
    Row,
    Container,
    Col,
} from "reactstrap";
import "../App.css";
import FavoriteMap from "../mapping/favoriteMap";
import { TextField } from "@material-ui/core";
import { connect } from "react-redux"
import { editUser } from "../_actions/user"

const userId = localStorage.getItem("id")
const login = localStorage.getItem("isLogin")
const token = localStorage.getItem('token')

class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.user.data.name,
            DoB: this.props.user.data.DoB,
            phoneNumber: this.props.user.data.phoneNumber,
            email: this.props.user.data.email,
        };
    }

    handleUpdateUser = () => {
        const user = {
            name: this.state.name,
            DoB: this.state.DoB,
            phoneNumber: this.state.phoneNumber,
            email: this.state.email,
            id: userId
        };
        this.props.editUser(user, userId);
        alert("Profil berhasil diedit")
        window.location = "/profile"
    };

    render() {
        const { data } = this.props.user
        return (
            <div className="App">
                <Container>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h1
                        style={{ textAlign: "left", color: "#FF5555", fontWeight: "700" }}
                    >
                        Profile
          </h1>
                    <Row>
                        <Col sm={6} className="profile">
                            <TextField label={`${data.name}`} value={this.state.name} onChange={e => {
                                this.setState({
                                    name: e.target.value
                                });
                            }} />
                            <TextField
                                label={`${data.DoB}`}
                                type="date"
                                defaultValue={`${this.state.DoB}`}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                value={this.state.DoB} onChange={e => {
                                    this.setState({
                                        DoB: e.target.value
                                    });
                                }}
                            />
                            <TextField label={`${data.phoneNumber}`} value={this.state.phoneNumber} onChange={e => {
                                this.setState({
                                    phoneNumber: e.target.value
                                });
                            }} />
                            <TextField label={`${data.email}`} value={this.state.email} onChange={e => {
                                this.setState({
                                    email: e.target.value
                                });
                            }} />
                        </Col>
                        <Col sm={2}>
                            <Button size="sm" onClick={this.handleUpdateUser}>Save</Button>
                        </Col>
                        <Col sm={4}>
                            <img
                                src={`https://sigmaestimates.com/wp-content/uploads/sites/2/2018/10/person-placeholder-1.png`}
                                width="100%"
                                height="350vh"
                                style={{ borderRadius: '50%' }}
                            />
                        </Col>
                    </Row>
                    <br></br>
                    <br></br>
                    <h1 style={{ textAlign: "left", color: "#FF5555", fontWeight: "700" }}>Favorites</h1>
                    <br></br>
                    <br></br>
                    <FavoriteMap />
                </Container>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        user: state.user
    };
};
const mapDispatchToProps = dispatch => {
    return {
        editUser: (user, id) => dispatch(editUser(user, id))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
