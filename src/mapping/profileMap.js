import React, { Component } from "react";
import { connect } from "react-redux"
import Profiles from "../userContent/profiles";

class UserMap extends Component {


  render() {
    const { data } = this.props.user
    console.log(data)
    return (
      <div>
        {<Profiles
          key={data.id}
          name={data.name}
          tel={data.phoneNumber}
          email={data.email}
          img={data.img}
          birth={data.DoB}
        />}

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(UserMap);