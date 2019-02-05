import React, { Component } from "react";
import CartHeader from "./components/CartHeader";
import CartFooter from "./components/CartFooter";
import CartItems from "./components/CartItems";
import AddItems from "./components/AddItem";

class App extends Component {
  state = {
    cartItemsList: [
      {
        id: 1,
        product: {
          id: 40,
          name: "Mediocre Iron Watch",
          priceInCents: 399
        },
        quantity: 1
      },
      {
        id: 2,
        product: {
          id: 41,
          name: "Heavy Duty Concrete Plate",
          priceInCents: 499
        },
        quantity: 2
      },
      {
        id: 3,
        product: {
          id: 42,
          name: "Intelligent Paper Knife",
          priceInCents: 1999
        },
        quantity: 1
      }
    ],

    product: [
      { id: 40, name: "Mediocre Iron Watch", priceInCents: 399 },
      { id: 41, name: "Heavy Duty Concrete Plate", priceInCents: 499 },
      { id: 42, name: "Intelligent Paper Knife", priceInCents: 1999 },
      { id: 43, name: "Small Aluminum Keyboard", priceInCents: 2500 },
      { id: 44, name: "Practical Copper Plate", priceInCents: 1000 },
      { id: 45, name: "Awesome Bronze Pants", priceInCents: 399 },
      { id: 46, name: "Intelligent Leather Clock", priceInCents: 2999 },
      { id: 47, name: "Ergonomic Bronze Lamp", priceInCents: 40000 },
      { id: 48, name: "Awesome Leather Shoes", priceInCents: 3990 }
    ]
  };

  addItem = newProduct => {
    const { id, quantity } = newProduct;
    const product = this.state.product.find(product => product.id == id);
    this.setState(prevState => {
      console.log(newProduct);
      return {
        cartItemsList: [
          ...prevState.cartItemsList,
          {
            id: 4,
            quantity,
            product
          }
        ]
      };
    });
  };

  render() {
    const total =
      this.state.cartItemsList.reduce((acc, product) => {
        return acc + product.quantity * product.product.priceInCents;
      }, 0) / 100;

    return (
      <div>
        <CartHeader name="here" />
        <CartItems
          cartItemsList={this.state.cartItemsList}
          product={this.state.product}
        />
        <div>Total Price: ${total}</div>

        <AddItems addItem={this.addItem} product={this.state.product} />
        <CartFooter copyright="2016" />
      </div>
    );
  }
}

export default App;
