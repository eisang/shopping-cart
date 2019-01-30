import React, { Component } from "react";
import CartItem from "./CartItem";

const CartItems = props => {
  //   console.log("CartItems ", props);

  const cartList = props.cartItemsList.map(item => (
    <CartItem key={props.cartItemsList.id} item={item} />
  ));

  return (
    <div className="container">
      <h2 className="mb-4 text-justify">Cart Items</h2>
      <div className="list-group">
        <div className="list-group-item mb-5">
          <div className="row  ">
            <div className="col-md-8">Product</div>
            <div className="col-md-2">Price</div>
            <div className="col-md-2">Quantity</div>
          </div>
        </div>
        {cartList}
      </div>
    </div>
  );
};

export default CartItems;
