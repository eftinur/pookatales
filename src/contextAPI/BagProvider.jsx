import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

// Creating a context API to store data
export const BAG_CONTEXT = createContext();

const BagProvider = ({ children }) => {
  const getInitialState = () => {
    const favorites = localStorage.getItem("favorites");
    return favorites ? JSON.parse(favorites) : [];
  };
  
  const [favorites, setFavorites] = useState(getInitialState);
  // storing data in local storage
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Adding Method
  const addToFavorites = (book) => {
    const oldFavorites = [...favorites];
    const newFavorites = oldFavorites.concat(book);
    setFavorites(newFavorites);
  };
  // Deleting Method
  const deleteFromFavorites = (id) => {
    const oldFavorites = [...favorites];
    const newFavorites = oldFavorites.filter((book) => book.id !== id);
    setFavorites(newFavorites);
  };

  const value = {
    favorites,
    addToFavorites,
    deleteFromFavorites,
  };

  return <BAG_CONTEXT.Provider value={value}>{children}</BAG_CONTEXT.Provider>;
};

export default BagProvider;
