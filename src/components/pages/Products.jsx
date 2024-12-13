import Header from "../header/Header";
import Card from "../Card";
import React, { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoRefreshCircleSharp } from "react-icons/io5";
import axios from "axios";

function Products() {
  const [products, setProducts] = useState([]); // State to store products data
  const [error, setError] = useState(null); // State to store error, if any

  const [searchId, setSearchId] = useState(""); // to store the search ID
  const [searchProducts, setSearchProducts] = useState([]); // to store the products array
  const [errorSch, setErrorSch] = useState(null); // to handle errors

  const [prdFlag, setPrdFlag] = useState(true);
  const [searchFlag, setSearchFlag] = useState(false);

  // Handle input change
  const handleInputChange = (event) => {
    setSearchId(event.target.value);
  };

  // Handle button click
  const refresh = async () => {
    setSearchId("");
    setSearchFlag(false);
    setSearchProducts([]);
    setPrdFlag(true);
  };

  // Handle button click
  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/getById/${searchId}`
      );

      // Assume the response is a single product object; convert it to an array for consistency
      setSearchProducts([response.data]); // Wrap single product in array if only one result is returned

      if (searchProducts.length > 0) {
        setPrdFlag(false);
        setSearchFlag(true);
      }

      setError(null); // Clear any previous error
    } catch (err) {
      console.error("Error fetching data:", err);
      setErrorSch("Product not found or an error occurred.");
      setSearchProducts([]); // Clear the products if there's an error
    }
  };

  useEffect(() => {
    // Fetch data from the API
    fetch("http://localhost:8080/api/v1/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json(); // Parse JSON response
      })
      .then((data) => setProducts(data)) // Set the products data
      .catch((error) => setError(error)); // Handle any errors
  }, []); // Empty dependency array means this effect runs once on mount
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="m-5">
      <Header />

      <div className="flex gap-3 mt-3 items-center justify-end">
        <FaSearch className="fill-white" />
        <input
          type="text"
          className="rounded-lg hover:border-red-700 hover:border-2"
          value={searchId}
          onChange={handleInputChange}
          placeholder=" Enter ID"
        />
        <button
          className="text-black font-bold tracking-widest bg-gray-200 p-1 rounded-lg hover:text-green-500"
          onClick={handleSearch}
        >
          Search
        </button>

        <button onClick={refresh}>
          {" "}
          <IoRefreshCircleSharp className="fill-white" />
        </button>
      </div>

      <div className="flex gap-3 grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
        {prdFlag && products.length > 0
          ? products.map((product) => (
              <Card
                key={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
              />
            ))
          : error && <div className="error text-red-500">{error}</div>}

        {searchFlag && searchProducts.length > 0
          ? searchProducts.map((product) => (
              <Card
                key={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
              />
            ))
          : errorSch && <div className="error text-red-500">{errorSch}</div>}
      </div>
    </div>
  );
}

export default Products;
