import React, { Component } from "react";
import FoodImage from "./Images/fast-food.svg";
import Drinks from "./Images/Drinks-Cocktails.svg";
import Fruits from "./Images/Vegetables-Drinks.svg";
import Restaurant from "./Images/restaurant.svg";

export class Search extends Component {
  render(props) {
    return (
      <section>
        <div className="home">
          <h1>FoodBag</h1>
          <p>Anything food, we have you covered.</p>
        </div>
        <div>
          <h2>Where are you?</h2>
          <select name="" id="">
            <option value="">Bodija Market</option>
          </select>
        </div>
        <div>
          <h2>Pick an interest</h2>
          <div className="interest">
            <div className="col">
              <img src={FoodImage} alt="Fast Food" />
              <h3>fastfood</h3>
              <p>All sorrows are less with bread</p>
            </div>
            <div className="col">
              <img src={Fruits} alt="Fruits and Vegeatables" />
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
