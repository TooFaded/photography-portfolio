"use client";

import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import crownLogo from "../assets/icons8-crown-64.png";

function Header() {
  return (
    <header>
      <Navbar className="bg-blue-300 shadow-xl" fluid rounded>
        <Navbar.Brand as={Link} href="https://flowbite-react.com">
          <span className="self-center whitespace-nowrap text-2xl sm:text-4xl pb-2 pt-2 mr-[-2px] ml-4  text-white dark:text-white font-sacramento">
            Reyna Nuñez.
            <p className="text-sm font-sans font-light sm:ml-16 ml-6">
              Photography
            </p>
          </span>
          <img src={crownLogo} alt="Crown Icon" className="w-8 sm:w-14 mb-6" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link
            className="text-white hover:bg-gray-400 text-lg"
            href="#"
          >
            <span className="hover:text-blue-600  font-thin tracking-widest">
              Home
            </span>
          </Navbar.Link>
          <Navbar.Link
            className="text-white hover:bg-gray-400 text-lg"
            as={Link}
            href="#"
          >
            <span className="hover:text-blue-600 font-thin tracking-widest">
              About
            </span>
          </Navbar.Link>

          <Navbar.Link
            className="text-white hover:bg-gray-400 text-lg"
            href="#"
          >
            <span className="hover:text-blue-600 font-thin tracking-widest">
              Contact
            </span>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
