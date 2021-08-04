import React, { Component } from "react";
import Cartitem from "./Cartitem";

class Cart extends Component {
  render() {
    return this.props.cart.map((cartitem) => (
      <Cartitem key={cartitem.id} cartitem={cartitem} />
    ));
  }
}

export default Cart;
