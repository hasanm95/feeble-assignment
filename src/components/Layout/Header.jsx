import React, { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMenuOpen]);

  return (
    <header className="h-[100px] md:h-[120px] lg:h-[160px] flex items-center fixed top-0 left-0 right-0 z-[1000] bg-transparent">
      <div className="w-[92%] md:w-[90%] max-w-[1200px] h-[60px] md:h-[81px] mx-auto bg-white rounded-full flex justify-between items-center px-5 shadow-[0_1px_4px_rgba(29,32,38,0.05)]">
        <div className="flex items-center">
          <img src="/assets/logo.svg" alt="coup. logo" className="h-7 md:h-8" />
        </div>
        <nav className="hidden md:flex gap-8">
          <a
            href="#how-it-works"
            className="no-underline color-text-muted text-base font-medium transition-colors hover:text-primary"
          >
            How It Works
          </a>
          <a
            href="#pricing"
            className="no-underline color-text-muted text-base font-medium transition-colors hover:text-primary"
          >
            Pricing
          </a>
          <a
            href="#use-case"
            className="no-underline color-text-muted text-base font-medium transition-colors hover:text-primary"
          >
            Use Case
          </a>
          <a
            href="#faq"
            className="no-underline color-text-muted text-base font-medium transition-colors hover:text-primary"
          >
            FAQ
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden md:block bg-primary text-white py-[11px] px-[18px] rounded-full text-base font-medium transition-all hover:bg-primary-hover hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,122,255,0.25)]">
            Contact Sales
          </button>
          <button
            className="flex md:hidden items-center justify-center w-8 h-8 relative z-[2000]"
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <span
              className={`block w-6 h-[2px] bg-text-dark relative transition-all before:content-[''] before:absolute before:w-6 before:h-[2px] before:bg-text-dark before:-top-2 before:transition-all after:content-[''] after:absolute after:w-6 after:h-[2px] after:bg-text-dark after:-bottom-2 after:transition-all ${
                isMenuOpen
                  ? "bg-transparent before:rotate-45 before:top-0 after:-rotate-45 after:bottom-0"
                  : ""
              }`}
            ></span>
          </button>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white z-[1500] flex flex-col justify-center items-center p-8 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col gap-8 items-center">
          <a
            href="#how-it-works"
            className="no-underline text-text-dark text-2xl font-bold"
            onClick={closeMenu}
          >
            How It Works
          </a>
          <a
            href="#pricing"
            className="no-underline text-text-dark text-2xl font-bold"
            onClick={closeMenu}
          >
            Pricing
          </a>
          <a
            href="#use-case"
            className="no-underline text-text-dark text-2xl font-bold"
            onClick={closeMenu}
          >
            Use Case
          </a>
          <a
            href="#faq"
            className="no-underline text-text-dark text-2xl font-bold"
            onClick={closeMenu}
          >
            FAQ
          </a>
          <button
            className="py-3 px-7 bg-primary text-white rounded-full text-base font-medium transition-all hover:bg-primary-hover hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,122,255,0.25)]"
            onClick={closeMenu}
          >
            Contact Sales
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
