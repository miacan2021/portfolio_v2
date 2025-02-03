import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="fixed left-1/2 -translate-x-1/2 z-50 w-11/12 lg:w-10/12 h-16 flex items-center justify-between">
        <a href="/">
          <img
            src="/src/assets/logos/Shiho-logo.svg"
            alt="logo header"
            className="w-20 lg:w-28 h-auto object-cover"
          />
        </a>
        <div className="hidden lg:flex items-center space-x-8 text-secoundary font-text">
          <a className="hover:translate-y-0.5" href="/about">
            about
          </a>
          <a className="hover:translate-y-0.5" href="/works">
            works
          </a>
          <a
            className="hover:translate-y-0.5"
            href="https://github.com/miacan2021"
          >
            github
          </a>
          <a
            className="hover:translate-y-0.5"
            href="https://www.linkedin.com/in/shiho-kazama/"
          >
            linkedin
          </a>
          <a
            href="/resume"
            className="text-primary bg-secoundary px-6 py-2 rounded-full border hover:bg-primary hover:text-secoundary hover:border-secoundary"
          >
            resume
          </a>
        </div>
        <button className="block lg:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <img
              src="/src/assets/icons/close.svg"
              alt="close_icon"
              className="w-8 h-auto cursor-pointer"
            />
          ) : (
            <img
              src="/src/assets/icons/menu.svg"
              alt="menu_icon"
              className="w-8 h-auto cursor-pointer"
            />
          )}
        </button>
      </div>
      <div
        className={`${
          isOpen ? "block animate-fadeIn" : "hidden animate-fadeOut"
        }  lg:hidden fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-screen bg-primary z-10 flex flex-col items-center justify-center space-y-8`}
      >
        <a className="hover:translate-y-0.5" href="/about">
          about
        </a>
        <a className="hover:translate-y-0.5" href="/works">
          works
        </a>
        <a
          className="hover:translate-y-0.5"
          href="https://github.com/miacan2021"
        >
          github
        </a>
        <a
          className="hover:translate-y-0.5"
          href="https://www.linkedin.com/in/shiho-kazama/"
        >
          linkedin
        </a>
        <a
          href="/resume"
          className="text-primary bg-secoundary px-6 py-2 rounded-full border hover:bg-primary hover:text-secoundary hover:border-secoundary"
        >
          resume
        </a>
      </div>
    </div>
  );
};

export default Header;
