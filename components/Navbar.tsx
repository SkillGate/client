"use client"

import Link from "next/link";
import Image from "next/image";
import { CustomButton } from ".";
import { imageUrl } from "@/constants";

const Navbar = () => {
  return (
    <header className="w-full  absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src={imageUrl[0].url}
            alt={imageUrl[0].alt}
            width={158}
            height={30}
            className="object-contain"
          />
        </Link>

        <CustomButton
          title="Sign in"
          btnType="button"
          containerStyles="text-primary-blue font-bold rounded-lg bg-white min-w-[130px]"
        />
      </nav>
    </header>
  );
};

export default Navbar;
