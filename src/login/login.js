import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Modal,
  Backdrop,
  Fade,
  TextField,
  Typography,
  IconButton
} from "@material-ui/core";
import { Button } from "reactstrap";
import CloseIcon from "@material-ui/icons/Close";
import axios from "axios";

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
    marginTop: "5px",
    marginBottom: "20px"
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

class Login extends Component {
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

  handleLogin = () => {
    axios
      .post("http://localhost:5000/api/v1/login", {
        username: this.state.username,
        name: this.state.name,
        password: this.state.password,
        email: this.state.email
      })
      .then(res => {
        if (res.data.token == null) {
          alert("Wrong Email or Password");
        } else {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("name", res.data.name);
          localStorage.setItem("isLogin", true);
          window.location = "/";
        }
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
          variant="primary"
          style={{ display: isLogin ? "none" : "block" }}
        >
          Login
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
                Login.
              </h1>
              <div className={classes.root}>
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
                <button type="submit" variant="dark" onClick={this.handleLogin}>
                  Login
                </button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default withStyles(useStyles)(Login);
