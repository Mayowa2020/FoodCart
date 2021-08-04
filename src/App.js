import React, { Component } from "react";
import Cart from "./components/Cart";
import "./index.css";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search"

class App extends Component {
  state = {
    cart: [
      {
        id: 1,
        img: "./images/image4.svg",
        name: "KFC-King Bucket",
        unitprice: "#10,000",
        quantity: 2,
      },

      {
        id: 2,
        img: "./images/image3.svg",
        name: "Refuel Max",
        unitprice: "#1,200",
        quantity: 1,
      },

      {
        id: 3,
        img: "./images/image1.svg",
        name: "Refuel Max",
        unitprice: "#1,200",
        quantity: 1,
      },

      {
        id: 4,
        img: "./images/scooter1.svg",
        deliveryFee: "#",
      },
    ],
  };
  render() {
    return (
      <div className="App">
        <Header />
        <Cart cart={this.state.cart} />
        <Search />
      </div>
    );
  }
}

export default App;
