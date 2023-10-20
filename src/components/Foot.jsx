"use client";

import { Footer } from "flowbite-react";

function Foot() {
  return (
    <footer>
      <Footer className="bg-blue-300 shadow-lg" container>
        <Footer.Copyright
          className="text-white"
          by="Reyna Nunez™"
          href="#"
          year={2023}
        />
        <Footer.LinkGroup>
          <Footer.Link className="text-white" href="#">
            About
          </Footer.Link>
          <Footer.Link className="text-white" href="#">
            Privacy Policy
          </Footer.Link>
          <Footer.Link className="text-white" href="#">
            Licensing
          </Footer.Link>
          <Footer.Link className="text-white" href="#">
            Contact
          </Footer.Link>
        </Footer.LinkGroup>
      </Footer>
    </footer>
  );
}

export default Foot;
