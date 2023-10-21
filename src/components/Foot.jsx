"use client";

import { Footer } from "flowbite-react";
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";

function Foot() {
  return (
    <footer>
      <Footer className="bg-blue-300 shadow-lg sticky bottom-0" container>
        <Footer.LinkGroup className="flex space-x-2 sm:space-x-0">
          <Footer.Link
            className="text-white"
            href="https://www.instagram.com/reynas_flower_photos/?utm_source=qr"
          >
            <FaInstagram className="text-white text-3xl" />
          </Footer.Link>
        </Footer.LinkGroup>
        <Footer.Copyright
          className="text-white"
          by="Reyna Nunez™"
          href="#"
          year={2023}
        />
      </Footer>
    </footer>
  );
}

export default Foot;
