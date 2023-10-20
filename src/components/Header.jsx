"use client";

import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Navbar className="bg-blue-300" fluid rounded>
        <Navbar.Brand as={Link} href="https://flowbite-react.com">
          <span className="self-center whitespace-nowrap text-3xl sm:text-5xl p-4 text-white dark:text-white font-sacramento">
            Reyna Nuñez.
            {/* <p className="font-light tracking-wider text-[1.3rem] font-sans">
              Photography
            </p> */}
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link className="text-white text-lg" href="#">
            <span className="hover:text-blue-600 font-normal tracking-wider">
              Home
            </span>
          </Navbar.Link>
          <Navbar.Link className="text-white text-lg" as={Link} href="#">
            <span className="hover:text-blue-600 font-normal tracking-wider">
              About
            </span>
          </Navbar.Link>

          <Navbar.Link className="text-white text-lg" href="#">
            <span className="hover:text-blue-600 font-normal tracking-wider">
              Contact
            </span>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
