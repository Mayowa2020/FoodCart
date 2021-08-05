import React, { Component } from "react";
import "./index.css";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
