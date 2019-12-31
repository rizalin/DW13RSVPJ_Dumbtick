import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Row } from "reactstrap";
import "../App.css";

export default class CatButton extends Component {
  state = {
    navCat: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/v1/categories")
      .then(res => {
        this.setState({ navCat: res.data });
        console.log(res.data);
      })
      .catch(err => console.log(err));
    console.log(this.state.navCat);
  }

  render() {
    return (
      <div>
        <Row
          className="justify-content-between"
          style={{ marginRight: "0px", marginLeft: "0px" }}
        >
          {this.state.navCat.map(category => (
            <div className="catbox">
              <a href={`/category/?id=${category.id}`} key={category.id}>
                <p>{category.name}</p>
              </a>
            </div>
          ))}
        </Row>
      </div>
    );
  }
}
