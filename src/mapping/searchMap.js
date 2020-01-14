import React, { Component } from "react";
import {
    FormGroup,
    Input,
    Form,
} from "reactstrap";
import { connect } from 'react-redux'

import { getEvents } from '../_actions/event'
import EventList from "../list/eventlist";
import { TextField, Grid } from "@material-ui/core";

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: "",
            filter: false
        }
    }

    componentDidMount() {
        this.props.dispatch(getEvents())
    }



    render() {
        const { data } = this.props.event
        let filter;
        if (this.state.search == '') {
            filter = <div></div>
        } else {

            filter = <div>
                <h1>Search Result</h1>
                <Grid
                    container
                    direction="row"
                    spacing={2}
                    style={{ marginTop: "20px", marginBottom: "20px" }}
                >
                    {data
                        .filter(event => event.title.toLowerCase().includes(this.state.search))
                        .map(event => (
                            <EventList
                                key={event.id}
                                img={event.img}
                                title={event.title}
                                price={event.price}
                                brief={event.briefDesc}
                                time={event.startTime}
                            />
                        ))
                    }
                </Grid>
            </div>
        }
        console.log(this.state.search)

        return (
            <div>
                <TextField
                    label="Search..."
                    style={{ width: "100%" }}
                    value={this.state.search}
                    onChange={e => {
                        this.setState({
                            search: e.target.value
                        });
                    }}
                />

                {filter}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        event: state.event
    };
};

export default connect(mapStateToProps)(Search);
