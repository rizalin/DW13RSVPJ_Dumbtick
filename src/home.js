import React, { Component } from "react";
import {
  Container,
} from "reactstrap";
import { connect } from 'react-redux'

import CatButton from "./list/homelist";
import EventNow from "./mapping/eventnow"
import UpcomingEvent from "./mapping/upcomingEvent";
import Header from "./header/header";
import Footer from "./footer";
import Search from "./mapping/searchMap";

const id = localStorage.getItem("id")


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: "",
      filter: false
    }
  }
  // componentDidMount() {
  //   this.props.dispatch(getFavorites(id))
  // }



  render() {
    return (
      <div className="App">
        <Header />
        <Container>
          <br></br>
          <br></br>
          <Search />
          <br></br>
          <br></br>
          <h1 style={{ textAlign: "left" }}>Category</h1>
          <br></br>
          <CatButton />
          <br></br>
          <br></br>
          <br></br>
          <h1>Today</h1>
          <EventNow />
          <h1>Upcoming Event</h1>
          <UpcomingEvent />
        </Container>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    event: state.event,
    // favorites: state.favorite
  };
};

export default connect(mapStateToProps)(Home);
