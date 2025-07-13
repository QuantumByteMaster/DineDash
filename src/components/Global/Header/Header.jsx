import { useState } from "react";
import Logo from "/Logo.png";

import { RightArrowIcon } from "@Icons/Icons";

import YellowButton from "@GlobalComponents/Buttons/YellowButton";
import HeaderNavLists from "./HeaderNavList";
import HamburgerMenu from "./HamburgerMenu";
import HeaderCart from "./HeaderCart";
import MegaMenu from "./MegaMenu";
import SearchBar from "./SearchBar";

const navLinks = [
  "Home",
  "About Us",
  "Shop",
  "Services",
  "Blog",
  "Pages",
  "Contact Us",
];
const navLinkCSS = "hover:text-yellow-500 cursor-pointer whitespace-nowrap";

export default function Header() {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  return (
    <header className="w-full absolute top-0 left-0 py-2 sm:py-4 z-50 text-black use-poppins flex flex-col items-center">
      {" "}
      <nav className="w-[95%] md:w-[640px] lg:w-[768px] xl:w-[1024px] 2xl:w-[1280px] flex justify-between">
        {" "}
        {/* Logo and Brand */}
        <div className="flex items-center min-w-[220px] pr-8">
          <img
            className="h-10 sm:h-12 md:h-20"
            src={Logo}
            loading="lazy"
            width="80"
            height="80"
            alt="DineDash Logo"
          />
          <p className="use-pacifico text-yellow-400 text-3xl sm:text-4xl md:text-5xl font-normal ml-3">
            DineDash
          </p>
        </div>
        {/* Nav Links */}
        <div className="hidden lg:flex items-center ml-12 gap-4 lg:gap-8">
          <HeaderNavLists links={navLinks} linksCSS={navLinkCSS} />
        </div>
        {/* Search, Cart, Hamburger */}
        <div className="flex items-center justify-end gap-8 w-full xl:w-1/3">
          {" "}
          <HeaderCart />
          <div className="block lg:hidden">
            <HamburgerMenu />
          </div>
        </div>
      </nav>
      <MegaMenu isOpen={megaMenuOpen} onClose={() => setMegaMenuOpen(false)} />
    </header>
  );
}
