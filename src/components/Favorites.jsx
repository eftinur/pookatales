import { useContext } from "react";
import { BAG_CONTEXT } from "../contextAPI/BagProvider";

const Bag = () => {
  const { favorites, deleteFromFavorites } = useContext(BAG_CONTEXT); // Getting state data from contextAPI
  console.log(favorites);

  return <div className="container mx-auto h-screen px-4">Favorite</div>;
};

export default Bag;
