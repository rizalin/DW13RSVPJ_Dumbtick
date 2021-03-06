import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./home";
import Category from "./category/category";
import EventDetail from "./detail/event";
import Profile from "./userContent/profile";
import MyEvent from "./userContent/myEvent";
import MyTicket from "./userContent/myTicket";
import Payment from "./userContent/payment";
import AddEvent from "./userContent/addEvent";
import EditPage from "./userContent/editpage";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/category" component={Category} />
            <Route path="/event" component={EventDetail} />
            <Route path="/profile" component={Profile} />
            <Route path="/my_event" component={MyEvent} />
            <Route path="/my_ticket" component={MyTicket} />
            <Route path="/payment" component={Payment} />
            <Route path="/add_event" component={AddEvent} />
            <Route path="/editProfile" component={EditPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
