import React, { useState } from "react";
import logo from "../../assets/logo.png";

export default function Navbar(props) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("Language");
  const [activeLink, setActiveLink] = useState(
    props.activeLink !== null || props.activeLink !== ""
      ? props.activeLink
      : "Home"
  );

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsLanguageMenuOpen(false);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className="fixed top-0 z-50 w-full">
        <nav className="bg-navbarbackground top-0">
          <div className="relative flex h-16 items-center justify-between sm:pr-20 lg:pr-20">
            <div className="flex-shrink-0 pl-5">
              <a
                href={`/`}
                className={``}
                onClick={() => handleLinkClick("Home")}
              >
                <img className="h-12 w-auto" src={logo} alt="Your Company" />
              </a>
            </div>

            <div className="hidden sm:block mx-auto">
              <div className="flex gap-x-4">
                <a
                  href={`/`}
                  className={`font-inter ${
                    activeLink === "Home"
                      ? "border-b-4 border-green text-green"
                      : ""
                  } px-3 py-2 text-sm font-medium text-gray-900`}
                  onClick={() => handleLinkClick("Home")}
                >
                  Home
                </a>
                {["About Us", "Services", "Testimonials", "Contact Us"].map(
                  (link) => (
                    <a
                      href={`/#${link.replace(/\s+/g, "").toLowerCase()}`}
                      className={`font-inter ${
                        activeLink === link
                          ? "border-b-4 border-green text-green"
                          : ""
                      } px-3 py-2 text-sm font-medium text-gray-900`}
                      onClick={() => handleLinkClick(link)}
                      key={link}
                    >
                      {link}
                    </a>
                  )
                )}
                {["Products", "Blog", "FAQ"].map((link) => (
                  <a
                    href={`${link.replace(/\s+/g, "").toLowerCase()}`}
                    className={`font-inter ${
                      activeLink === link
                        ? "border-b-4 border-green text-green"
                        : ""
                    } px-3 py-2 text-sm font-medium text-gray-900`}
                    onClick={() => handleLinkClick(link)}
                    key={link}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="relative">
                <button
                  type="button"
                  className="font-inter relative flex rounded-none border border-black text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="language-menu-button"
                  aria-expanded={isLanguageMenuOpen ? "true" : "false"}
                  aria-haspopup="true"
                  onClick={toggleLanguageMenu}
                >
                  <span className="sr-only">Open language menu</span>
                  <span className="text-black">{selectedLanguage}</span>
                </button>
                <div
                  className={`absolute right-0 z-10 mt-2 w-48 origin-top-right bg-white py-1 shadow-lg ring-1 ring-opacity-5 focus:outline-none ${
                    isLanguageMenuOpen ? "block" : "hidden"
                  }`}
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="language-menu-button"
                  tabIndex="-1"
                >
                  {["English", "Telugu", "Malayalam", "Hindi"].map(
                    (language) => (
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabIndex="-1"
                        onClick={() => handleLanguageSelect(language)}
                        key={language}
                      >
                        {language}
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>

            <div className="flex sm:hidden items-center">
              <button
                type="button"
                className="relative inline-flex items-center p-5 justify-center rounded-none text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen ? "true" : "false"}
                onClick={toggleMobileMenu}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${isMobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
                <svg
                  className={`${isMobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </nav>
        <div
          className={`sm:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}
          id="mobile-menu"
        >
          <div className="bg-white px-2 pt-2 pb-3 w-screen space-y-1">
            <a
              href="/"
              className={`block font-inter ${
                activeLink === "Home"
                  ? "border-b-4 border-green text-green"
                  : ""
              } px-3 py-2 text-base font-medium text-gray-900`}
              onClick={() => handleLinkClick("Home")}
            >
              Home
            </a>
            {["About Us", "Services", "Testimonials", "Contact Us"].map(
              (link) => (
                <a
                  key={link}
                  href={`/#${link.replace(/\s+/g, "").toLowerCase()}`}
                  className={`block font-inter ${
                    activeLink === link
                      ? "border-b-4 border-green text-green"
                      : ""
                  } px-3 py-2 text-base font-medium text-gray-900`}
                  onClick={() => handleLinkClick(link)}
                >
                  {link}
                </a>
              )
            )}
            {["Products", "Blog", "FAQ"].map((link) => (
              <a
                key={link}
                href={`${link.replace(/\s+/g, "").toLowerCase()}`}
                className={`block font-inter ${
                  activeLink === link
                    ? "border-b-4 border-green text-green"
                    : ""
                } px-3 py-2 text-base font-medium text-gray-900`}
                onClick={() => handleLinkClick(link)}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
