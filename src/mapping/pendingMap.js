import React, { Component } from "react";
import { getOrder } from "../_actions/order";
import { connect } from "react-redux";
import Payment from "../userContent/payments";

class PendingTicketMap extends Component {

    componentDidMount() {
        const id = localStorage.getItem('id')
        this.props.dispatch(getOrder(id));
    }

    render() {
        const { data, isLoading } = this.props.order;
        console.log(data);
        return (
            <div>
                {isLoading ?
                    <div>PLEASE WAIT...</div>
                    : data
                        .filter(order => (order.status !== "approved"))
                        .map(order => (
                            <Payment
                                key={order.id}
                                id={order.id}
                                name={order.orderedBy.name}
                                price={order.event.price}
                                date={order.event.startTime}
                                address={order.event.address}
                                total={order.totalPrice}
                                item={order.quantity}
                                status={order.status}
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

export default connect(mapStateToProps)(PendingTicketMap);
