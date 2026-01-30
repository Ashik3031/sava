import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import AnimatedSection from '../components/AnimatedSection';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    return (
        <div className="min-h-screen bg-brown-bg pt-40 pb-20 px-6">
            <div className="container-custom max-w-4xl mx-auto">
                <AnimatedSection className="text-center mb-16">
                    <h1 className="text-3xl md:text-5xl font-serif font-light text-brushed-gold mb-6">
                        We'd love to hear from you!
                    </h1>
                    <p className="text-brushed-gold/70 font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
                        From feedback to questions, our team is here to assist you. Fill in the form below and we'll get back to you within 48hrs.
                    </p>
                </AnimatedSection>

                <AnimatedSection delay={0.1}>
                    <div className="max-w-2xl mx-auto">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-transparent border border-brushed-gold/40 rounded-md px-4 py-3 placeholder-brushed-gold/50 text-brushed-gold focus:outline-none focus:border-brushed-gold transition-colors"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Email *"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-transparent border border-brushed-gold/40 rounded-md px-4 py-3 placeholder-brushed-gold/50 text-brushed-gold focus:outline-none focus:border-brushed-gold transition-colors"
                                    />
                                </div>
                            </div>

                            <div>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border border-brushed-gold/40 rounded-md px-4 py-3 placeholder-brushed-gold/50 text-brushed-gold focus:outline-none focus:border-brushed-gold transition-colors"
                                />
                            </div>

                            <div>
                                <textarea
                                    name="message"
                                    placeholder="Comment"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="6"
                                    className="w-full bg-transparent border border-brushed-gold/40 rounded-md px-4 py-3 placeholder-brushed-gold/50 text-brushed-gold focus:outline-none focus:border-brushed-gold transition-colors resize-none"
                                ></textarea>
                            </div>

                            <div>
                                <Button
                                    type="submit"
                                    className="bg-transparent border border-brushed-gold text-brushed-gold hover:bg-brushed-gold hover:text-brown-bg px-10 py-3 rounded-md text-sm uppercase tracking-widest font-medium transition-all duration-300 w-full md:w-auto"
                                >
                                    Send
                                </Button>
                            </div>
                        </form>
                    </div>
                </AnimatedSection>

                {/* Location Section */}
                <AnimatedSection delay={0.2} className="mt-24">
                    <div className="relative h-[400px] w-full rounded-lg overflow-hidden group cursor-pointer border border-brushed-gold/30">
                        {/* Background Image (Salon Interior) */}
                        <img
                            src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=1200&q=80"
                            alt="SAVA Location"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-brown-bg/40 group-hover:bg-brown-bg/30 transition-colors duration-500" />

                        {/* Content */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                            <a
                                href="https://maps.app.goo.gl/XFMG5Xo6d3NDH7AC9?g_st=iwb"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transform transition-transform duration-300 group-hover:scale-110"
                            >
                                <div className="w-16 h-16 bg-brushed-gold/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-gold-glow mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brown-bg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </a>
                            <h3 className="text-2xl md:text-3xl font-serif text-white tracking-wide mb-2">
                                Visit Us
                            </h3>
                            <p className="text-white/90 font-light tracking-wider mb-6">
                                Abu Dhabi, UAE
                            </p>
                            <a
                                href="https://maps.app.goo.gl/XFMG5Xo6d3NDH7AC9?g_st=iwb"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block border border-white/50 text-white px-8 py-2 text-sm tracking-[0.2em] font-medium hover:bg-white hover:text-brown-bg transition-all duration-300 uppercase"
                            >
                                Get Directions
                            </a>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Optional Minimal Footer Info */}
                <AnimatedSection delay={0.3} className="mt-16 text-center">
                    <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12 text-sm font-light text-brushed-gold/60 tracking-wider">
                        <p>Abu Dhabi, UAE</p>
                        <span className="hidden md:block w-1 h-1 bg-brushed-gold/40 rounded-full"></span>
                        <a href="mailto:info@savabeauty.ae" className="hover:text-brushed-gold transition-colors">info@savabeauty.ae</a>
                        <span className="hidden md:block w-1 h-1 bg-brushed-gold/40 rounded-full"></span>
                        <a href="tel:+971567870072" className="hover:text-brushed-gold transition-colors">+971 56 787 0072</a>
                    </div>
                </AnimatedSection>
            </div>
        </div >
    );
};

export default Contact;
