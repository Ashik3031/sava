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
        <div className="min-h-screen bg-soft-ivory pt-40 pb-20 px-6">
            <div className="container-custom max-w-4xl mx-auto">
                <AnimatedSection className="text-center mb-16">
                    <h1 className="text-3xl md:text-5xl font-serif font-light text-deep-mocha mb-6">
                        We'd love to hear from you!
                    </h1>
                    <p className="text-gray-500 font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
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
                                        className="w-full bg-transparent border border-gray-400 rounded-md px-4 py-3 placeholder-gray-500 text-deep-mocha focus:outline-none focus:border-deep-mocha transition-colors"
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
                                        className="w-full bg-transparent border border-gray-400 rounded-md px-4 py-3 placeholder-gray-500 text-deep-mocha focus:outline-none focus:border-deep-mocha transition-colors"
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
                                    className="w-full bg-transparent border border-gray-400 rounded-md px-4 py-3 placeholder-gray-500 text-deep-mocha focus:outline-none focus:border-deep-mocha transition-colors"
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
                                    className="w-full bg-transparent border border-gray-400 rounded-md px-4 py-3 placeholder-gray-500 text-deep-mocha focus:outline-none focus:border-deep-mocha transition-colors resize-none"
                                ></textarea>
                            </div>

                            <div>
                                <Button
                                    type="submit"
                                    className="bg-gray-500 text-white hover:bg-deep-mocha px-10 py-3 rounded-md text-sm uppercase tracking-widest font-medium transition-all duration-300"
                                >
                                    Send
                                </Button>
                            </div>
                        </form>
                    </div>
                </AnimatedSection>

                {/* Optional Minimal Footer Info */}
                <AnimatedSection delay={0.2} className="mt-24 text-center">
                    <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12 text-sm font-light text-gray-500 tracking-wider">
                        <p>Abu Dhabi, UAE</p>
                        <span className="hidden md:block w-1 h-1 bg-gray-400 rounded-full"></span>
                        <a href="mailto:info@savabeauty.ae" className="hover:text-deep-mocha transition-colors">info@savabeauty.ae</a>
                        <span className="hidden md:block w-1 h-1 bg-gray-400 rounded-full"></span>
                        <a href="tel:+97100000000" className="hover:text-deep-mocha transition-colors">+971 XX XXX XXXX</a>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default Contact;
