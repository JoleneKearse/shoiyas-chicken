/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Menu from "/menu.svg";
import NavLinks from "./NavLinks";

const navLinkPaths = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Menu",
    path: "/menu",
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
  {
    name: "Contact Us",
    path: "/contact",
  },
];

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1023);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1023);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="font-sans-serif bg-brand-blue p-8 sticky top-0">
      {isNavOpen ? <NavBar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} navLinkPaths={navLinkPaths} /> : (
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-courgette">
            <span className="block text-4xl text-brand-300 font-black bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent pb-3">Shoiya's</span>
            Specialty Chicken, <span className="block md:inline-block">Wings N' Things</span>
          </h1>
          {isLargeScreen ? <NavLinks navLinkPaths={navLinkPaths} /> : (
            <button
              id="btnOpen"
              aria-label="open"
              title="Open navigation menu"
              onClick={() => setIsNavOpen((prev) => !prev)}
              className="lg:hidden"
            >
              <img
                src={Menu}
                alt="open menu"
                className="w-8 hover:backdrop-saturate-200 hover:w-9"
              />
            </button>
          )}

        </div>
      )}
    </header>
  )
}

export default Header