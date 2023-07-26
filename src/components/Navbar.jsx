import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import pookatales from "../assets/pookatales.png";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  // GSAP Navigation
  // State for Hamburger Button
  const [menuState, setmenuState] = useState({
    initial: false,
    taped: null,
    hamburgerBtn: "open",
    state: false,
  });
  console.log(menuState);
  // testing
  const location = useLocation();
  const history = useNavigate();
  useEffect(() => {
    setmenuState({ taped: false, hamburgerBtn: "close" });
  }, [location, history]);

  // State for Disabled Button
  const [disabled, setDisabled] = useState(false);

  const handleMenu = () => {
    disableMenu();
    if (menuState.initial === false) {
      setmenuState({
        initial: null,
        taped: true,
        hamburgerBtn: "close",
        state: true,
      });
    } else if (menuState.taped === true) {
      setmenuState({
        taped: !menuState.taped,
        hamburgerBtn: "open",
        state: false,
      });
    } else if (menuState.taped === false) {
      setmenuState({
        taped: !menuState.taped,
        hamburgerBtn: "close",
        state: true,
      });
    }
  };

  // Enable and Disable the Hamburger Button
  const disableMenu = () => {
    setDisabled(!disabled);

    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <header className="site_header px-4 z-50">
      {/* GSAP */}
      <div className="container mx-auto">
        <div className="header_wrapper border-b px-4">
          <div className="inner_header">
            <div className="logo_wrapper w-24 lg:w-32">
              <Link to="/">
                <img className="w-full" src={pookatales} alt="" />
              </Link>
            </div>
            <div className="menu_toggle block">
              <button
                disabled={disabled}
                className={`menu_trigger ${
                  menuState.state ? "menu_close" : ""
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
      <HamburgerMenu menuState={menuState} />
    </header>
  );
};

export default Navbar;
