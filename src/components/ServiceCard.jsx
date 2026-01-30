import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const ServiceCard = ({
    image,
    title,
    description,
    price,
    duration,
    comingSoon = false,
    onBook
}) => {
    return (
        <motion.div
            whileHover={{ y: -8 }}
            className="bg-brown-bg/80 backdrop-blur-sm rounded-lg overflow-hidden border border-brushed-gold/20 transition-all duration-300 hover:border-brushed-gold/50 hover:shadow-gold-glow group"
        >
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                {comingSoon && (
                    <div className="absolute inset-0 bg-brown-bg/60 flex items-center justify-center">
                        <span className="bg-brushed-gold text-brown-bg px-6 py-2 rounded-full font-semibold border border-brown-bg/20">
                            Coming Soon
                        </span>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-2xl font-serif font-semibold text-brushed-gold mb-3 group-hover:text-white transition-colors">
                    {title}
                </h3>
                <p className="text-brushed-gold/70 mb-4 leading-relaxed text-sm font-light">
                    {description}
                </p>

                {!comingSoon && (
                    <>
                        <div className="flex justify-between items-center mb-4 text-sm text-brushed-gold/60">
                            {duration && <span>⏱ {duration}</span>}
                            {price && <span className="text-brushed-gold font-semibold text-base">{price}</span>}
                        </div>
                        <Button onClick={onBook} className="w-full" variant="secondary">
                            Book Now
                        </Button>
                    </>
                )}
            </div>
        </motion.div>
    );
};


export default ServiceCard;
