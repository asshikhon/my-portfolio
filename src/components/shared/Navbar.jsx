"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#skill", label: "Skills" },
  { href: "/#education", label: "Education" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

const Navbar = () => {
  const [scrollScreen, setScrollScreen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [open, setOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set isClient to true after the component is mounted
    setIsClient(true);

    const handleScroll = () => {
      setScrollScreen(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSetActive = (href) => setActiveLink(href);

  const handleLinkClick = (href) => {
    handleSetActive(href);
    setOpen(false);
    if (isClient) {
      window.location.hash = href.split("#")[1]; // navigate to the section
    }
  };

  return (
    <nav
      className={`fixed z-50 w-full p-6 ${
        scrollScreen ? "bg-[#000000] " : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-primary animate__animated animate__fadeInBottomRight text-4xl font-bold uppercase">Portfolio</div>
        <ul className="hidden md:flex animate__animated animate__rollIn space-x-4">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} legacyBehavior>
                <a
                  className={`text-white hover:text-primary ${
                    activeLink === link.href
                      ? "font-bold text-[#2EB9A6] border-b-2 border-primary"
                      : ""
                  }`}
                  onClick={() => handleLinkClick(link.href)}
                >
                  {link.label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      <div onClick={() => setOpen(false)}>
        <ul
          className={`md:hidden ${
            open ? "block" : "hidden"
          } bg-[#000000] rounded-xl p-4 text-[#FFF] space-y-2 w-32 text-center ml-auto`}
        >
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} legacyBehavior>
                <a
                  className={`block text-white hover:text-gray-300 ${
                    activeLink === link.href
                      ? "font-bold border-b-2 border-white rounded-lg"
                      : ""
                  }`}
                  onClick={() => handleLinkClick(link.href)}
                >
                  {link.label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
