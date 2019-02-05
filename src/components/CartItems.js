import React, { Component } from "react";
import CartItem from "./CartItem";

export default class CartItems extends Component {
  render() {
    const cartList =
      this.props.cartItemsList.length > 0
        ? this.props.cartItemsList.map(item => {
            console.log("item", item);
            return <CartItem key={item.id} product={item} />;
          })
        : null;

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
  }
}

// const CartItems = props => {
//   console.log("product", props);

//   const cartList = props.cartItemsList.map(product => (
//     <CartItem key={product.id} product={product} />
//   ));

//   return (
//     <div className="container">
//       <h2 className="mb-4 text-justify">Cart Items</h2>
//       <div className="list-group">
//         <div className="list-group-item mb-5">
//           <div className="row  ">
//             <div className="col-md-8">Product</div>
//             <div className="col-md-2">Price</div>
//             <div className="col-md-2">Quantity</div>
//           </div>
//         </div>
//         {cartList}
//       </div>
//     </div>
//   );
// };

// export default CartItems;
