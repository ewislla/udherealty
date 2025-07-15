import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // Import icons
import logo from "/assets/logo1.svg"; // Adjust path if necessary

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <a href="#home">
          <img src={logo} alt="UDHE Logo" className="h-12 w-16 transition-all duration-300" />
        </a>

        {/* Mobile Toggle Button */}
        <button
          className={`md:hidden block transition-colors duration-300 ${
            isScrolled ? 'text-gray-900' : 'text-white'
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />} {/* Toggle Icon */}
        </button>

        {/* Navigation Menu */}
        <ul
          className={`md:flex md:space-x-8 absolute md:static top-16 left-0 w-full md:w-auto ${
            isScrolled ? 'bg-white' : 'bg-slate-900/95'
          } md:bg-transparent p-4 md:p-0 transition-all duration-300 ease-in-out backdrop-blur-lg ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <a href="#home" className={`block py-2 px-4 font-medium transition-colors duration-300 ${
              isScrolled 
                ? 'text-gray-700 hover:text-emerald-600' 
            <a href="#services" className="block py-2 px-4 hover:text-blue-600">
              Services
              Home
            </a>
          </li>
          <li>
            <a href="#services" className={`block py-2 px-4 font-medium transition-colors duration-300 ${
              isScrolled 
                ? 'text-gray-700 hover:text-emerald-600' 
                : 'text-white hover:text-emerald-400'
            }`}>
              Services
            </a>
          </li>
          <li>
            <a href="#testimonials" className={`block py-2 px-4 font-medium transition-colors duration-300 ${
              isScrolled 
                ? 'text-gray-700 hover:text-emerald-600' 
                : 'text-white hover:text-emerald-400'
            }`}>
              Success Stories
            </a>
          </li>
            <a href="#trust" className="block py-2 px-4 hover:text-blue-600">
              Why Us
            </a>
          </li>
          <li>
            <a href="#team" className="block py-2 px-4 hover:text-blue-600">
              Team
              isScrolled 
                ? 'text-gray-700 hover:text-emerald-600' 
                : 'text-white hover:text-emerald-400'
            }`}>
              About
            </a>
          </li>
          <li>
            <a href="#contact" className={`block py-2 px-4 font-medium transition-colors duration-300 ${
              isScrolled 
                ? 'text-gray-700 hover:text-emerald-600' 
                : 'text-white hover:text-emerald-400'
            }`}>
              Contact
            </a>
          </li>
          <li className="md:ml-4">
            <a 
              href="#contact" 
              className="block md:inline-block bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-2 px-6 rounded-lg font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 text-center"
            >
              Get Started
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
