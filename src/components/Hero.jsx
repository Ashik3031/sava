import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({
    image,
    title,
    subtitle,
    children,
    height = 'h-screen',
    overlay = 'bg-black/10',
    parallax = true
}) => {
    return (
        <div className={`relative ${height} flex items-center justify-center overflow-hidden`}>
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${image})`,
                    transform: parallax ? 'translateZ(0)' : 'none',
                }}
            />

            {/* Overlay */}
            <div className={`absolute inset-0 ${overlay}`} />

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-4xl">
                {title && (
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6"
                    >
                        {title}
                    </motion.h1>
                )}

                {subtitle && (
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl text-soft-ivory mb-8"
                    >
                        {subtitle}
                    </motion.p>
                )}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    {children}
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;