import axios from "axios";
import { useEffect, useState } from "react";
import BookCard from "./BookCard";
import Loaders from "./Loaders";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loader, setLoader] = useState(true); // State to handle Loader during Fetching API data

  // GEtting data from API
  const API_URL = "https://example-data.draftbit.com/books?_limit=5"; // API URL
  useEffect(() => {
    axios.get(API_URL).then((res) => {
      setBooks(res.data);
      setLoader(false);
    });
  }, []);

  return (
    <div className="container mx-auto px-4 my-20">
      <div className="w-3/4 mx-auto py-12">
        <h5 className="text-4xl lg:text-9xl  font-medium text-center  capitalize">
          Top Sellers this week
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

export default BookList;
