import React, { Component } from "react";

export class Cartitem extends Component {
  render() {
    return <p>{this.props.cartitem.name}</p>;
  }
}

export default Cartitem;
