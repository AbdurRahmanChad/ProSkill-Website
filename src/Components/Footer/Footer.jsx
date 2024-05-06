import React from "react";
import FooterHero from "./FooterHero";
import FooterMenu from "./FooterMenu";
import MobileMenu from "./MobileMenu";
const Footer = () => {
  return (
    <>
      <footer className="bg-black">
        <div className="container mx-auto">
          <FooterHero />
          <FooterMenu />
          <MobileMenu />
        </div>
      </footer>
    </>
  );
};

export default Footer;
