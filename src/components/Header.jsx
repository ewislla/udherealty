import { useState } from "react";
import { Menu, X } from "lucide-react"; // Import icons
import logo from "/assets/logo1.svg"; // Adjust path if necessary

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#AFD4E2] fixed top-0 w-full z-10 ">
      <nav className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <a href="#home">
          <img src={logo} alt="UDHE Logo" className="h-14 w-20" /> {/* Adjusted size */}
        </a>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden block text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />} {/* Toggle Icon */}
        </button>

        {/* Navigation Menu */}
        <ul
          className={`md:flex md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-[#AFD4E2] md:bg-transparent p-4 md:p-0 transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <a href="#home" className="block py-2 px-4 hover:text-blue-600">
              Home
            </a>
          </li>
          <li>
            <a href="#projects" className="block py-2 px-4 hover:text-blue-600">
              Projects
            </a>
          </li>
          <li>
            <a href="#vision" className="block py-2 px-4 hover:text-blue-600">
              Vision
            </a>
          </li>
          <li>
            <a href="#about" className="block py-2 px-4 hover:text-blue-600">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="block py-2 px-4 hover:text-blue-600">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
