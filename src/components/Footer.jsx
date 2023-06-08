import SEVEN_INK from "../assets/SEVEN_INK.png";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center border-t border-[#4C5D4D] gap-x-2">
      <div className="w-28">
        <img className="w-full" src={SEVEN_INK} alt="" />
      </div>
      <>
      <p className="text-sm text-gray-400 font-medium">© 2023 Seven Ink Libraria</p>
      </>
    </footer>
  );
};

export default Footer;
