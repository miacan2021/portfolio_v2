"use client";
import { useState, FC } from "react";
import Image from "next/image";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";

const HeaderMenu: FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setOpen((prev: boolean): boolean => !prev);
  };
  return (
    <header>
      <nav className="w-8/12 sticky z-10 bg-beige py-5 mx-auto flex justify-between items-center">
        <Image
          src={"/logos/Shiho-logo.svg"}
          className="logo"
          alt="logo"
          width={100}
          height={100}
        />
        <div
          className={`${open ? "fixed z-10 flex flex-col justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" : "hidden lg:flex justify-items-end"} gap-4 items-center text-navy`}
        >
          <Link href="/">home</Link>
          <Link href="/work">works</Link>
          <Link href="/contact">contact</Link>
          <Link href="https://github.com/miacan2021">github</Link>
          <Link href="https://www.linkedin.com/in/shiho-kazama/">linkedin</Link>
          <Link href="/resume">resume</Link>
        </div>
        <button
          onClick={toggleMenu}
          className="block lg:hidden cursor-pointer text-navy"
        >
          {open ? <CloseIcon /> : "menu"}
        </button>
      </nav>
    </header>
  );
};

export default HeaderMenu;
