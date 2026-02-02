import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const logo =
    "https://res.cloudinary.com/dxq0nrirt/image/upload/v1767693826/LOGO_u0bmb7.png";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const handleBooking = () => {
    window.location.href = "https://www.fresha.com";
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <nav className="container-custom px-6">
        {/* ✅ Desktop */}
        <div className="hidden md:flex items-center justify-between py-6">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.04 }}
              className={`relative overflow-hidden transition-all duration-500 ${isScrolled ? "h-24 w-72" : "h-32 w-80"
                }`}
            >
              <img
                src={logo}
                alt="SAVÁ Ladies Beauty Salon"
                className="absolute inset-0 h-full w-full object-cover"
                style={{ objectPosition: "center" }}
              />
            </motion.div>
          </Link>

          {/* Nav */}
          <div className="flex items-center space-x-10 lg:space-x-14">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs tracking-[0.2em] text-brushed-gold hover:text-brushed-gold/70 transition-colors duration-300 font-bold uppercase relative group ${location.pathname === link.path ? "text-brushed-gold/90" : ""
                  }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 w-full h-[1px] bg-soft-ivory origin-left transition-transform duration-300 ${location.pathname === link.path
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                    }`}
                />
              </Link>
            ))}

            <button
              onClick={handleBooking}
              className="text-xs tracking-[0.2em] text-brushed-gold hover:text-brushed-gold/70 transition-colors duration-300 font-bold uppercase relative group"
            >
              Book Now
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-soft-ivory origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* ✅ Mobile */}
        <div className="flex md:hidden items-center justify-between py-5 relative">
          {/* Menu button */}
          <button
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            className="p-2 -ml-2 text-brushed-gold"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <FiX className="text-2xl" />
            ) : (
              <FiMenu className="text-2xl" />
            )}
          </button>

          {/* Bigger centered logo */}
          <Link to="/" className="absolute left-1/2 -translate-x-1/2">
            <div className="relative h-20 w-64 overflow-hidden">
              <img
                src={logo}
                alt="SAVÁ"
                className="absolute inset-0 h-full w-full object-cover"
                style={{ objectPosition: "center" }}
              />
            </div>
          </Link>

          {/* Spacer */}
          <div className="w-10" />
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              className="md:hidden absolute top-full left-0 right-0 bg-deep-mocha/95 backdrop-blur-md border-t border-soft-ivory/10"
            >
              <div className="py-10 px-6 flex flex-col items-center space-y-7">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-lg tracking-widest font-serif font-medium text-brushed-gold uppercase ${location.pathname === link.path ? "text-brushed-gold/70" : ""
                      }`}
                  >
                    {link.name}
                  </Link>
                ))}

                <button
                  onClick={handleBooking}
                  className="text-lg tracking-widest font-serif font-medium text-brushed-gold uppercase"
                >
                  Book Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
