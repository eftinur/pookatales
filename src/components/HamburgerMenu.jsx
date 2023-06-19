import { useRef } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const HamburgerMenu = ({ menuContent }) => {
  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let info = useRef(null);

  useEffect(() => {
    if (menuContent.clicked === false) {
      // We'll Close The Menu
      // menu.style.display = "none";
      gsap.to([revealMenu, revealMenuBackground], {
        duration: 0.8,
        height: 0,
        ease: "power3.inOut",
        stagger: {
          amount: 0.07,
        },
      });
    } else if (
      menuContent.clicked === true ||
      (menuContent.clicked === true && menuContent.initial === null)
    ) {
      // We'll Open The Menu
      // menu.style.display = "block";
      gsap.to([revealMenu, revealMenuBackground], {
        duration: 0.8,
        height: '100%',
        ease: "power3.inOut",
        stagger: {
          amount: 0.07,
        },
      });
    }
  });

  return (
    <div ref={(el) => (menu = el)} className="hamburger_menu">
      <div
        ref={(el) => (revealMenuBackground = el)}
        className="reveal_menu-bg"
      ></div>
      <div ref={(el) => (revealMenu = el)} className="menu_main">
        <div className="container mx-auto">
          <div className="menu_wrapper">
            <div className="menu_tags">
              <nav>
                <ul>
                  {/* Navigating with React Router */}
                  <li ref={(el) => (line1 = el)} className="">
                    <Link to="/">Home</Link>
                  </li>
                  <li ref={(el) => (line2 = el)} className="">
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li ref={(el) => (line3 = el)} className="">
                    <Link to="/favorites">Favorites</Link>
                  </li>
                </ul>
              </nav>
              <div ref={(el) => (info = el)} className="info">
                <h3>Our Promise</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus nulla fugiat, aperiam expedita delectus, id facere
                  quis cum atque corrupti, sed maxime commodi laboriosam. Ea
                  necessitatibus cumque vitae iusto minima nihil eaque?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
