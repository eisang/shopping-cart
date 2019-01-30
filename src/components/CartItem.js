import React, { Component } from "react";

const CartItem = props => {
  return (
    <div>
      <div class="row">
        <div class="col-md-8">{props.item.product.name}</div>
        <div class="col-md-2">{props.item.product.priceInCents}</div>
        <div class="col-md-2">{props.item.quantity}</div>
      </div>
    </div>
  );
};

export default CartItem;
