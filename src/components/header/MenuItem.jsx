import { Link } from "react-router-dom";

import React from "react";

function MenuItem(props) {
  return (
    <>
      <div className="hover:text-green-300 hover:bg-gray-500 p-1 hover:rounded-md">
        <Link to={props.url}>{props.linkName}</Link>
      </div>
    </>
  );
}

export default MenuItem;
