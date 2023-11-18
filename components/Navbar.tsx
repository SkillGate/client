"use client";

import { useState } from "react";
import { NAV_LINKS, imageUrl } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { CustomButton } from ".";
// import NAV_LINKS from "./NavData";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 w-full bg-white z-50">
      <nav className="flexBetween max-container padding-container relative z-30 py-5">
        <Link href="/">
          <Image
            src={imageUrl[0].url}
            alt={imageUrl[0].alt}
            width={158}
            height={30}
            className="object-contain"
          />
        </Link>

        {/* Mobile Menu Icon */}
        <Image
          src={imageUrl[3].url}
          alt={imageUrl[3].alt}
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden"
          onClick={toggleMobileMenu}
        />

        {/* Mobile Menu (Hidden by default) */}
        <div
          className={`${isMobileMenuOpen ? "block" : "hidden"
            // } lg:hidden absolute top-0 left-0 w-full text-center bg-white text-main p-5`}
            } lg:hidden absolute top-0 left-0 w-full text-center bg-main p-5`}
        >
          {/* Close Button */}
          <button
            className="text-white absolute top-4 right-4 text-2xl cursor-pointer"
            onClick={closeMobileMenu}
          >
            &times;
          </button>

          {/* Mobile Menu Links */}
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <Link
                  href={link.href}
                  className="block text-white py-2 hover:font-bold"
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href='/login'
                className="block text-white py-2 hover:font-bold"
                onClick={closeMobileMenu}
              >
                Sign In
              </Link>
            </li>
          </ul>

        </div>

        {/* Web View Menu */}
        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <Link
                href={link.href}
                className="regular-16 text-gray-500 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden h-full gap-12 lg:flex">
          <Link href={"/login"}>
            <CustomButton
              title="Sign In"
              btnType="button"
              containerStyles="text-primary-blue font-bold rounded-full bg-white min-w-[130px] hover:bg-black hover:text-white"
              textStyles="px-0"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;