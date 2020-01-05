import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";


export default function Pay(props) {
    return (
        <div className="payment">
            <br></br>
            <h2>Shopping Summary</h2>
            <div
                className="justify-content-between"
                style={{ display: "flex" }}
            >
                {" "}
                <p>Total Price ({props.item} item)</p>
                <p>Rp {props.total}</p>
            </div>
        </div>
    )
}

