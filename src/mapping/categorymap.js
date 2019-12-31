import React, { Component } from "react";
import axios from "axios";
import Body from "../category/body";

class DetailMap extends Component {
  query = new URLSearchParams(window.location.search);
  url = this.query.get("id");

  state = {
    category: []
  };

  componentDidMount() {
    const id = this.url;
    axios.get("http://localhost:5000/api/v1/category/" + id).then(res => {
      this.setState({ category: res.data });
      console.log(res.data);
    });
  }

  render() {
    const { category } = this.state;
    return (
      <div>
        <Body key={category.id} name={category.name} />
      </div>
    );
  }
}

export default DetailMap;
