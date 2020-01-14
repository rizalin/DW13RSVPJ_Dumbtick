import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { Row } from "reactstrap";
import "../App.css";
import { getCategories } from "../_actions/category";

class CatButton extends Component {
  componentDidMount() {
    this.props.dispatch(getCategories());
  }

  loading = () => {
    return (
      <h1>PLEASE WAIT A MOMENT</h1>
    )
  }

  render() {
    const { data, isLoading } = this.props.categories;
    return (
      <div>
        <Row
          className="justify-content-between"
          style={{ marginRight: "0px", marginLeft: "0px" }}
        >
          {this.loading && isLoading ?
            <div>PLEASE WAIT...</div>
            :
            data.map(category => (
              <div className="catbox">
                <a href={`/category/?id=${category.id}`} >
                  <p>{category.name}</p>
                </a>
              </div>
            ))
          }
        </Row>
      </div>
    );
  }
}



const mapStateToProps = state => {
  return {
    categories: state.category
  };
};

export default connect(mapStateToProps)(CatButton);
