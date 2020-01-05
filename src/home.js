import React from "react";
import {
  Button,
  Container,
  FormGroup,
  Input,
  Form,
} from "reactstrap";

import CatButton from "./list/homelist";
import EventNow from "./mapping/eventnow"
import UpcomingEvent from "./mapping/upcomingEvent";
import Header from "./header/header";
import Footer from "./footer";

function Home() {
  return (
    <div className="App">
      <Header />
      <Container>
        <br></br>
        <br></br>
        <Form inline>
          <FormGroup style={{ width: "95%" }}>
            <Input
              name="search"
              id="exampleEmail"
              placeholder="Cari..."
              style={{ width: "100%" }}
            />
          </FormGroup>
          <Button>Cari</Button>
        </Form>
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

export default Home;
