import axios from "axios";
import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";
import Loaders from "./Loaders";

const Shop = () => {
  const [books, setBooks] = useState([]);
  const [loader, setLoader] = useState(true); // State to handle Loader during fetching API data

  // GEtting data from API
  const API_URL = "https://example-data.draftbit.com/books?_limit=30"; // API URL
  useEffect(() => {
    axios.get(API_URL).then((res) => {
      setBooks(res.data);
      setLoader(false);
    });
  }, []);
  console.log(books, loader);
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="w-3/4 mx-auto py-24">
        <h5 className="text-4xl lg:text-8xl font-medium text-center  capitalize">
          Our Book Collections
        </h5>
      </div>
      {loader ? (
        // Wobble Loaders Animation until getting API response
        <Loaders />
      ) : (
        <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
          {books.map((book, index) => (
            // Mapping items to render in the UI
            <BookCard key={index} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;
