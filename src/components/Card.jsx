import React from "react";

function Card(props) {
  return (
    <div>
      <div className="mt-5  mb-4">
        <div className="bg-slate-50 w-96 h-52 p-2 shadow-md shadow-red-400 hover:shadow-yellow-400">
          <h1 className="font-bold">{props.name}</h1>
          <br />
          <h1>{props.description}</h1>
          <br />
          <h1 className="font-extrabold text-blue-700 ">Rs.{props.price}/-</h1>
        </div>
      </div>
    </div>
  );
}

export default Card;
