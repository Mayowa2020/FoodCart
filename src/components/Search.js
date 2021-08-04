import React, { Component } from "react";

export class Search extends Component {
  render(props) {
    return (
      <section>
        <div>
          <h1>FoodBag</h1>
          <p>Anything food, we have you covered.</p>
        </div>
        <div>
          <form action="/action_page.php">
            <label for="location">Where are you?:</label> <br />
            <input type="text" id="location" name="location" />
          </form>
        </div>
        <div>
          <p>Pick an interest</p>
          <div classname="interest">
            <div className="col">
              <img src="./Images/fast-food.png" alt="Junk Food" />
              <h3>fastfood</h3>
              <p>All sorrows are less with bread</p>
            </div>
            <div className="col">
              <img
                src="./Images/FruitsVegetables.png"
                alt="Fruits and Vegeatables"
              />
              <h3>Vegetables &#38; Fruits</h3>
              <p>May not want it, but good for you.</p>
            </div>
            <div className="col">
              <img src="./Images/DrinksCocktails.png" alt="Drinks" />
              <h3>Drinks &#38; Cocktails</h3>
              <p>I feel sad for those who don't drink.</p>
            </div>
            <div className="col">
              <img src="./Images/restaurant.png" alt="Restaurant" />
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
