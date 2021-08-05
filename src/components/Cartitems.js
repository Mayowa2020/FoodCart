import React, { Component } from "react";
import { FiMinusSquare } from "react-icons/fi";
import { BsPlusSquare } from "react-icons/bs";
import KingBucket from "./Images/image4.svg";
import RefuelMax1 from "./Images/image3.svg";
import RefuelMax2 from "./Images/image1.svg"
import Scooter from "./Images/scooter 1.svg";

export class Cartitems extends Component {
  render() {
    return (
      <main>
        <h1>Cart</h1>
        <section>
          <div>
            <div>&#10060;</div>
            <div>
              {" "}
              <img src={KingBucket} alt="KFC Bucket filled with Drum Sticks" />
            </div>
            <div>#10,000</div>
            <div>
              <h3>KFC - King Bucket</h3>
              <span>
                <FiMinusSquare /> 2 <BsPlusSquare />
              </span>
              <br />
              <hr />
            </div>

            <div>
              <div>&#10060;</div>
              <div>
                <img src={RefuelMax1} alt="Jollof Rice Chicken and Coke" />
              </div>
              <div>#1,200</div>
              <div>
                <h3>Refuel Max</h3>
                <span>
                  <FiMinusSquare /> 1 <BsPlusSquare />
                </span>
                <br />
                <hr />
              </div>
            </div>

            <div>
              <div>&#10060;</div>
              <div>
                <img
                  src={RefuelMax2}
                  alt="Jollof Rice, Fried Rice, Salad, French Fries, Chicken and Coke"
                />
              </div>
              <div>#1,200</div>
              <div>
                <h3>Refuel Max</h3>
                <span>
                  <FiMinusSquare /> 1 <BsPlusSquare />
                </span>
                <br />
                <hr />
              </div>
            </div>

            <div>
              <div>
                <img src={Scooter} alt="Bike" />
              </div>
              <div>Delivery</div>
              <div>#1,200</div>
            </div>
          </div>
        </section>
        <section>
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
  }
}

export default Cartitems;
