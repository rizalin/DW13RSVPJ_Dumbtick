import React, { Component } from "react";
import { connect } from "react-redux"
import { getCategory, getEventByCategory } from "../_actions/category"
import { TextField, Grid } from "@material-ui/core"
import { Container } from 'react-bootstrap'
import moment from 'moment'

import Header from "../header/header";
import Footer from "../footer";
import EventList from "../list/eventlist";

class Category extends Component {
  query = new URLSearchParams(window.location.search);
  url = this.query.get("id");

  constructor(props) {
    super(props);
    this.state = {
      date: '',
      filter: false
    };
  }

  componentDidMount() {
    const id = this.url;
    this.props.dispatch(getCategory(id));
    this.props.dispatch(getEventByCategory(id));
  }



  render() {
    const { data } = this.props.category
    const catData = this.props.categories.data
    const date = this.state.date
    let dateFilter = moment(date).format("DD MMM YYYY")
    let filters;
    console.log(this.state.filter)
    if (this.state.filter === false) {
      filters = catData
        .map(event => (
          <EventList
            key={event.id}
            img={event.img}
            title={event.title}
            price={event.price}
            brief={event.briefDesc}
            time={event.startTime}
          />
        ))

    } else {
      filters = catData
        .filter(event => (moment(event.startTime).format("DD MMM YYYY").toString() === dateFilter))
        .map(event => (
          <EventList
            key={event.id}
            img={event.img}
            title={event.title}
            price={event.price}
            brief={event.briefDesc}
            time={event.startTime}
          />
        ))

    }

    return (
      <div className="App">
        <Header />
        <Container>
          <br></br>
          <br></br>
          <h1>{data.name}</h1>
          <br></br>
          <br></br>
          <h2>Sort by:</h2>
          <TextField
            type="date"
            defaultValue={'2020-01-01T10:30'}
            InputLabelProps={{
              shrink: true,
            }}
            value={this.state.date}
            onChange={e => {
              this.setState({
                date: e.target.value,
                filter: true
              });
            }}
          />

          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            spacing={2}
            style={{ marginTop: "20px", marginBottom: "20px" }}
          >
            {filters}
          </Grid>

        </Container>
        <Footer />
      </div>


    );
  }
}




const mapStateToProps = state => {
  return {
    category: state.category,
    categories: state.eventByCat
  };
};

export default connect(mapStateToProps)(Category);
