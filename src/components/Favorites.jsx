import { useContext } from "react";
import { BAG_CONTEXT } from "../contextAPI/BagProvider";

const Bag = () => {
  // Handling Button UI depending on the state
  const { favorites, deleteFromFavorites } = useContext(BAG_CONTEXT); // Getting state data from contextAPI
  console.log(favorites);

  return (
    <div className="container min-h-screen mx-auto px-4">
      <div className="w-3/4 mx-auto py-12">
        <h5 className="text-4xl lg:text-[8rem] text-gray-400 font-light text-center leading-[48px] lg:leading-[128px] uppercase">
          You Have <span className="text-[#8846FF]">{favorites.length}</span> Favorites
        </h5>
      </div>
      <div className="w-full lg:w-3/4 mx-auto">
        {favorites.map((book, index) => (
          <div key={index} className="border-b">
            <div className="grid grid-cols-5 my-8">
              <div className="flex items-center">
                <p>{(index += 1)}</p>
              </div>
              <div className="col-span-3 flex items-center gap-4">
                <img
                  className="w-16 h-16 lg:w-20 lg:h-20 object-cover"
                  src={book?.image_url}
                  alt=""
                />
                <div>
                  <p className="text-base lg:text-xl">{book?.title}</p>
                  <p className="text-sm lg:text-base mt-3">{book?.authors}</p>
                </div>
              </div>
              <div className="flex justify-end items-center">
                <button
                  className="px-3 py-2 border rounded-xl"
                  onClick={() => deleteFromFavorites(book.id)}
                >
                  <img
                    width="24"
                    height="24"
                    src="https://img.icons8.com/windows/64/trash.png"
                    alt="trash"
                  />
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
