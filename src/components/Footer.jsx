import pookatales from "../assets/pookatales.png";

const Footer = () => {
  return (
    <footer className="container mx-auto flex justify-between items-center border-t px-4">
      <div className="w-28">
        <img className="w-full" src={pookatales} alt="" />
      </div>
      <>
        <p className="text-sm text-gray-400 font-medium">
          &copy; 2023 POOKATALES
        </p>
      </>
    </footer>
  );
};

export default Footer;
