import React, { Component } from "react";
import axios from "axios";
import { Grid } from "@material-ui/core";
import EventList from "../list/eventlist";
import moment from "moment";

const dateNow = new Date();

class EventNow extends Component {
  state = {
    eventList: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/v1/events")
      .then(res => {
        this.setState({ eventList: res.data });
        console.log(res.data);
        console.log(dateNow);
      })
      .catch(err => console.log(err));
  }

  render() {

      const time = this.props.eventList
      const thisDate =  moment(time.startTime).format("DD MMM YYYY")
      console.log(thisDate)
    return (
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        spacing={2}
        style={{ marginTop: "20px", marginBottom: "20px" }}
      >
        {this.state.eventList
          .filter(
            event =>
              moment(event.startTime).format("DD MMM YYYY") ==
              moment(dateNow).format("DD MMM YYYY")
          )
          .map(event => (
            <EventList
              key={event.id}
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

export default EventNow;
