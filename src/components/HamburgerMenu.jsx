import { useRef } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const HamburgerMenu = ({ menuState }) => {
  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let info = useRef(null);

  useEffect(() => {
    if (menuState.taped === false) {
      gsap.to([revealMenu, revealMenuBackground], {
        duration: 0.8,
        height: 0,
        // y: "-100%",
        ease: "power3.inOut",
        stagger: {
          amount: 0.07,
        },
      });
      gsap.to(menu, { duration: 1, css: { display: "none" } });
    } else if (
      menuState.taped === true ||
      (menuState.taped === true && menuState.initial === null)
    ) {
      gsap.to(menu, { duration: 0, css: { display: "block" } });

      gsap.to([revealMenuBackground, revealMenu], {
        duration: 0.8,
        height: "100%",
        // y: "0%",
        ease: "power3.inOut",
        stagger: {
          amount: 0.07,
        },
      });
      fadeInUp(info);
      staggerLinks(line1, line2, line3);
    }
  }, [menuState]);

  const staggerLinks = (node1, node2, node3) => {
    gsap.from([node1, node2, node3], {
      y: 100,
      duration: 0.8,
      delay: 0.1,
      opacity: 0,
      ease: "power3.inOut",
      stagger: { amount: 0.1 },
    });
  };

  const fadeInUp = (node) => {
    gsap.from(node, {
      y: 60,
      duration: 1,
      delay: 0.2,
      opacity: 0,
      ease: "power3.inOut",
    });
  };

  return (
    <div ref={(el) => (menu = el)} className="hamburger_menu">
      <div
        ref={(el) => (revealMenuBackground = el)}
        className="reveal_menu-bg"
      ></div>
      <div ref={(el) => (revealMenu = el)} className="menu_main">
        <div className="container mx-auto">
          <div className="menu_wrapper">
            <div className="menu_tags flex justify-between items-start lg:items-center flex-col lg:flex-row px-4">
              <nav className="w-3/4">
                <ul>
                  {/* Navigating with React Router */}
                  <li
                    ref={(el) => (line1 = el)}
                    className="w-full lg:w-[700px] h-[80px] lg:h-[135px] text-4xl lg:text-8xl font-light"
                  >
                    <Link to="/">Home</Link>
                  </li>
                  <li
                    ref={(el) => (line2 = el)}
                    className="w-full lg:w--[700px] h-[80px] lg:h-[135px] text-4xl lg:text-8xl font-light"
                  >
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li
                    ref={(el) => (line3 = el)}
                    className="w-full lg:w--[700px] h-[80px] lg:h-[135px] text-4xl lg:text-8xl font-light"
                  >
                    <Link to="/favorites">Favorites</Link>
                  </li>
                </ul>
              </nav>
              <div
                ref={(el) => (info = el)}
                className="info w-full lg:w-[320px] text-white"
              >
                <>
                  <h3>Our Promise</h3>
                  <p>
                    Our mission is to provide quality but affordable books for
                    education, entertainment, self-development and
                    self-fulfillment; to all when the need arises by:
                  </p>
                  <p className="py-4">
                    Providing a wide range of books to satisfy our clients
                    Exceeding our customers’ expectation in their book
                    requirements Making our books accessible in the market.
                    Acting as agents for both customers and publishers and
                    working for their interest; enriching our client’s life in
                    their quest for educational and entertaining books and
                    advancing the cause of our publishers.
                  </p>
                </>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
