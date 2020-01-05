import React, { Component } from "react";
import { connect } from "react-redux"
import { Grid } from "@material-ui/core";

import EventList from "../list/eventlist";
import { getEvents } from "../_actions/event"

class EventMap extends Component {
  state = {
    eventList: []
  };

  componentDidMount() {
    this.props.dispatch(getEvents())
  }

  render() {
    const { data, isLoading } = this.props.event;
    return (
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        spacing={2}
        style={{ marginTop: "20px", marginBottom: "20px" }}
      >
        {data.map(event => (
          <EventList
            key={event.id}
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

const mapStateToProps = state => {
  return {
    event: state.event
  };
};

export default connect(mapStateToProps)(EventMap);
