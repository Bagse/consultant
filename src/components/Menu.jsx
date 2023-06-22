import { useState } from "react";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header>
      <nav className="flex justify-between items-center">
        <button type="button" className="border border-white px-4 py-2">
          THIS INTERIOR
        </button>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <img
                className="w-10 flex justify-end"
                src="./img/close.png"
                alt="icono cerrar"
              />
            ) : (
              <img
                src="./img/menu.png"
                alt="icono menu hamburguesa"
                className="w-14"
              />
            )}
          </button>
        </div>
        <div
          className={`${
            isOpen
              ? "fixed inset-0 bg-black bg-opacity-50 z-50"
              : "hidden"
          } md:relative md:flex md:items-center w-full md:w-auto`}
        >
          <ul className="lg:gap-24 md:flex-row md:text-xl items-center flex flex-col gap-10 place-content-center bg-[#181719] h-screen text-2xl md:h-0">
            <li className="relative md:block">
              <a
                className="hover:underline transition underline-offset-8"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="block">
              <a
                className="hover:underline transition underline-offset-8"
                href="#"
              >
                Collection
              </a>
            </li>
            <li className="block">
              <a
                className="hover:underline transition underline-offset-8"
                href="#"
              >
                About
              </a>
            </li>
            <li className="block">
              <a
                className="hover:underline transition underline-offset-8"
                href="#"
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="absolute top-0 right-0 p-4">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-white focus:outline-none md:hidden"
            >
              <img
                className="w-6"
                src="./img/close.png"
                alt="icono cerrar"
              />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Menu;
