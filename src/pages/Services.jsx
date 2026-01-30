import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import Button from "../components/Button";
import { serviceCategories } from "../data/services";
import { openFreshaBooking } from "../utils/freshaIntegration";
import { FiPlus, FiMinus } from "react-icons/fi";

const Services = () => {
  const [openCategory, setOpenCategory] = useState(null);

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
      </section>

      {/* Accordion categories */}
      <div className="container-custom max-w-3xl px-6">
        <div className="space-y-10">
          {serviceCategories.map((category, index) => {
            const isOpen = openCategory === category.id;

            return (
              <AnimatedSection key={category.id} delay={index * 0.08}>
                <div className="border-t border-black/10">
                  {/* CATEGORY HEADER ROW */}
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className="w-full flex items-center justify-between py-6 text-left group"
                  >
                    <div>
                     <h2 className="text-lg md:text-xl tracking-[0.3em] uppercase font-light text-deep-mocha">

                        {category.title}
                      </h2>
                      {/* optional small description under title */}
                      {category.description && (
                        <p className="mt-2 text-xs text-gray-400 font-light max-w-2xl leading-relaxed">
                          {category.description}
                        </p>
                      )}
                    </div>

                    <span
                      className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center
                      group-hover:border-brushed-gold group-hover:text-brushed-gold transition-all"
                    >
                      {isOpen ? <FiMinus /> : <FiPlus />}
                    </span>
                  </button>

                  {/* CATEGORY BODY */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8">
                          {/* NESTED subtitles (Brows/Lashes etc.) */}
                          {category.items[0]?.subtitle ? (
                            <div className="space-y-10 pt-2">
                              {category.items.map((sub, subIndex) => (
                                <div key={subIndex}>
                                  <h3 className="text-sm tracking-widest uppercase text-gray-500 mb-4">
                                    {sub.subtitle}
                                  </h3>

                                  <div className="space-y-4">
                                    {sub.items.map((item, i) => (
                                      <div
                                        key={i}
                                        className="flex justify-between items-start border-b border-black/5 pb-3"
                                      >
                                        <div className="pr-6">
                                          <p className="text-gray-800 font-light">
                                            {item.name}
                                          </p>
                                          {item.description && (
                                            <p className="mt-1 text-xs text-gray-400 font-light max-w-md leading-relaxed">
                                              {item.description}
                                            </p>
                                          )}
                                        </div>

                                        <span className="text-gray-500 font-light text-sm whitespace-nowrap">
                                          {item.price}
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            /* NORMAL items */
                            <div className="space-y-4 pt-2">
                              {category.items.map((item, i) => (
                                <div
                                  key={i}
                                  className="flex justify-between items-start border-b border-black/5 pb-3"
                                >
                                  <div className="pr-6">
                                   <p className="text-base md:text-lg text-gray-800 font-light">

                                      {item.name}
                                    </p>
                                    {item.description && (
                                      <p className="mt-1 text-xs text-gray-400 font-light max-w-md leading-relaxed">
                                        {item.description}
                                      </p>
                                    )}
                                  </div>

                                  <span className="text-gray-500 font-light text-sm whitespace-nowrap">
                                    {item.price}
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Booking CTA */}
        <AnimatedSection className="mt-24 text-center">
          <Button
            size="large"
            onClick={() => openFreshaBooking()}
            className="rounded-none bg-deep-mocha text-white hover:bg-brushed-gold px-16 py-4 tracking-[0.2em] uppercase text-sm w-full md:w-auto shadow-none transition-all duration-500"
          >
            BOOK NOW
          </Button>
          <p className="mt-6 text-xs text-gray-400 tracking-widest uppercase">
            Appointments subject to availability
          </p>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Services;
