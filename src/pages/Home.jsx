import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaShieldAlt, FaHeart, FaStar } from 'react-icons/fa';
import Button from '../components/Button';
import ServiceCard from '../components/ServiceCard';
import AnimatedSection from '../components/AnimatedSection';
import { nailsServices, lashesServices, comingSoonServices } from '../data/services';
import { openFreshaBooking } from '../utils/freshaIntegration';

const Home = () => {
    const [currentService, setCurrentService] = useState(0);

    const serviceData = [
        {
            text: 'beautiful nails',
            images: [
                'https://res.cloudinary.com/dxq0nrirt/image/upload/v1767444765/PHOTO-2024-12-06-11-51-09_2_snlbmz.jpg',
                'https://res.cloudinary.com/dxq0nrirt/image/upload/v1767444765/PHOTO-2024-12-06-11-50-56_trxltz.jpg',
                'https://res.cloudinary.com/dxq0nrirt/image/upload/v1767445084/healthy-beautiful-manicure-manicurist_scjqxj.jpg',
                'https://res.cloudinary.com/dxq0nrirt/image/upload/v1767445084/healthy-beautiful-manicure-manicurist_scjqxj.jpg',
                'https://res.cloudinary.com/dxq0nrirt/image/upload/v1767445399/2149820419_oecx6o.jpg',
                'https://res.cloudinary.com/dxq0nrirt/image/upload/v1767445445/2149820442_kwb2sw.jpg',
                'https://res.cloudinary.com/dxq0nrirt/image/upload/v1767445654/2366_m3nllc.jpg',
                'https://res.cloudinary.com/dxq0nrirt/image/upload/v1767445654/2914_p2lfc5.jpg',
            ]
        },
        {
            text: 'stunning lashes',
            images: [
                'https://res.cloudinary.com/dxq0nrirt/image/upload/v1767678824/12480_uqsac9.jpg',
                'https://res.cloudinary.com/dxq0nrirt/image/upload/v1767678824/6276_yz1lnt.jpg',
                'https://res.cloudinary.com/dxq0nrirt/image/upload/v1767678824/9312_zwtq81.jpg',
                'https://res.cloudinary.com/dxq0nrirt/image/upload/v1767678824/9331_g9kuum.jpg',
                'https://res.cloudinary.com/dxq0nrirt/image/upload/v1767679081/6366_pwhpgq.jpg',
                'https://res.cloudinary.com/dxq0nrirt/image/upload/v1767679082/261548_jfzduz.jpg',
                'https://res.cloudinary.com/dxq0nrirt/image/upload/v1767679082/28057_phxikp.jpg',
                'https://res.cloudinary.com/dxq0nrirt/image/upload/v1767679082/28057_phxikp.jpg',
            ]
        },
        {
            text: 'perfect style',
            images: [
                'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&q=80',
                'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&q=80',
                'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=400&q=80',
                'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=400&q=80',
                'https://images.unsplash.com/photo-1559599101-f09722fb4948?w=400&q=80',
                'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&q=80',
                'https://res.cloudinary.com/dxq0nrirt/image/upload/v1767445654/2914_p2lfc5.jpg',
                'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=400&q=80',
            ]
        },
        {
            text: 'pure serenity',
            images: [
                'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&q=80',
                'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80',
                'https://res.cloudinary.com/dxq0nrirt/image/upload/v1767679603/14607_xtooac.jpg',
                'https://res.cloudinary.com/dxq0nrirt/image/upload/v1767679603/8848_hxv27g.jpg',
                'https://res.cloudinary.com/dxq0nrirt/image/upload/v1767679603/2149513246_std35v.jpg',
                'https://images.unsplash.com/photo-1552693673-1bf958298935?w=400&q=80',
                'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&q=80',
                'https://images.unsplash.com/photo-1531983412531-1f49a365ffed?w=400&q=80',
            ]
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentService((prev) => (prev + 1) % serviceData.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    const featuredServices = [
        ...nailsServices.slice(0, 2),
        ...lashesServices.slice(0, 2),
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Pinterest-Inspired Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-30 pb-20 px-6">
                {/* Masonry Grid Background */}
                <div className="absolute inset-0 z-0">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentService}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.6 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8 h-full"
                        >
                            {serviceData[currentService].images.map((img, index) => (
                                <motion.div
                                    key={`${currentService}-${index}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className={`${index % 3 === 0 ? 'mt-12' : index % 2 === 0 ? 'mt-6' : ''
                                        }`}
                                >
                                    <img
                                        src={img}
                                        alt=""
                                        className="w-full h-48 md:h-64 object-cover rounded-2xl"
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Centered Content */}
                <div className="relative z-10 text-center max-w-4xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-deep-mocha mb-8"
                    >
                        Get your next
                    </motion.h1>

                    <div className="h-24 md:h-32 mb-8">
                        <AnimatePresence mode="wait">
                            <motion.h2
                                key={currentService}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-brushed-gold"
                            >
                                {serviceData[currentService].text}
                            </motion.h2>
                        </AnimatePresence>
                    </div>

                    {/* Dot Indicators */}
                    <div className="flex justify-center space-x-2 mb-12">
                        {serviceData.map((_, index) => (
                            <div
                                key={index}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentService ? 'bg-brushed-gold w-8' : 'bg-gray-300'
                                    }`}
                            />
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <Button
                            size="large"
                            onClick={() => openFreshaBooking()}
                            className="rounded-full px-12 py-4 text-lg shadow-lg hover:shadow-xl"
                        >
                            Book Your Appointment
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Welcome Section */}
            <section className="py-24 px-6">
                <div className="container-custom max-w-4xl text-center">
                    <AnimatedSection>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-deep-mocha tracking-widest mb-12">
                            WELCOME TO SAVÁ
                        </h2>

                        <p className="text-sm md:text-base italic text-gray-500 tracking-[0.2em] mb-12">
                            Satisfaction. Serenity. Style.
                        </p>

                        <div className="space-y-8 text-deep-mocha/80 leading-relaxed tracking-wide text-sm md:text-base max-w-3xl mx-auto mb-16">
                            <p>
                                At SAVÁ, we believe beauty is an experience that goes beyond the surface. It's an invitation to slow down, reconnect, and indulge in the simple luxury of self-care.
                            </p>
                            <p>
                                Our space is a sanctuary where beauty, wellness, and mindfulness seamlessly intertwine, offering a curated range of services from nails to lashes, and beyond.
                            </p>
                            <p>
                                Each treatment is designed to honor your individuality, providing a moment of peace, restoration, and effortless elegance.
                            </p>
                        </div>

                        <div className="mb-16">
                            <p className="text-xs tracking-[0.4em] uppercase font-bold text-deep-mocha/60">
                                NOW OPEN
                            </p>
                        </div>

                        <Button
                            onClick={() => openFreshaBooking()}
                            className="rounded-none bg-gray-500 hover:bg-gray-600 text-white px-12 py-4 tracking-[0.2em] uppercase text-sm transition-all duration-300"
                        >
                            BOOK NOW
                        </Button>
                    </AnimatedSection>
                </div>
            </section>

            {/* Visual Pause Section - Architectural/Luxury Feel */}
            <div
                className="relative h-[60vh] bg-fixed bg-center bg-cover"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=1920&q=80")'
                }}
            >
                <div className="absolute inset-0 bg-black/20" /> {/* Subtle text contrast overlay */}
                <div className="relative z-10 h-full flex items-center justify-center">
                    <AnimatedSection>
                        <p className="text-3xl md:text-5xl font-serif text-white italic tracking-wider opacity-90">
                            "Where detail meets serenity."
                        </p>
                    </AnimatedSection>
                </div>
            </div>

            {/* Minimal Services Section */}
            {/* Minimal Services Section - Redesigned */}
            <section className="py-24 px-6 bg-white">
                <div className="container-custom">
                    <AnimatedSection className="mb-16">
                        <h2 className="text-sm tracking-[0.2em] font-light text-gray-500 uppercase mb-4">
                            OUR SERVICES
                        </h2>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Service 1: Nails */}
                        <AnimatedSection delay={0.1}>
                            <motion.div
                                className="group cursor-pointer"
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="aspect-[4/5] overflow-hidden mb-6 bg-soft-ivory">
                                    <img
                                        src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=800&q=80"
                                        alt="Nails Services"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <h3 className="text-2xl font-serif italic text-deep-mocha mb-3 group-hover:text-brushed-gold transition-colors">
                                    Nails
                                </h3>
                                <p className="text-sm text-gray-500 leading-relaxed font-light">
                                    Healthy nails are at the heart of everything we do. Our treatments focus not just on beauty but on long-term health, using only vegan and cruelty-free products.
                                </p>
                            </motion.div>
                        </AnimatedSection>

                        {/* Service 2: Beauty (Coming Soon) */}
                        <AnimatedSection delay={0.2}>
                            <motion.div
                                className="group cursor-pointer"
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="aspect-[4/5] overflow-hidden mb-6 bg-soft-ivory relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80"
                                        alt="Beauty Services"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[20%]"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span className="bg-white/90 backdrop-blur px-4 py-1 text-xs tracking-widest uppercase">Coming Soon</span>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-serif italic text-deep-mocha mb-3 group-hover:text-brushed-gold transition-colors">
                                    Beauty
                                </h3>
                                <p className="text-sm text-gray-500 leading-relaxed font-light">
                                    Our beauty services are designed to nurture your skin and body with calm, conscious care. From soothing facials to restorative massages, purely for your wellness.
                                </p>
                            </motion.div>
                        </AnimatedSection>

                        {/* Service 3: Lashes & Brows */}
                        <AnimatedSection delay={0.3}>
                            <motion.div
                                className="group cursor-pointer"
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="aspect-[4/5] overflow-hidden mb-6 bg-soft-ivory">
                                    <img
                                        src="https://res.cloudinary.com/dxq0nrirt/image/upload/v1767434143/high-angle-female-clinician-doing-eyebrow-treatment-woman_seeplu.jpg"
                                        alt="Lashes & Brows"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <h3 className="text-2xl font-serif italic text-deep-mocha mb-3 group-hover:text-brushed-gold transition-colors">
                                    Lashes & Brows
                                </h3>
                                <p className="text-sm text-gray-500 leading-relaxed font-light">
                                    Beautiful brows and lifted lashes crafted with care. We focus on enhancing your natural features through gentle techniques and thoughtful formulas.
                                </p>
                            </motion.div>
                        </AnimatedSection>
                    </div>

                    <AnimatedSection className="text-center mt-20">
                        <Link
                            to="/services"
                            className="inline-block border border-deep-mocha bg-deep-mocha text-white px-10 py-3 text-sm tracking-[0.2em] font-medium hover:bg-transparent hover:text-deep-mocha transition-all duration-300"
                        >
                            VIEW ALL SERVICES
                        </Link>
                    </AnimatedSection>
                </div>
            </section>

            {/* Minimal Why Choose Section */}
            <section className="py-24 px-6 bg-soft-ivory">
                <div className="container-custom max-w-5xl">
                    <AnimatedSection className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-mocha">
                            Why SAVÁ
                        </h2>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { icon: <FaShieldAlt />, title: 'Hygiene & Safety', desc: 'Highest standards in cleanliness' },
                            { icon: <FaHeart />, title: 'Luxury with Heart', desc: 'Every detail designed with love' },
                            { icon: <FaStar />, title: 'Quality First', desc: 'Premium products and expertise' },
                        ].map((item, index) => (
                            <AnimatedSection key={index} delay={index * 0.15}>
                                <div className="text-center">
                                    <div className="text-5xl text-brushed-gold mb-4 flex justify-center">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-serif font-semibold text-deep-mocha mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600">{item.desc}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Simple CTA Section */}
            <section className="py-24 px-6">
                <div className="container-custom text-center max-w-3xl">
                    <AnimatedSection>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-mocha mb-6">
                            Ready to experience SAVÁ?
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Book your appointment today and discover the difference
                        </p>
                        <Button
                            size="large"
                            onClick={() => openFreshaBooking()}
                            className="rounded-full px-12"
                        >
                            Book Now
                        </Button>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};


export default Home;

