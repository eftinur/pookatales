import pookatales from "../assets/pookatales.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="container mx-auto flex justify-between items-center px-4">
      <div className="w-40">
        <img className="w-full" src={pookatales} alt="" />
      </div>
      <div>
        <ul className="flex items-center gap-x-8 text-sm text-gray-400 font-medium uppercase">
          <li>
            <Link>Shop</Link>
          </li>
          <li>
            {/* Navigating with React Router */}
            <Link className="flex items-center gap-2" to="/favorites">
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/ios/50/shopping-bag--v1.png"
                alt="shopping-bag--v1"
              />
              <span className="font-medium">Favorites</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
