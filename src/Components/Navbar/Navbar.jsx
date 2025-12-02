import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const toggleMenu = () => setIsOpen((s) => !s);
  const closeMenu = () => setIsOpen(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    closeMenu();
  };

  const hamburgerStyle = `
    .hamburger {
      cursor: pointer;
    }

    .hamburger input {
      display: none;
    }

    .hamburger svg {
      height: 2.6em;
      transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .line {
      fill: none;
      stroke: black;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-width: 3;
      transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
                  stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .line-top-bottom {
      stroke-dasharray: 12 63;
    }

    .hamburger input:checked + svg {
      transform: rotate(-45deg);
    }

    .hamburger input:checked + svg .line-top-bottom {
      stroke-dasharray: 20 300;
      stroke-dashoffset: -32.42;
    }
  `;

  return (
    <>
      <style>{hamburgerStyle}</style>
      <nav
        className="fixed left-[10vw] right-[10vw] h-[13vh] flex justify-between items-center px-9.25 rounded-[0.9375rem] border-[1.4px] border-white z-1000 transition-all duration-300"
        style={{
          background: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(0.225rem)",
          WebkitBackdropFilter: "blur(0.625rem)",
          boxShadow: "0 0 0.0625rem rgba(0, 0, 0, 0.18)",
        }}
      >
        {/* //^ Logo with hover effect (black logo default on mobile) */}
        <div className="relative pt-2 lg:pt-0 w-25 h-25 lg:w-30 lg:h-30 cursor-pointer group">
          {/* //^ Mobile: Black logo only */}
          <img
            className="block lg:hidden w-full h-full object-contain"
            src="/images/Gdg-logo-black.png"
            alt="GDG Logo Black"
          />

          {/* //^ Desktop: Normal logo with hover effect */}
          <img
            className="hidden lg:absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-500 opacity-0 group-hover:opacity-100 lg:block"
            src="/images/Gdg-logo-black.png"
            alt="GDG Logo Hover"
          />
          <img
            className="hidden lg:absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-500 opacity-100 group-hover:opacity-0 lg:block"
            src="/images/Gdg-logo.svg"
            alt="GDG Logo"
          />
        </div>

        {/* //^ Desktop Menu */}
        <div className="hidden lg:flex gap-12.75">
          <Link
            className={`font-bold text-[1.25rem] transition-all duration-300 cursor-pointer ${
              activeLink === "home"
                ? "text-[#478af5]"
                : "text-black hover:text-[#478af5]"
            } hover:text-[1.38rem]`}
            onClick={() => handleLinkClick("home")}
            to="/"
          >
            Home
          </Link>
          <Link
            className={`font-bold text-[1.25rem] transition-all duration-300 cursor-pointer ${
              activeLink === "about"
                ? "text-[#478af5]"
                : "text-black hover:text-[#478af5]"
            } hover:text-[1.38rem]`}
            onClick={() => handleLinkClick("about")}
            to="about"
          >
            About Us
          </Link>
          <Link
            className={`font-bold text-[1.25rem] transition-all duration-300 cursor-pointer ${
              activeLink === "events"
                ? "text-[#478af5]"
                : "text-black hover:text-[#478af5]"
            } hover:text-[1.38rem]`}
            onClick={() => handleLinkClick("events")}
            to="event"
          >
            Events
          </Link>
          <Link
            className={`font-bold text-[1.25rem] transition-all duration-300 cursor-pointer ${
              activeLink === "hall-of-fame"
                ? "text-[#478af5]"
                : "text-black hover:text-[#478af5]"
            } hover:text-[1.38rem]`}
            onClick={() => handleLinkClick("hall-of-fame")}
            to="hall-of-fame"
          >
            Hall Of Fame
          </Link>
        </div>

        {/* //^ Mobile Menu (floating dropdown) */}
        {isOpen && (
          <div
            className="fixed top-[calc(13vh+1rem)] left-[5vw] right-[5vw] rounded-[0.9375rem] p-6 shadow-lg z-999 lg:hidden flex flex-col gap-6 border border-white/20 transition-all duration-300 transform"
            style={{
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(10px)",
            }}
          >
            <Link
              onClick={() => handleLinkClick("home")}
              className={`font-bold text-[1.125rem] transition-colors cursor-pointer ${
                activeLink === "home"
                  ? "text-[#478af5]"
                  : "text-black hover:text-[#478af5]"
              }`}
              to="/"
            >
              Home
            </Link>
            <Link
              onClick={() => handleLinkClick("about")}
              className={`font-bold text-[1.125rem] transition-colors cursor-pointer ${
                activeLink === "about"
                  ? "text-[#478af5]"
                  : "text-black hover:text-[#478af5]"
              }`}
              to="about"
            >
              About Us
            </Link>
            <Link
              onClick={() => handleLinkClick("events")}
              className={`font-bold text-[1.125rem] transition-colors cursor-pointer ${
                activeLink === "events"
                  ? "text-[#478af5]"
                  : "text-black hover:text-[#478af5]"
              }`}
              to="event"
            >
              Events
            </Link>
            <Link
              onClick={() => handleLinkClick("join")}
              className={`font-bold text-[1.125rem] transition-colors cursor-pointer ${
                activeLink === "join"
                  ? "text-[#478af5]"
                  : "text-black hover:text-[#478af5]"
              }`}
              to="join-us"
            >
              Join Us
            </Link>
            <Link
              onClick={() => handleLinkClick("hall-of-fame")}
              className={`font-bold text-[1.125rem] transition-colors cursor-pointer ${
                activeLink === "hall-of-fame"
                  ? "text-[#478af5]"
                  : "text-black hover:text-[#478af5]"
              }`}
              to="hall-of-fame"
            >
              Hall Of Fame
            </Link>
          </div>
        )}

        {/* //^ Right controls: hamburger (mobile) + join button (desktop) */}
        <div className="flex items-center gap-4">
          <Link className="hidden lg:inline-block px-5.25 py-2 bg-[#e0ecff] text-[#939393] font-extrabold text-[1.375rem] rounded-[1.25rem] cursor-pointer transition-all duration-300 ease-out hover:text-[#548de8] hover:shadow-[0_0_1.25rem_#548de8] hover:-translate-y-0.5"
            to="join-us">
            Join Us
          </Link>

          {/* //^ Animated Hamburger Icon */}
          <label className="hamburger lg:hidden active:scale-95 transition-transform duration-150 ease-out">
            <input
              type="checkbox"
              checked={isOpen}
              onChange={toggleMenu}
              aria-label="Toggle menu"
            />
            <svg viewBox="0 0 32 32">
              <path
                className="line line-top-bottom"
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              />
              <path className="line" d="M7 16 27 16" />
            </svg>
          </label>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
