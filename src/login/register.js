import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Modal,
  Backdrop,
  TextField,
  IconButton
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "reactstrap";
import axios from "axios";
import "../App.css";

const isLogin = localStorage.getItem("isLogin");

const useStyles = theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "none",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 1, 1),
    textAlign: "center",
    flexDirection: "row",
    display: "flex"
  },
  isiContent: {
    width: "600px",
    marginTop: "5px"
    // padding: "0px 50px"
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 200,
      display: "block",
      textAlign: "center"
    }
  }
});

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      open: false
    };
  }

  // handleChange = event => {
  //   const input = event.target;
  //   const value = input.value;

  //   this.setState({ [input]: value });
  // };

  handleRegister = () => {
    axios
      .post("https://dumbtick.herokuapp.com/api/v1/register", {
        username: this.state.username,
        name: this.state.name,
        password: this.state.password,
        email: this.state.email
      })
      .then(res => {
        console.log(res.data.token);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("id", res.data.id)
        localStorage.setItem("isLogin", true);
        window.location = "/";
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button
          onClick={this.handleOpen}
          style={{ display: isLogin ? "none" : "block" }}
          variant="primary"
        >
          Register
        </Button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={this.state.open}
          closeAfterTransition
          BackdropComponent={Backdrop}
          onclose={this.handleClose}
          BackdropProps={{
            timeout: 500
          }}
        >
          <div className={classes.paper}>
            <div className={classes.isiContent}>
              <IconButton
                onClick={this.handleClose}
                style={{
                  display: "flex",
                  padding: "0px",
                  marginLeft: "auto",
                  marginRight: "10px"
                }}
              >
                <CloseIcon />
              </IconButton>
              <h1
                id="transition-modal-title"
                style={{ margin: "10px", textAlign: "center" }}
              >
                Register.
              </h1>
              <div className={classes.root}>
                <TextField
                  id="standard-basic"
                  label="Name"
                  value={this.state.name}
                  onChange={e => {
                    this.setState({
                      email: e.target.value
                    });
                  }}
                />
                <TextField
                  id="standard-basic"
                  label="Email"
                  value={this.state.email}
                  onChange={e => {
                    this.setState({
                      email: e.target.value
                    });
                  }}
                />
                <TextField
                  id="standard-basic"
                  label="Username"
                  value={this.state.username}
                  onChange={e => {
                    this.setState({
                      username: e.target.value
                    });
                  }}
                />
                <TextField
                  id="standard-password-input"
                  label="Password"
                  className={classes.textField}
                  type="password"
                  autoComplete="current-password"
                  value={this.state.password}
                  onChange={e => {
                    this.setState({
                      password: e.target.value
                    });
                  }}
                />

                <br></br>
                <br></br>
                <button
                  type="submit"
                  variant="dark"
                  onClick={this.handleRegister}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default withStyles(useStyles)(Register);
