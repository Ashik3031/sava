import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import AnimatedSection from '../components/AnimatedSection';
import { serviceCategories } from '../data/services';
import { openFreshaBooking } from '../utils/freshaIntegration';

const Services = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-brown-bg pt-32 pb-20">
            {/* Header / Hero Section */}
            <section className="px-6 mb-24">
                <div className="container-custom text-center max-w-2xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm tracking-[0.3em] font-light text-brushed-gold/70 uppercase mb-6"
                    >
                        SERVICES
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl md:text-3xl font-serif text-brushed-gold leading-relaxed"
                    >
                        Luxury nail, beauty, and wellness treatments designed for modern lifestyles.
                    </motion.p>
                    <div className="w-12 h-[1px] bg-brushed-gold mx-auto mt-12 opacity-50"></div>
                </div>
            </section>

            {/* Services Content - Editorial List Style */}
            <div className="container-custom max-w-3xl px-6">
                <div className="space-y-24">
                    {serviceCategories.map((category, index) => (
                        <AnimatedSection key={category.id} delay={index * 0.1}>
                            <div className="mb-4">
                                <h2 className="text-xl md:text-2xl font-serif font-medium text-brushed-gold mb-2 tracking-wide">
                                    {category.title}
                                </h2>
                                {category.description && (
                                    <p className="text-brushed-gold/60 font-light text-sm tracking-wide mb-8">
                                        {category.description}
                                    </p>
                                )}
                            </div>

                            {/* Handle nested subsections if present */}
                            {category.items[0]?.subtitle ? (
                                <div className="space-y-12">
                                    {category.items.map((sub, subIndex) => (
                                        <div key={subIndex}>
                                            <h3 className="text-lg font-medium text-brushed-gold mb-6 italic">
                                                {sub.subtitle}
                                            </h3>
                                            <div className="space-y-6">
                                                {sub.items.map((item, i) => (
                                                    <div key={i} className="flex justify-between items-baseline group">
                                                        <span className="text-brushed-gold/90 font-light group-hover:text-brushed-gold transition-colors">
                                                            {item.name}
                                                        </span>
                                                        <span className="text-brushed-gold/60 font-light text-sm ml-4">
                                                            {item.price}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="space-y-8">
                                    {category.items.map((item, itemIndex) => (
                                        <div key={itemIndex} className="group">
                                            <div className="flex justify-between items-baseline mb-1">
                                                <h3 className="text-brushed-gold/90 font-light text-base group-hover:text-brushed-gold transition-colors">
                                                    {item.name}
                                                </h3>
                                                <span className="text-brushed-gold/60 font-light text-sm ml-8 whitespace-nowrap">
                                                    {item.price}
                                                </span>
                                            </div>
                                            {item.description && (
                                                <p className="text-brushed-gold/50 text-xs font-light max-w-md leading-relaxed">
                                                    {item.description}
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </AnimatedSection>
                    ))}
                </div>

                {/* Booking CTA Section */}
                <AnimatedSection className="mt-32 text-center">
                    <Button
                        size="large"
                        onClick={() => openFreshaBooking()}
                        className="rounded-none border-2 border-brushed-gold bg-transparent text-brushed-gold hover:bg-brushed-gold hover:text-brown-bg px-16 py-4 tracking-[0.2em] uppercase text-sm w-full md:w-auto shadow-none transition-all duration-500"
                    >
                        BOOK NOW
                    </Button>
                    <p className="mt-6 text-xs text-brushed-gold/40 tracking-widest uppercase">
                        Appointments subject to availability
                    </p>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default Services;
