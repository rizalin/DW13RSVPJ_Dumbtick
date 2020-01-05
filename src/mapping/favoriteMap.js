import React, { Component } from "react";
import { connect } from "react-redux"
import { Grid } from "@material-ui/core";

import EventList from "../list/eventlist";
import { getFavorites } from "../_actions/favorite"

const id = localStorage.getItem("id")

class FavoriteMap extends Component {
    state = {
        eventList: []
    };

    componentDidMount() {
        this.props.dispatch(getFavorites(id))
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
                {data.map(favorite => (
                    <EventList
                        key={favorite.id}
                        id={favorite.id}
                        img={favorite.event.img}
                        title={favorite.event.title}
                        price={favorite.event.price}
                        brief={favorite.event.briefDesc}
                        time={favorite.event.startTime}
                    />
                ))}
            </Grid>
        );
    }
}

const mapStateToProps = state => {
    return {
        event: state.favorite
    };
};

export default connect(mapStateToProps)(FavoriteMap);
