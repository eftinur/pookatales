import pookatales from "../assets/pookatales.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="container mx-auto flex justify-between items-center px-4">
      <div className="w-40">
        <Link to="/">
          <img className="w-full" src={pookatales} alt="" />
        </Link>
      </div>
      <div>
        <ul className="flex items-center gap-x-8 text-sm text-gray-400 font-medium uppercase">
          {/* Navigating with React Router */}
          <li>
            <Link to="/">Shop</Link>
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
