"use client";

import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import crownLogo from "../assets/icons8-crown-64.png";
import { useState } from "react";

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-10">
      <Navbar className="bg-blue-300 shadow-lg border-b-2" fluid>
        <Navbar.Brand as={Link} to="/">
          <span className="self-center whitespace-nowrap text-2xl sm:text-4xl pb-2 pt-2 mr-[-2px] ml-4 drop-shadow-lg  text-white dark:text-white font-sacramento">
            Reyna Nuñez.
            <p className="text-sm font-sans tracking-wider font-light sm:ml-16 ml-6">
              Photography
            </p>
          </span>
          <img src={crownLogo} alt="Crown Icon" className="w-8 sm:w-14 mb-6" />
        </Navbar.Brand>
        <Navbar.Toggle onClick={toggleMobileMenu} />

        <Navbar.Collapse className={isMobileMenuOpen ? "block" : "hidden"}>
          <Navbar.Link
            className="text-white hover:bg-gray-400 text-lg"
            as={Link}
            to="/"
            onClick={closeMobileMenu}
          >
            <span className="hover:text-blue-600 font-light tracking-widest">
              Home
            </span>
          </Navbar.Link>
          <Navbar.Link
            className="text-white hover:bg-gray-400 text-lg"
            as={Link}
            to="/about"
            onClick={closeMobileMenu}
          >
            <span className="hover:text-blue-600 font-light tracking-widest">
              About
            </span>
          </Navbar.Link>

          <Navbar.Link
            className="text-white hover:bg-gray-400 text-lg"
            as={Link}
            to="/contact"
            onClick={closeMobileMenu}
          >
            <span className="hover:text-blue-600 font-light tracking-widest">
              Contact
            </span>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
