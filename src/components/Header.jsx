import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiUser, FiMenu, FiX } from 'react-icons/fi';
import Button from './Button';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const logo = "https://res.cloudinary.com/dxq0nrirt/image/upload/v1767693826/LOGO_u0bmb7.png";

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contact' },
    ];

    const handleBooking = () => {
        window.location.href = 'https://www.fresha.com';
    };

    return (
        <header
            className={`absolute top-0 left-0 right-0 z-50 transition-all duration-500 bg-transparent py-6`}
        >
            <nav className="container-custom px-6">
                {/* Desktop Header */}
                <div className="hidden md:flex justify-between items-center h-24">
                    {/* Logo Left */}
                    <Link to="/" className="group flex-shrink-0">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className={`transition-all duration-500 ${isScrolled ? 'h-16' : 'h-24'}`}
                        >
                            <img
                                src={logo}
                                alt="SAVÁ Ladies Beauty Salon"
                                className="h-full w-auto object-contain"
                            />
                        </motion.div>
                    </Link>

                    {/* Navigation Right */}
                    <div className="flex items-center space-x-8 lg:space-x-12">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-xs tracking-[0.2em] text-brushed-gold hover:text-brushed-gold/70 transition-colors duration-300 font-bold uppercase relative group ${location.pathname === link.path ? 'text-brushed-gold/90' : ''
                                    }`}
                            >
                                {link.name}
                                <span className={`absolute -bottom-1 left-0 w-full h-[1px] bg-brushed-gold origin-left transition-transform duration-300 ${location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                            </Link>
                        ))}
                        <button
                            onClick={handleBooking}
                            className={`text-xs tracking-[0.2em] text-brushed-gold hover:text-brushed-gold/70 transition-colors duration-300 font-bold uppercase relative group`}
                        >
                            Book Now
                            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-brushed-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                        </button>
                    </div>
                </div>

                {/* Mobile Header */}
                <div className="flex md:hidden items-center justify-between">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 -ml-2 text-brushed-gold"
                    >
                        {isMobileMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
                    </button>

                    <Link to="/" className="absolute left-1/2 -translate-x-1/2">
                        <img
                            src={logo}
                            alt="SAVÁ"
                            className="h-14 w-auto object-contain"
                        />
                    </Link>

                    <div className="w-10"></div> {/* Spacer for symmetry with menu button */}
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-full left-0 right-0 bg-brown-bg/95 backdrop-blur-sm shadow-xl border-t border-brushed-gold/20 md:hidden overflow-hidden"
                        >
                            <div className="py-12 px-6 flex flex-col items-center space-y-8">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        className={`text-lg tracking-widest font-serif font-medium text-brushed-gold uppercase ${location.pathname === link.path ? 'text-brushed-gold/70' : ''
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
