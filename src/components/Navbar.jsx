import pookatales from "../assets/pookatales.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { BAG_CONTEXT } from "../contextAPI/BagProvider";

const Navbar = () => {
  const { favorites } = useContext(BAG_CONTEXT); // Getting state data from contextAPI
  console.log(favorites);

  return (
    <nav className="container mx-auto flex justify-between items-center px-4">
      <div className="w-40">
        <Link to="/">
          <img className="w-full" src={pookatales} alt="" />
        </Link>
      </div>
      <div className="hidden lg:block">
        <ul className="flex items-center gap-x-8 text-sm text-gray-400 font-medium uppercase">
          {/* Navigating with React Router */}
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
