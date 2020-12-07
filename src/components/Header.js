import React from "react";

const Header = ({ logo, headerImg, data }) => {
  return (
    <header>
      <div className="topbar">
        <div className="container">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="header-content">
        <div className="container">
          <div>
            <h1> {data.restaurant.name}</h1>
            <p> {data.restaurant.description}</p>
          </div>
          <div>
            <img src={headerImg} alt="pain quotidien" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
