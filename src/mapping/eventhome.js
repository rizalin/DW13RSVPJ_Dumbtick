import React, { Component } from "react";
import axios from "axios";
import { Grid } from "@material-ui/core";
import EventList from "../list/eventlist";

class EventMap extends Component {
  state = {
    eventList: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/v1/events")
      .then(res => {
        this.setState({ eventList: res.data });
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        spacing={2}
        style={{ marginTop: "20px", marginBottom: "20px" }}
      >
        {this.state.eventList.map(event => (
          <EventList
            id={event.id}
            img={event.img}
            title={event.title}
            price={event.price}
            brief={event.briefDesc}
            time={event.startTime}
          />
        ))}
      </Grid>
    );
  }
}

export default EventMap;
