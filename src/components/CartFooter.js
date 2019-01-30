import React, { Component } from "react";

const CartFooter = props => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark mt-5">
        <a className="navbar-brand" href="#">
          &copy; {props.copyright}
        </a>
      </nav>
    </div>
  );
};

export default CartFooter;
