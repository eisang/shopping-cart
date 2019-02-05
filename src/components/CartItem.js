import React, { Component } from "react";

export default class CartItem extends Component {
  render() {
    const { quantity } = this.props.product;
    return (
      <div>
        <div className="row">
          <div className="col-md-8">{this.props.product.product.name}</div>
          <div className="col-md-2">
            {" "}
            {parseInt(this.props.product.product.priceInCents) / 100}{" "}
          </div>
          <div className="col-md-2">{quantity}</div>
        </div>
      </div>
    );
  }
}
