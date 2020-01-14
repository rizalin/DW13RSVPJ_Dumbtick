import React from "react";
import Header from "../header/header";
import Footer from "../footer";
import DetailMap from "../mapping/detailMap";

function EventDetail() {
  return (
    <div className="App">
      <Header />
      <DetailMap />
      <Footer />
    </div>
  );
}

export default EventDetail;
