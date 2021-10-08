import React from "react";
import "./Header.css"
import MenuBar from "../MenuBar/MenuBar";

import "./Header.css";

const Header = () => {
  return (
    <div className="header-container ">

      <div className="">
          
        <div className="row header align-items-center justify-content-center">
        <MenuBar></MenuBar>
          <div className="col-md-12">
            <h1 className="title">
              Coder Master
            </h1>
            <p className="text-white text-center mt-3">
              Be The Master Of Codding.
            </p>
            <button className="mt-3 about-btn">About Us</button>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;