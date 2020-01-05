import React from "react";
import Header from "../header/header";
import Footer from "../footer";
import DetailMap from "../mapping/categorymap";

function Category() {
  return (
    <div className="App">
      <Header />
      <DetailMap />
      <Footer />
    </div>
  );
}

export default Category;
