import React, { Component } from "react";
import { connect } from "react-redux"
import { getCategory } from "../_actions/category"
import Body from "../category/body";

class DetailMap extends Component {
  query = new URLSearchParams(window.location.search);
  url = this.query.get("id");

  componentDidMount() {
    const id = this.url;
    this.props.dispatch(getCategory(id));
  }

  render() {
    const { data } = this.props.categories
    return (
      <div>
        <Body key={data.id} name={data.name} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.category
  };
};

export default connect(mapStateToProps)(DetailMap);
