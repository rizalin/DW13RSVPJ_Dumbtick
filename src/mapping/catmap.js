import React, { Component } from "react";
import { getEventByCategory } from "../_actions/category";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import EventList from "../list/eventlist";

class CatMap extends Component {
  query = new URLSearchParams(window.location.search);
  url = this.query.get("id");

  componentDidMount() {
    const id = this.url;
    this.props.dispatch(getEventByCategory(id));
  }

  render() {
    const { data, isLoading } = this.props.categories;
    console.log(data);
    return (
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        spacing={2}
        style={{ marginTop: "20px", marginBottom: "20px" }}
      >
        {data.map(event => (
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

const mapStateToProps = state => {
  return {
    categories: state.eventByCat
  };
};

export default connect(mapStateToProps)(CatMap);
