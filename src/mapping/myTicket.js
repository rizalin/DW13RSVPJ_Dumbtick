import React, { Component } from "react";
import { getOrder } from "../_actions/order";
import { connect } from "react-redux";
import { Ticket } from "../list/ticket";

class ConfirmedTicket extends Component {

    componentDidMount() {
        const id = localStorage.getItem('id')
        this.props.dispatch(getOrder(id));
    }

    render() {
        const { data, isLoading } = this.props.order;
        console.log(data);
        return (
            <div>
                {data
                    .filter(order => (order.status == "approved"))
                    .map(order => (
                        <Ticket
                            key={order.id}
                            name={order.orderedBy.name}
                            price={order.event.price}
                            date={order.event.startTime}
                            address={order.event.address}
                        />
                    ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        order: state.order
    };
};

export default connect(mapStateToProps)(ConfirmedTicket);
