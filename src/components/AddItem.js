import React, { Component } from "react";

class AddItems extends Component {
  state = {
    quantity: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSumbit = e => {
    e.preventDefault();
    this.props.addItem(this.state);
  };

  render() {
    const style = {
      padding: "5px",
      marginLeft: "190px",
      marginTop: "170px",
      paddingLeft: "170px",
      //   margin: "auto",
      display: "block"
    };

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            className="my-5 mx-5"
            type="text"
            name="quantity"
            onChange={this.handleChange}
            value={this.state.quantity}
          />

          <select
            className="my-5 mx-5"
            style={style}
            value={this.state.name}
            name="name"
            onChange={this.handleChange}
          >
            <option value="">-- Please Choose --</option>
            <option value="Mediocre Iron Watch">Medicore Iron Watch</option>
            <option value="Heavy Duty Concrete Plate">
              "Heavy Duty Concrete Plate"
            </option>
            <option value="Intelligent Paper Knife">
              Intelligent Paper Knife"
            </option>
            <option value="Small Aluminum Keyboard">
              Small Aluminum Keyboard
            </option>
            <option value="Practical Copper Plate">
              Practical Copper Plate
            </option>
            <option value="Awesome Bronze Pants">Awesome Bronze Pants</option>
            <option value="Intelligent Leather Clock">
              Intelligent Leather Clock
            </option>
            <option value="Ergonomic Bronze Lamp">Ergonomic Bronze Lamp</option>
            <option value="Awesome Leather Shoes">Awesome Leather Shoes</option>
          </select>

          <button className="ml-5 mt-5 pr-5 text-justify">Submit</button>
        </form>
      </div>
    );
  }
}
export default AddItems;
