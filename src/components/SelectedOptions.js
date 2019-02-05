import React, { Component } from "react";

export default class SelectedOptions extends Component {
  render() {
    const { product } = this.props;
    return (
      <option value={product.id}>
        {product.name} ---> ${product.priceInCents.toFixed(2) / 100}
      </option>
    );
  }
}
