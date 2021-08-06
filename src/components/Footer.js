import React from "react";
import Facebook from "./Images/facebook-f 1.svg";
import Youtube from "./Images/youtube 1.svg";
import Twitter from "./Images/twitter 2.svg";

const Footer = (props) => {
  return (
    <footer className="details">
      <section>
        <p>Contact Us</p>
        <div className="socials">
          <span>
            <img src={Facebook} alt="Facebook" />
            <img src={Youtube} alt="Youtube" />
            <img src={Twitter} alt="Twitter" />
          </span>
        </div>
      </section>
      <section className="row terms">
        <div>
          <p>Terms & Conditions. Private Policy</p>
        </div>
        <div>
          <p> &copy;2021 FoodBag is a registered trademark</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
