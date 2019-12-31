import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Card } from "reactstrap";
import {
  CardActionArea,
  CardMedia,
  CardContent,
  Grid,
  Chip
} from "@material-ui/core";
import "../App.css";
import moment from "moment";
import { Link } from "react-router-dom";

export default function EventList(props) {
  const dates = new Date(props.time);
  const date = moment(dates).format("DD MMM YYYY");
  return (
    <Card style={{ maxWidth: "350px", marginBottom: "40px" }}>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="200"
        // width="200"
        image={`${props.img}`}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Link to={`/event/?id=${props.id}`} style={{ color: "black" }}>
          <h2 className="card-title">{props.title}</h2>
        </Link>
        <h6>Rp {props.price}</h6>

        <h4 className="card-time">{date}</h4>

        <p className="card-content">{props.brief}</p>
      </CardContent>
    </Card>
  );
}
