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
                <div className="flex flex-col md:flex-row justify-between items-start space-y-12 md:space-y-0">
                    {/* Brand Section */}
                    <div className="max-w-xs">
                        <h3 className="text-3xl font-serif font-bold tracking-tighter mb-6 relative">
                            SAVÁ
                            <span className="absolute -top-2 -right-2 w-2 h-2 bg-brushed-gold rounded-full animate-pulse"></span>
                        </h3>
                        <p className="text-sm text-brushed-gold/70 leading-relaxed font-light tracking-wide">
                            Your signature look begins here. Experience pure serenity and style at Abu Dhabi's premier beauty destination.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="grid grid-cols-2 gap-16">
                        <div>
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
                        <div>
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
                    </div>

                    {/* Contact Section */}
                    <div className="space-y-6 text-right md:text-left">
                        <div className="flex space-x-6 justify-end md:justify-start">
                            <a href="https://instagram.com" className="text-xl text-brushed-gold hover:text-soft-ivory transition-colors"><FaInstagram /></a>
                            <a href="https://wa.me/971XXXXXXXXX" className="text-xl text-brushed-gold hover:text-soft-ivory transition-colors"><FaWhatsapp /></a>
                        </div>
                        <div className="text-sm text-brushed-gold/60 font-light tracking-wider space-y-2">
                            <p>Abu Dhabi, UAE</p>
                            <p>info@savabeauty.ae</p>
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
