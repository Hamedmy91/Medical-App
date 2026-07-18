import { useState } from "react";
import { Link } from "react-router";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center p-4 border-b border-[#adadad] mx-4">
        <img className="w-44" src="/logo.svg" alt="logo" />

        <button className="md:hidden" onClick={() => setShowMenu(true)}>
          <img src="/menu.svg" alt="menu" />
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 w-full h-screen bg-white z-50 transform transition-transform duration-500 ${
          showMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 ">
          <img className="w-44" src="/logo.svg" alt="logo" />

          <button onClick={() => setShowMenu(false)}>
            <img className="w-6" src="/cross.png" alt="close" />
          </button>
        </div>

        <ul className="flex flex-col gap-6 mt-10 items-center text-lg font-medium">
          <li>
            <Link to="/" onClick={() => setShowMenu(false)}>
              HOME
            </Link>
          </li>

          <li>
            <Link to="/doctor" onClick={() => setShowMenu(false)}>
              ALL DOCTORS
            </Link>
          </li>

          <li>
            <Link to="/about" onClick={() => setShowMenu(false)}>
              ABOUT
            </Link>
          </li>

          <li>
            <Link to="/contact" onClick={() => setShowMenu(false)}>
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
