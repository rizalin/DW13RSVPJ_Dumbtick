import React, { Component } from "react";
import { connect } from "react-redux"
import { Grid } from "@material-ui/core";

import EventList from "../list/eventlist";
import { nextEvent } from "../_actions/event"
import moment from "moment";

const dateNow = new Date();

class UpcomingEvent extends Component {

    componentDidMount() {
        this.props.dispatch(nextEvent())
    }

    render() {
        const { data, isLoading } = this.props.event;
        const today = new Date(dateNow)
        const DateNow = moment(today).format("DD MMM YYYY")
        console.log(DateNow)
        const date = moment(data.startTime).format("DD MMM YYYY")
        console.log(date)

        return (
            <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
                spacing={2}
                style={{ marginTop: "20px", marginBottom: "20px" }}
            >
                {data
                    .filter(event => (moment(event.startTime).format("DD MMM YYYY").toString() != DateNow))
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

export default connect(mapStateToProps)(UpcomingEvent);