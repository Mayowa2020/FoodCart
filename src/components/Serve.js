import React from "react";
import Location from "./Images/illustration_1.svg";
import Choice from "./Images/illustration_2.svg";
import Delivery from "./Images/illustration_3.svg";

const Serve = (props) => {
  return (
    <section className="service">
      <h1>How we serve you.</h1>
      <div className="interest">
        <div className="colserve">
          <img src={Location} alt="Man with Globe" />
          <h3>Tell us where you are?</h3>
          <p>Select the location you want us to deliver.</p>
        </div>

        <div className="colserve">
          <img src={Choice} alt="Food" />
          <h3>Tell us what you want?</h3>
          <p>Browse the type that interest you.</p>
        </div>

        <div className="colserve">
          <img src={Delivery} alt="Man on Bike" />
          <h3>We'll come running?</h3>
          <p>Your order will be delivered to you in no time.</p>
        </div>
      </div>
    </section>
  );
};

export default Serve;
