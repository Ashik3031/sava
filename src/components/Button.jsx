import React from 'react';
import { motion } from 'framer-motion';

const Button = ({
    children,
    variant = 'primary',
    size = 'medium',
    onClick,
    href,
    className = '',
    ...props
}) => {
    const baseClasses = 'inline-block text-center font-medium rounded-full transition-all duration-300 cursor-pointer';

    const variants = {
        primary: 'bg-brushed-gold text-brown-bg hover:bg-soft-ivory hover:text-deep-mocha shadow-lg hover:shadow-gold-glow',
        secondary: 'border-2 border-brushed-gold text-brushed-gold hover:bg-brushed-gold hover:text-brown-bg',
        ghost: 'text-brushed-gold hover:bg-brushed-gold/10',
    };

    const sizes = {
        small: 'px-6 py-2 text-sm',
        medium: 'px-8 py-3 text-base',
        large: 'px-10 py-4 text-lg',
    };

    const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

    const content = (
        <motion.span
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="block"
        >
            {children}
        </motion.span>
    );

    if (href) {
        return (
            <a href={href} className={classes} {...props}>
                {content}
            </a>
        );
    }

    return (
        <button onClick={onClick} className={classes} {...props}>
            {content}
        </button>
    );
};

export default Button;
