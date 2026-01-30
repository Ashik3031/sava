import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import Button from "../components/Button";
import { serviceCategories } from "../data/services";
import { openFreshaBooking } from "../utils/freshaIntegration";
import { FiPlus, FiMinus } from "react-icons/fi";

const Services = () => {
  const [openCategory, setOpenCategory] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleCategory = (id) => {
    setOpenCategory((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen bg-brown-bg pt-32 pb-20">
      {/* Header / Hero */}
      <section className="px-6 mb-20">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm tracking-[0.35em] font-light text-brushed-gold/70 uppercase mb-6"
          >
            SERVICES
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-4xl font-serif text-brushed-gold leading-relaxed"
          >
            Luxury nail, beauty, and wellness treatments designed for modern lifestyles.
          </motion.p>

          <div className="w-16 h-[1px] bg-brushed-gold mx-auto mt-10 opacity-40" />
        </div>
      </section>

      {/* Accordion Categories */}
      <div className="container-custom max-w-4xl px-6">
        <div className="space-y-3">
          {serviceCategories.map((category, index) => {
            const isOpen = openCategory === category.id;

            return (
              <AnimatedSection key={category.id} delay={index * 0.06}>
                <div className="border-t border-brushed-gold/20">
                  {/* Header Row */}
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className="w-full flex items-center justify-between py-7 text-left group"
                  >
                    <div className="pr-8">
                      <h2 className="text-lg md:text-2xl tracking-[0.25em] uppercase font-light text-brushed-gold">
                        {category.title}
                      </h2>

                      {category.description && (
                        <p className="mt-3 text-sm md:text-base text-brushed-gold/60 font-light leading-relaxed max-w-3xl">
                          {category.description}
                        </p>
                      )}
                    </div>

                    {/* Plus / Minus */}
                    <span
                      className="w-11 h-11 rounded-full border border-brushed-gold/40 flex items-center justify-center
                      text-brushed-gold/80 group-hover:border-brushed-gold group-hover:text-brushed-gold transition-all"
                    >
                      {isOpen ? <FiMinus size={18} /> : <FiPlus size={18} />}
                    </span>
                  </button>

                  {/* Body */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-10 pt-1">
                          {/* Nested sections (Brow Bar, Lash Bar...) */}
                          {category.items[0]?.subtitle ? (
                            <div className="space-y-10">
                              {category.items.map((sub, subIndex) => (
                                <div key={subIndex}>
                                  <h3 className="text-sm md:text-base tracking-[0.25em] uppercase text-brushed-gold/70 mb-5">
                                    {sub.subtitle}
                                  </h3>

                                  <div className="space-y-5">
                                    {sub.items.map((item, i) => (
                                      <div
                                        key={i}
                                        className="flex justify-between gap-8 border-b border-brushed-gold/10 pb-4"
                                      >
                                        <div className="min-w-0">
                                          <p className="text-base md:text-lg text-brushed-gold/90 font-light">
                                            {item.name}
                                          </p>

                                          {item.description && (
                                            <p className="mt-2 text-sm text-brushed-gold/55 font-light leading-relaxed max-w-2xl">
                                              {item.description}
                                            </p>
                                          )}
                                        </div>

                                        <span className="text-brushed-gold/70 font-light text-base md:text-lg whitespace-nowrap">
                                          {item.price}
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            /* Normal items */
                            <div className="space-y-5">
                              {category.items.map((item, i) => (
                                <div
                                  key={i}
                                  className="flex justify-between gap-8 border-b border-brushed-gold/10 pb-4"
                                >
                                  <div className="min-w-0">
                                    <p className="text-base md:text-lg text-brushed-gold/90 font-light">
                                      {item.name}
                                    </p>

                                    {item.description && (
                                      <p className="mt-2 text-sm text-brushed-gold/55 font-light leading-relaxed max-w-2xl">
                                        {item.description}
                                      </p>
                                    )}
                                  </div>

                                  <span className="text-brushed-gold/70 font-light text-base md:text-lg whitespace-nowrap">
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

        {/* CTA */}
        <AnimatedSection className="mt-20 text-center">
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
