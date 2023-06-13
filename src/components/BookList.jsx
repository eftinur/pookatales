import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { BAG_CONTEXT } from "../contextAPI/BagProvider";

const BookList = () => {
  const [data, setData] = useState([]);

  // GEtting data from API
  const API_URL = "https://example-data.draftbit.com/books?_limit=25"; // API URL
  useEffect(() => {
    axios.get(API_URL).then((res) => {
      setData(res.data);
    });
  }, []);

  // Handling Button UI depending on the state
  const { favorites, addToFavorites, deleteFromFavorites } = useContext(BAG_CONTEXT); // Getting state data from contextAPI
  console.log(favorites);

  const checkFavorites = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    console.log(boolean);
    return boolean;
  };

  return (
    <div className="container mx-auto px-4 my-20">
      <h5 className="text-xl text-gray-300 font-medium text-center uppercase tracking-[1rem] mb-12">
        Best Sellers
      </h5>
      <div className="w-full grid grid-cols-5 gap-x-4">
        {data.map((book, index) => (
          // Mapping items to render in the UI
          <div className="book_wrapper shadow-xl rounded-xl" key={index}>
            <div className="book_poster rounded-md">
              <img src={book?.image_url} alt="poster" />
            </div>
            {/* toggleBTN depending on the state */}
            <div className="mt-8 text-gray-400 capitalize flex justify-center">
              {checkFavorites(book.id) ? (
                <button className="px-6 py-4" onClick={() => deleteFromFavorites(book.id)}>
                  Btn Delete
                </button>
              ) : (
                <button className="px-6 py-4" onClick={() => addToFavorites(book)}>
                  Btn Add
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
