import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contact' },
    ];

    const services = [
        { name: 'Nails', path: '/services#nails' },
        { name: 'Lashes', path: '/services#lashes' },
        { name: 'Hair (Coming Soon)', path: '/services#hair' },
        { name: 'Facials (Coming Soon)', path: '/services#facials' },
    ];

    return (
        <footer className="bg-brown-bg border-t border-brushed-gold/20 text-brushed-gold">
            <div className="container-custom px-6 md:px-12 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {/* Brand Section */}
                    <div className="text-center lg:text-left">
                        <h3 className="text-3xl font-serif font-bold tracking-tighter mb-6 relative inline-block lg:block">
                            SAVÁ
                            <span className="absolute -top-1 -right-3 w-2 h-2 bg-brushed-gold rounded-full animate-pulse"></span>
                        </h3>
                        <p className="text-sm text-brushed-gold/70 leading-relaxed font-light tracking-wide max-w-sm mx-auto lg:mx-0">
                            Your signature look begins here. Experience pure serenity and style at Abu Dhabi's premier beauty destination.
                        </p>
                    </div>

                    {/* Navigation - Explore */}
                    <div className="text-center lg:text-left">
                        <h4 className="text-xs uppercase tracking-widest font-bold mb-6 text-brushed-gold/90">Explore</h4>
                        <ul className="space-y-4">
                            {quickLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-sm text-brushed-gold/60 hover:text-brushed-gold transition-colors font-light tracking-wider"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Navigation - Services */}
                    <div className="text-center lg:text-left">
                        <h4 className="text-xs uppercase tracking-widest font-bold mb-6 text-brushed-gold/90">Services</h4>
                        <ul className="space-y-4">
                            {services.map((service) => (
                                <li key={service.path}>
                                    <Link
                                        to={service.path}
                                        className="text-sm text-brushed-gold/60 hover:text-brushed-gold transition-colors font-light tracking-wider"
                                    >
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className="text-center lg:text-left">
                        <h4 className="text-xs uppercase tracking-widest font-bold mb-6 text-brushed-gold/90">Connect</h4>
                        <div className="flex space-x-6 justify-center lg:justify-start mb-6">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xl text-brushed-gold hover:text-soft-ivory transition-colors"><FaInstagram /></a>
                            <a href="https://wa.me/971567870072" target="_blank" rel="noopener noreferrer" className="text-xl text-brushed-gold hover:text-soft-ivory transition-colors"><FaWhatsapp /></a>
                        </div>
                        <div className="text-sm text-brushed-gold/60 font-light tracking-wider space-y-2">
                            <p>Abu Dhabi, UAE</p>
                            <a href="mailto:info@savabeauty.ae" className="block hover:text-brushed-gold transition-colors underline-offset-4 hover:underline">info@savabeauty.ae</a>
                            <a href="tel:+971567870072" className="block hover:text-brushed-gold transition-colors underline-offset-4 hover:underline">+971 56 787 0072</a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-20 pt-8 border-t border-brushed-gold/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p className="text-xs text-brushed-gold/40 tracking-widest">
                        © {currentYear} SAVÁ. All rights reserved.
                    </p>
                    <div className="flex items-center space-x-2 text-xs text-brushed-gold/40 tracking-widest">
                        <span>Powered by</span>
                        <a href="https://fresha.com" className="font-bold hover:text-brushed-gold transition-colors">Fresha</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
