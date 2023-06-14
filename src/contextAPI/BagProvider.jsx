import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

// Creating a context API to store data
export const BAG_CONTEXT = createContext();

const BagProvider = ({ children }) => {
  // Getting state from the localStorage
  const getInitialState = () => {
    const initialState = localStorage.getItem("favorites");
    return initialState ? JSON.parse(initialState) : [];
  };

  const [favorites, setFavorites] = useState(getInitialState);

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

  // storing state from the localStorage
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const value = {
    favorites,
    addToFavorites,
    deleteFromFavorites,
  };

  return <BAG_CONTEXT.Provider value={value}>{children}</BAG_CONTEXT.Provider>;
};

export default BagProvider;
