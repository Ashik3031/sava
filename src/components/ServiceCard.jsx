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
            className="bg-white rounded-lg overflow-hidden shadow-soft transition-all duration-300 hover:shadow-gold-glow"
        >
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                {comingSoon && (
                    <div className="absolute inset-0 bg-deep-mocha/80 flex items-center justify-center">
                        <span className="bg-brushed-gold text-white px-6 py-2 rounded-full font-semibold">
                            Coming Soon
                        </span>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-2xl font-serif font-semibold text-deep-mocha mb-3">
                    {title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                    {description}
                </p>

                {!comingSoon && (
                    <>
                        <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
                            {duration && <span>⏱ {duration}</span>}
                            {price && <span className="text-brushed-gold font-semibold text-base">{price}</span>}
                        </div>
                        <Button onClick={onBook} className="w-full">
                            Book Now
                        </Button>
                    </>
                )}
            </div>
        </motion.div>
    );
};

export default ServiceCard;
