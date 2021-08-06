import React from "react";
import { NavLink } from "react-router-dom";
import { FiMinusSquare } from "react-icons/fi";
import { BsPlusSquare } from "react-icons/bs";
import KingBucket from "./Images/image4.svg";
import RefuelMax1 from "./Images/image3.svg";
import RefuelMax2 from "./Images/image1.svg";
import Scooter from "./Images/scooter 1.svg";


const Cartitems = (props) => {

  return (
    <main>
      <nav>
        <ul>
          <li>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/cart">Cart</NavLink>
          </li>
        </ul>
      </nav>
      <h2>Cart</h2>
      <section className="products">
        <div className="description">
          <div className="column">
            <article className="list">
              <div>&#10060;</div>
              <img src={KingBucket} alt="KFC Bucket filled with Drum Sticks" />
              <div>
                <h4>KFC - King Bucket</h4>
                <span>
                  <FiMinusSquare /> 2 <BsPlusSquare />
                </span>
              </div>
            </article>
            <div className="price">#10,000</div>
          </div>
          <div>
            <br />
            <hr />
          </div>

          <div className="column">
            <article className="list">
              <div>&#10060;</div>
              <img src={RefuelMax1} alt="Jollof Rice Chicken and Coke" />
              <div>
                <h4>RefuelMax</h4>
                <span>
                  <FiMinusSquare /> 1 <BsPlusSquare />
                </span>
              </div>
            </article>
            <div className="price">#1,200</div>
          </div>
          <div>
            <br />
            <hr />
          </div>

          <div className="column">
            <article className="list">
              <div>&#10060;</div>
              <img
                src={RefuelMax2}
                alt="Jollof Rice, Fried Rice, Salad, French Fries, Chicken and Coke"
              />
              <div>
                <h4>Refuel Max</h4>
                <span>
                  <FiMinusSquare /> 1 <BsPlusSquare />
                </span>
              </div>
            </article>
            <div className="price">#1,200</div>
          </div>
          <div>
            <br />
            <hr />
          </div>

          <div className="column">
            <article className="list">
              <img src={Scooter} alt="Bike" />

              <div>
                <h4>Delivery</h4>
              </div>
            </article>
            <div className="price">#1,200</div>
          </div>
        </div>
      </section>

      <section class="total">
        <div>
          <div>
            <h2>Total</h2>
          </div>
          <div>{}</div>
        </div>
        <div>
          <button onclick="myFunction()">Checkout</button>
        </div>
      </section>
    </main>
  );
};

export default Cartitems;
