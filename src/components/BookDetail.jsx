import axios from "axios";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { BAG_CONTEXT } from "../contextAPI/BagProvider";
import Loaders from "./Loaders";

const BookDetail = () => {
  const [book, setBook] = useState({});
  const [loader, setLoader] = useState(true); // State to handle Loader during fetching API data
  const { id } = useParams(); // Getting the ID from URL

  useEffect(() => {
    axios.get(`https://example-data.draftbit.com/books/${id}`).then((res) => {
      setBook(res.data);
      setLoader(false);
    });
  }, [id]);

  // Handling Button UI depending on the state
  const { favorites, addToFavorites, deleteFromFavorites } =
    useContext(BAG_CONTEXT); // Getting state data from contextAPI
  console.log(favorites);

  const checkFavorites = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    console.log(boolean);
    return boolean;
  };

  return (
    <div className="container mx-auto py-20 px-4">
      {loader ? (
        // UI Loaders until getting API response
        <Loaders />
      ) : (
        <div className="flex justify-between items-center flex-col lg:flex-row gap-14">
          <div className="w-2/4 lg:w-1/4 shadow-2xl">
            <img className="w-4/5 lg:w-full" src={book?.image_url} alt="" />
          </div>
          <div className="flex-1 px-4 py-8">
            <h2 className="text-4xl lg:text-5xl text-gray-400 font-light border-b pb-4 mb-8">
              {book?.title}
            </h2>
            <p className="text-sm lg:text-lg text-gray-400 font-light">
              {book?.description}
            </p>
            <p className="text-xl lg:text-xl text-gray-400 font-medium mt-5 mb-2">
              Authors: {book?.authors}
            </p>
            {book?.edition ? (
              <p className="text-sm lg:text-lg text-gray-400 font-light">
                Edition: {book?.edition}
              </p>
            ) : (
              <p className="text-sm lg:text-lg text-gray-400 font-light">
                Edition: Unknown
              </p>
            )}
            <p className="text-sm lg:text-lg text-gray-400 font- my-2">
              Genres: {book?.genres}
            </p>
            <p className="text-sm lg:text-lg text-gray-400 font-light">
              Rating: {book?.rating}
            </p>
            {/* toggleBTN depending on the state */}
            <div className="mt-8">
              {checkFavorites(book.id) ? (
                <button
                  onClick={() => deleteFromFavorites(book.id)}
                  className="button"
                >
                  Delete Item
                </button>
              ) : (
                <button className="button" onClick={() => addToFavorites(book)}>
                  Add Item
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetail;
