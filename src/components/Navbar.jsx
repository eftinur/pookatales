import SEVEN_INK from "../assets/SEVEN_INK.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="container mx-auto flex justify-between items-center">
      <div className="w-40">
        <img className="w-full" src={SEVEN_INK} alt="" />
      </div>
      <div>
        <ul className="flex gap-x-8 text-sm text-gray-400 font-medium">
          <li>
            {/* Navigating with React Router */}
            <Link className="flex items-center gap-2" to="/bag">
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/ios/50/shopping-bag--v1.png"
                alt="shopping-bag--v1"
              />
              <span className="font-medium uppercase">Bag</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
