import React from "react";

const Header = (props) => {
  return (
    <header className="row block center">
      <div>
          <a href="#/">
              <h2>FoodBag</h2>
          </a>
      </div>
       <div>
           <a href="#/cart">Cart</a>           
            <a href="#/login">Login</a>       
            <a href="#/signup">Signup</a>
        </div>   
    </header>
  );
};

export default Header;
