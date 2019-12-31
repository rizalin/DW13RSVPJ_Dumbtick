import React from "react";
import "./App.css";
import Header from "./header/header";
import Body from "./homeBody";
import Footer from "./footer";

function Home() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default Home;
