import React, { Component } from "react";
import SelectedOptions from "./SelectedOptions";

class AddItem extends Component {
  state = {
    quantity: 1,
    selectedItem: this.props.products
  };

  handleQuantityChange = e => {
    this.setState({
      quantity: parseInt(e.target.value)
    });
  };

  handleSelection = e => {
    console.log(e.target.value);
    this.setState({
      selectedItem: e.target.value
    });
  };

  // handleChange = e => {
  //   const { name, value } = e.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  handleSubmit = e => {
    e.preventDefault();
    const newProducts = {
      id: this.state.selectedItem,
      quantity: this.state.quantity
    };
    this.props.addItem(newProducts);
    //  this.props.addItem(this.handleQuantityChange, this.handleSelection);
  };

  render() {
    const style = {
      padding: "5px",
      marginLeft: "190px",
      marginTop: "170px",
      paddingLeft: "170px",
      display: "block"
    };

    const selections =
      this.props.product.length > 0
        ? this.props.product.map(product => {
            return <SelectedOptions key={product.id} product={product} />;
          })
        : null;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label style={{ paddingLeft: "10px" }}>Quantity</label>

          <input
            className="my-5 mx-5"
            type="number"
            name="quantity"
            onChange={this.handleQuantityChange}
            // onChange={this.handleChange}
            value={this.state.quantity}
          />
          {/* <label>products</label> */}
          <select
            className="my-5 mx-5"
            style={style}
            value={this.state.selectedItem}
            name="selectedItem"
            onChange={this.handleSelection}
            // onChange={this.handleChange}
          >
            {selections}
          </select>

          <button className="ml-5 mt-5 pr-5 text-justify">Submit</button>
        </form>
      </div>
    );
  }
}
export default AddItem;
