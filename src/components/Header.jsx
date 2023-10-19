"use client";

import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Navbar fluid rounded>
        <Navbar.Brand as={Link} href="https://flowbite-react.com">
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            Reyna Nuñez
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="#" active>
            Home
          </Navbar.Link>
          <Navbar.Link as={Link} href="#">
            About
          </Navbar.Link>

          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
