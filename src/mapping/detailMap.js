import React, { Component } from "react";
import { connect } from "react-redux"
import { getEvent } from "../_actions/event"
import axios from "axios";
import Detail from "../detail/details";

class DetailMap extends Component {
  query = new URLSearchParams(window.location.search);
  url = this.query.get("id");
  state = {
    event: []
  };

  componentDidMount() {
    const id = this.url;
    this.props.dispatch(getEvent(id))
  }


  render() {
    const { data } = this.props.event
    const { category,createdBy } = this.props.cat
    console.log(data)
    return (
      <div>
        {data&& category&& <Detail
          key={data.id}
          id={data.id}
          img={data.img}
          title={data.title}
          category={category.name}
          name={createdBy.name}
          phone={createdBy.phoneNumber}
          email={createdBy.email}
          price={data.price}
          desc={data.description}
          time={data.startTime}
          address={data.address}
          desc={data.description}
          address={data.address}
          startTime={data.startTime}
          endTime={data.endTime}
          map={data.urlMaps}
        /> }
       
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    event: state.event,
    cat:state.event.data
  };
};

export default connect(mapStateToProps)(DetailMap);