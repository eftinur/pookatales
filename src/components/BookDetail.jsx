import axios from "axios";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { BAG_CONTEXT } from "../contextAPI/BagProvider";

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
    <div className="container h-[80vh] mx-auto py-12 px-4">
      {loader ? (
        <h5>BAZINGA</h5>
      ) : (
        <div className="flex justify-between items-center gap-14">
          <div className="w-1/4 shadow-2xl">
            <img className="w-full" src={book?.image_url} alt="" />
          </div>
          <div className="flex-1 px-8">
            <h2 className="text-5xl text-gray-400 font-light mb-8">
              {book?.title}
            </h2>
            <p className="text-lg text-gray-400 font-light">
              {book?.description}
            </p>
            <p className="text-xl text-gray-400 font-medium mt-5">
              Authors: {book?.authors}
            </p>
            {book?.edition ? (
              <p className="text-lg text-gray-400 font-light">
                Edition: {book?.edition}
              </p>
            ) : (
              <p className="text-lg text-gray-400 font-light">
                Edition: Unknown
              </p>
            )}
            <p className="text-lg text-gray-400 font-light">
              Genres: {book?.genres}
            </p>
            <p className="text-lg text-gray-400 font-light">
              Rating: {book?.rating}
            </p>
            {/* toggleBTN depending on the state */}
            <div className="mt-8 text-gray-400 capitalize">
              {checkFavorites(book.id) ? (
                <button
                  className="px-6 py-3 border rounded-xl"
                  onClick={() => deleteFromFavorites(book.id)}
                >
                  Delete Favorites
                </button>
              ) : (
                <button
                  className="px-6 py-3 border rounded-xl"
                  onClick={() => addToFavorites(book)}
                >
                  Add Favorites
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
