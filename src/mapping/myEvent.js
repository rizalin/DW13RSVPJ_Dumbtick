import React, { Component } from "react";
import { connect } from "react-redux"
import { Grid } from "@material-ui/core";

import EventList from "../list/eventlist";
import { getEvents } from "../_actions/event"

const user = localStorage.getItem("id")

class MyEventMap extends Component {
    state = {
        eventList: []
    };

    componentDidMount() {
        this.props.dispatch(getEvents())
    }

    render() {
        console.log(user)
        const { data, isLoading } = this.props.event;
        return (
            <Grid
                container
                direction="row"
                spacing={2}
                style={{ marginTop: "20px", marginBottom: "20px" }}
            >
                {data
                    .filter(event => (event.create_by == user))
                    .map(event => (
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

export default connect(mapStateToProps)(MyEventMap);
