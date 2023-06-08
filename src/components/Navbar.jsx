import SEVEN_INK from "../assets/SEVEN_INK.png";

const Navbar = () => {
  return (
    <nav className="container mx-auto flex justify-between items-center">
      <div className="w-40">
        <img className="w-full" src={SEVEN_INK} alt="" />
      </div>
      <div>
        <ul className="flex gap-x-8">
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/wishlist">Wishlist</a>
            </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
