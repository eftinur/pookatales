import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loaders from "./Loaders";

const Shop = () => {
  const [books, setBooks] = useState([]);
  const [loader, setLoader] = useState(true); // State to handle Loader during fetching API data
  const navigate = useNavigate();

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
    <div className="container mx-auto px-4">
      <div className="w-3/4 mx-auto py-12">
        <h5 className="text-4xl lg:text-[8rem] text-gray-400 font-light text-center leading-[48px] lg:leading-[128px] uppercase">
          Get your copy ASAP!
        </h5>
      </div>
      {loader ? (
        // UI Loaders until getting API response
        <Loaders />
      ) : (
        <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
          {books.map((book, index) => (
            // Mapping items to render in the UI
            <div
              onClick={() => navigate(`/books/${book.id}`)}
              className="book_wrapper shadow-xl rounded-xl"
              key={index}
            >
              <div className="book_poster rounded-md">
                <img src={book?.image_url} alt="poster" />
              </div>
              <div className="mt-8 font-medium text-gray-400 text-center">
                <h5>{book?.title}</h5>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;
