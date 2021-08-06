import React, { Component } from "react";
import FoodImage from "./Images/fast-food.svg";
import Drinks from "./Images/Drinks-Cocktails.svg";
import Fruits from "./Images/Vegetables-Drinks.svg";
import Restaurant from "./Images/restaurant.svg";

export class Search extends Component {
  render() {
    return (
      <section>
        <div className="home">
          <p className="intro">FoodBag</p>
          <p className="pitch">Anything food, we have you covered.</p>
        </div>
        <div>
          <h3>Where are you?</h3>
          <select name="" id="">
            <option value="">Bodija Market</option>
          </select>
        </div>
        <div>
          <h3>Pick an interest</h3>
          <div className="interest">
            <div className="col">
              <img src={FoodImage} alt="Fast Food" />
              <h3>Fast food</h3>
              <p>All sorrows are less with bread</p>
            </div>
            <div className="col">
              <img src={Fruits} alt="Fruits and Vegetables" />
              <h3>Vegetables &#38; Fruits</h3>
              <p>May not want it, but good for you.</p>
            </div>
            <div className="col">
              <img src={Drinks} alt="Drinks" />
              <h3>Drinks &#38; Cocktails</h3>
              <p>I feel sad for those who don't drink.</p>
            </div>
            <div className="col">
              <img src={Restaurant} alt="Restaurant" />
              <h3>Restaurants</h3>
              <p>All sorrows are less with bread.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Search;
