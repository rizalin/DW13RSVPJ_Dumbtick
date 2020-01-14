import React, { Component } from "react";
import { getOrder } from "../_actions/order";
import { connect } from "react-redux";
import Pay from "../list/payment";

class PendingTotal extends Component {

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
                        .filter(order => (order.status === "pending"))
                        .map(order => (
                            <Pay
                                key={order.id}
                                total={order.totalPrice}
                                item={order.quantity}
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

export default connect(mapStateToProps)(PendingTotal);
