import React, { Component } from "react";
import axios from "axios";
import { Grid } from "@material-ui/core";
import EventList from "../list/eventlist";

class CatMap extends Component {
  query = new URLSearchParams(window.location.search);
  url = this.query.get("id");
  state = {
    event: []
  };

  componentDidMount() {
    const id = this.url;
    axios
      .get("http://localhost:5000/api/v1/event/" + id)
      .then(res => {
        this.setState({ event: res.data });
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <EventList
          key={event.id}
          img={event.img}
          title={event.title}
          price={event.price}
          brief={event.briefDesc}
          time={event.startTime}
        />
      </div>
    );
  }
}

export default CatMap;
