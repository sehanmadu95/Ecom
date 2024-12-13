import React from "react";
import MenuItem from "./MenuItem";

function MenuList() {
  return (
    <div className="flex gap-6 text-white text-lg font-bold p-1">
      <MenuItem url="/" linkName="Home" />
      <MenuItem url="/products" linkName="Products" />
      <MenuItem url="/about" linkName="About" />
      <MenuItem url="/contact" linkName="Contact" />
      <MenuItem url="/login" linkName="Login" />
    </div>
  );
}

export default MenuList;
