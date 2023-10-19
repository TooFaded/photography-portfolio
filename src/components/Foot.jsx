"use client";

import { Footer } from "flowbite-react";

function Foot() {
  return (
    <footer>
      <Footer container>
        <Footer.Copyright by="Reyna Nunez™" href="#" year={2023} />
        <Footer.LinkGroup>
          <Footer.Link href="#">About</Footer.Link>
          <Footer.Link href="#">Privacy Policy</Footer.Link>
          <Footer.Link href="#">Licensing</Footer.Link>
          <Footer.Link href="#">Contact</Footer.Link>
        </Footer.LinkGroup>
      </Footer>
    </footer>
  );
}

export default Foot;
