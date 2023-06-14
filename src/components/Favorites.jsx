import { useContext } from "react";
import { BAG_CONTEXT } from "../contextAPI/BagProvider";

const Bag = () => {
  // Handling Button UI depending on the state
  const { favorites, deleteFromFavorites } = useContext(BAG_CONTEXT); // Getting state data from contextAPI
  console.log(favorites);

  return (
    <div className="container min-h-screen mx-auto px-4">
      <p>You have {favorites.length} items Favorites</p>
      <div className="w-3/4 mx-auto">
        {favorites.map((book, index) => (
          <div key={index} className="border-b">
            <div className="grid grid-cols-4 my-8">
              <div className="flex items-center">{(index += 1)}</div>
              <div className="col-span-2 flex items-center gap-4">
                <img
                  className="w-20 h-20 object-cover"
                  src={book?.image_url}
                  alt=""
                />
                <div>
                  <p>{book?.title}</p>
                  <p>{book?.authors}</p>
                </div>
              </div>
              <div className="flex justify-end items-center">
                <button
                  className="px-6 py-3 border rounded-xl"
                  onClick={() => deleteFromFavorites(book.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bag;
