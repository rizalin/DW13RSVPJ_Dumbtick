import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "reactstrap";
import {
  CardMedia,
  CardContent,
  IconButton,
  Snackbar
} from "@material-ui/core";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import CloseIcon from '@material-ui/icons/Close';
import moment from "moment";
import { Link } from "react-router-dom";
import { connect } from "react-redux"

import "../App.css";
import { addFavorite } from '../_actions/favorite'

const userId = localStorage.getItem("id")
const isLogin = localStorage.getItem("isLogin")

class EventList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };


  handleFavorite = () => {
    if (isLogin == "true") {
      const favorite = {
        event_id: this.props.id,
        following_user: userId,
      };
      this.props.addFavorite(favorite);
      this.setState({ open: true });
    } else {
      alert("Anda belum Login")
    }
  }


  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  };


  render() {
    const dates = new Date(this.props.time);
    const date = moment(dates).format("DD MMM YYYY")
    return (
      <Card style={{ maxWidth: "350px", marginBottom: "40px" }}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          // width="200"
          image={`${this.props.img}`}
          title="Contemplative Reptile"
        />
        <CardContent>
          <div className="title">
            <Link to={`/event/?id=${this.props.id}`} style={{ color: "black" }}>
              <h2 className="card-title">{this.props.title}</h2>
            </Link>
            <IconButton aria-label="min" onClick={this.handleFavorite}>
              <FavoriteBorderIcon />
            </IconButton>
          </div>
          <h6>Rp {this.props.price}</h6>

          <h4 className="card-time">{date}</h4>

          <p className="card-content">{this.props.brief}</p>
        </CardContent>

        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.open}
          autoHideDuration={2000}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',

          }}

          message={<span id="message-id">FAVORITE</span>}
          action={[

            <IconButton
              key="close"
              aria-label="close"
              color="inherit"
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    favorite: state.favorite
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addFavorite: favorite => dispatch(addFavorite(favorite))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EventList);
