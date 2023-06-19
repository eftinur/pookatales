import pookatales from "../assets/pookatales.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import { useEffect } from "react";

const Navbar = () => {
  // GSAP Navigation
  // State for Hamburger Button
  const [menuContent, setMenuContent] = useState({
    initial: false,
    clicked: null,
    hamburgerBtn: "open",
    menuState: false,
  });

  // testing
  const location = useLocation();
  const history = useNavigate();
  useEffect(() => {
    setMenuContent({ clicked: false, hamburgerBtn: "close" });
  }, [location, history]);

  // State for Disabled Button
  const [disabled, setDisabled] = useState(false);

  const handleMenu = () => {
    disableMenu();
    if (menuContent.initial === false) {
      setMenuContent({
        initial: null,
        clicked: true,
        hamburgerBtn: "close",
        menuState: true,
      });
    } else if (menuContent.clicked === true) {
      setMenuContent({
        clicked: !menuContent.clicked,
        hamburgerBtn: "open",
        menuState: false,
      });
    } else if (menuContent.clicked === false) {
      setMenuContent({
        clicked: !menuContent.clicked,
        hamburgerBtn: "close",
        menuState: true,
      });
    }
  };

  // Enable and Disable the Hamburger Button
  const disableMenu = () => {
    setDisabled(!disabled);

    // Delaying
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <header className="site_header bg-white px-4">
      {/* GSAP */}
      <div className="container mx-auto">
        <div className="header_wrapper">
          <div className="inner_header">
            <div className="logo_wrapper w-32">
              <Link to="/">
                <img className="w-full" src={pookatales} alt="" />
              </Link>
            </div>
            <div className="menu_toggle block">
              <button
                disabled={disabled}
                className={`menu_trigger ${
                  menuContent.menuState ? "menu_close" : ""
                }`}
                onClick={handleMenu}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <HamburgerMenu menuContent={menuContent} />
    </header>
  );
};

export default Navbar;
