import React from "react";
import MenuList from "./MenuList";
import logo from "../../assets/s-logo.png";

function Header() {
  return (
    <div>
      <div className="flex items-center justify-between  border-gray-400 border-2 shadow-md shadow-gray-200">
        <div className="flex items-center">
          <img className="w-14" src={logo} alt="Comapany Logo SM TECH HUB" />
          <h1 className=" text-yellow-200 text-3xl font-bold tracking-wide font-mono">
            SM-Tech-Hub
          </h1>
        </div>

        <div>
          <MenuList />
        </div>
      </div>
    </div>
  );
}

export default Header;
