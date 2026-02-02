import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaShieldAlt, FaHeart, FaStar } from "react-icons/fa";
import Button from "../components/Button";
import AnimatedSection from "../components/AnimatedSection";
import { nailsServices, lashesServices } from "../data/services";
import { openFreshaBooking } from "../utils/freshaIntegration";

const Home = () => {
    const [currentService, setCurrentService] = useState(0);

    const serviceData = [
        {
            text: "beautiful nails",
            images: [
                "https://res.cloudinary.com/dxq0nrirt/image/upload/v1767444765/PHOTO-2024-12-06-11-51-09_2_snlbmz.jpg",
                "https://res.cloudinary.com/dxq0nrirt/image/upload/v1767444765/PHOTO-2024-12-06-11-50-56_trxltz.jpg",
                "https://res.cloudinary.com/dxq0nrirt/image/upload/v1767445084/healthy-beautiful-manicure-manicurist_scjqxj.jpg",
                "https://res.cloudinary.com/dxq0nrirt/image/upload/v1767445399/2149820419_oecx6o.jpg",
                "https://res.cloudinary.com/dxq0nrirt/image/upload/v1767445445/2149820442_kwb2sw.jpg",
                "https://res.cloudinary.com/dxq0nrirt/image/upload/v1767445654/2366_m3nllc.jpg",
            ],
        },
        {
            text: "stunning lashes",
            images: [
                "https://res.cloudinary.com/dxq0nrirt/image/upload/v1767678824/12480_uqsac9.jpg",
                "https://res.cloudinary.com/dxq0nrirt/image/upload/v1767678824/6276_yz1lnt.jpg",
                "https://res.cloudinary.com/dxq0nrirt/image/upload/v1767678824/9312_zwtq81.jpg",
                "https://res.cloudinary.com/dxq0nrirt/image/upload/v1767678824/9331_g9kuum.jpg",
                "https://res.cloudinary.com/dxq0nrirt/image/upload/v1767679081/6366_pwhpgq.jpg",
                "https://res.cloudinary.com/dxq0nrirt/image/upload/v1767679082/261548_jfzduz.jpg",
            ],
        },
        {
            text: "perfect style",
            images: [
                "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&q=80",
                "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&q=80",
                "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=400&q=80",
                "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=400&q=80",
                "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=400&q=80",
                "https://res.cloudinary.com/dxq0nrirt/image/upload/v1767445654/2914_p2lfc5.jpg",
            ],
        },
        {
            text: "pure serenity",
            images: [
                "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&q=80",
                "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80",
                "https://res.cloudinary.com/dxq0nrirt/image/upload/v1767679603/14607_xtooac.jpg",
                "https://res.cloudinary.com/dxq0nrirt/image/upload/v1767679603/8848_hxv27g.jpg",
                "https://res.cloudinary.com/dxq0nrirt/image/upload/v1767679603/2149513246_std35v.jpg",
                "https://images.unsplash.com/photo-1552693673-1bf958298935?w=400&q=80",
            ],
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentService((prev) => (prev + 1) % serviceData.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    const featuredServices = [...nailsServices.slice(0, 2), ...lashesServices.slice(0, 2)];

    return (
        <div className="min-h-screen bg-brown-bg">
            {/* Hero Section with Background Video */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background Video */}
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-60"
                    >
                        <source src="https://res.cloudinary.com/dxq0nrirt/video/upload/v1769779541/wmremove-transformed_fd6zz1.mp4" />
                    </video>
                    <div className="absolute inset-0 bg-brown-bg/40" />
                </div>

                {/* Content */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 min-h-screen flex items-center">
                    {/* ✅ responsive top spacing so header never overlaps */}
                    <div className="w-full pt-28 sm:pt-32 md:pt-40 lg:pt-44 pb-16">
                        <div className="max-w-2xl">
                            <motion.h1
                                initial={{ opacity: 0, y: 28 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-brushed-gold mb-2 leading-tight"
                            >
                                Satisfaction.
                            </motion.h1>

                            <motion.h2
                                initial={{ opacity: 0, y: 22 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-brushed-gold mb-2 leading-tight"
                            >
                                Serenity.
                            </motion.h2>

                            <motion.h2
                                initial={{ opacity: 0, y: 22 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-brushed-gold mb-10 sm:mb-12 md:mb-16 leading-tight"
                            >
                                Style.
                            </motion.h2>

                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                                <Button
                                    size="large"
                                    onClick={() => openFreshaBooking()}
                                    className="rounded-none border border-brushed-gold bg-transparent text-brushed-gold hover:bg-brushed-gold hover:text-brown-bg px-7 sm:px-10 md:px-12 py-4 text-xs sm:text-sm tracking-[0.2em] uppercase transition-all duration-300 w-full sm:w-auto sm:min-w-[280px]"
                                >
                                    BOOK APPOINTMENT
                                </Button>
                            </motion.div>
                        </div>

                        {/* optional: subtle rotating service text on mobile */}
                        <div className="mt-10 sm:mt-12 text-brushed-gold/60 text-xs tracking-[0.3em] uppercase">
                            <span className="opacity-70">Now featuring:</span>{" "}
                            <span className="text-brushed-gold/80">{serviceData[currentService].text}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* WELCOME */}
            <section className="py-16 sm:py-20 md:py-24 px-6 bg-brown-bg">
                <div className="container-custom max-w-4xl text-center">
                    <AnimatedSection>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light text-brushed-gold tracking-widest mb-8 sm:mb-10 md:mb-12">
                            ABOUT SAVÁ
                        </h2>

                        <p className="text-xs sm:text-sm md:text-base italic text-brushed-gold/70 tracking-[0.2em] mb-8 sm:mb-10 md:mb-12">
                            Satisfaction. Serenity. Style.
                        </p>

                        <div className="space-y-6 sm:space-y-7 text-brushed-gold/80 leading-relaxed tracking-wide text-sm md:text-base max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
                            <p>
                                At SAVÁ, we believe beauty is an experience that goes beyond the surface. It's an invitation to slow
                                down, reconnect, and indulge in the simple luxury of self-care.
                            </p>
                            <p>
                                Our space is a sanctuary where beauty, wellness, and mindfulness seamlessly intertwine, offering a
                                curated range of services from nails to lashes, and beyond.
                            </p>
                            <p>
                                Each treatment is designed to honor your individuality, providing a moment of peace, restoration, and
                                effortless elegance.
                            </p>
                        </div>

                        <div className="mb-10 sm:mb-12 md:mb-16">
                            <p className="text-[10px] sm:text-xs tracking-[0.4em] uppercase font-bold text-brushed-gold/60">
                                NOW OPEN
                            </p>
                        </div>

                        <Button
                            onClick={() => openFreshaBooking()}
                            className="rounded-none border-2 border-brushed-gold bg-transparent text-brushed-gold hover:bg-brushed-gold hover:text-brown-bg px-10 sm:px-12 py-4 tracking-[0.2em] uppercase text-xs sm:text-sm transition-all duration-300 w-full sm:w-auto"
                        >
                            BOOK NOW
                        </Button>
                    </AnimatedSection>
                </div>
            </section>

            {/* VISUAL PAUSE */}
            <div
                className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] bg-center bg-cover"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=1920&q=80")',
                }}
            >
                <div className="absolute inset-0 bg-brown-bg/60" />
                <div className="relative z-10 h-full flex items-center justify-center px-6">
                    <AnimatedSection>
                        <p className="text-2xl sm:text-3xl md:text-5xl font-serif text-brushed-gold italic tracking-wider opacity-90 text-center">
                            "Where detail meets serenity."
                        </p>
                    </AnimatedSection>
                </div>
            </div>

            {/* SERVICES GRID */}
            <section className="py-16 sm:py-20 md:py-24 px-6 bg-brown-bg">
                <div className="container-custom">
                    <AnimatedSection className="mb-12 sm:mb-14 md:mb-16">
                        <h2 className="text-4xl sm:text-6xl md:text-8xl tracking-[0.2em] font-light text-brushed-gold uppercase mb-12">
                            OUR SERVICES
                        </h2>
                    </AnimatedSection>

                    {/* ✅ responsive grid spacing */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
                        {/* Nails */}
                        <AnimatedSection delay={0.1}>
                            <motion.div className="group cursor-pointer" whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                                <div className="aspect-[4/5] overflow-hidden mb-5 sm:mb-6 bg-brown-bg/40 border border-brushed-gold/20">
                                    <img
                                        src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=800&q=80"
                                        alt="Nails Services"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                                    />
                                </div>
                                <h3 className="text-4xl sm:text-5xl font-serif italic text-brushed-gold mb-4 sm:mb-6 group-hover:text-brushed-gold/80 transition-colors">
                                    Nails
                                </h3>
                                <p className="text-sm text-brushed-gold/70 leading-relaxed font-light">
                                    Healthy nails are at the heart of everything we do. Our treatments focus not just on beauty but on
                                    long-term health, using only vegan and cruelty-free products.
                                </p>
                            </motion.div>
                        </AnimatedSection>

                        {/* Beauty */}
                        <AnimatedSection delay={0.2}>
                            <motion.div className="group cursor-pointer" whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                                <div className="aspect-[4/5] overflow-hidden mb-5 sm:mb-6 bg-brown-bg/40 border border-brushed-gold/20 relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80"
                                        alt="Beauty Services"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 grayscale-[20%]"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center bg-brown-bg/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span className="bg-brushed-gold/90 backdrop-blur px-4 py-1 text-xs tracking-widest uppercase text-brown-bg">
                                            Coming Soon
                                        </span>
                                    </div>
                                </div>
                                <h3 className="text-4xl sm:text-5xl font-serif italic text-brushed-gold mb-4 sm:mb-6 group-hover:text-brushed-gold/80 transition-colors">
                                    Beauty
                                </h3>
                                <p className="text-sm text-brushed-gold/70 leading-relaxed font-light">
                                    Our beauty services are designed to nurture your skin and body with calm, conscious care. From
                                    soothing facials to restorative massages, purely for your wellness.
                                </p>
                            </motion.div>
                        </AnimatedSection>

                        {/* Lashes */}
                        <AnimatedSection delay={0.3}>
                            <motion.div className="group cursor-pointer" whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                                <div className="aspect-[4/5] overflow-hidden mb-5 sm:mb-6 bg-brown-bg/40 border border-brushed-gold/20">
                                    <img
                                        src="https://res.cloudinary.com/dxq0nrirt/image/upload/v1767434143/high-angle-female-clinician-doing-eyebrow-treatment-woman_seeplu.jpg"
                                        alt="Lashes & Brows"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                                    />
                                </div>
                                <h3 className="text-4xl sm:text-5xl font-serif italic text-brushed-gold mb-4 sm:mb-6 group-hover:text-brushed-gold/80 transition-colors">
                                    Lashes & Brows
                                </h3>
                                <p className="text-sm text-brushed-gold/70 leading-relaxed font-light">
                                    Beautiful brows and lifted lashes crafted with care. We focus on enhancing your natural features
                                    through gentle techniques and thoughtful formulas.
                                </p>
                            </motion.div>
                        </AnimatedSection>

                        {/* Hair */}
                        <AnimatedSection delay={0.4}>
                            <motion.div className="group cursor-pointer" whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                                <div className="aspect-[4/5] overflow-hidden mb-5 sm:mb-6 bg-brown-bg/40 border border-brushed-gold/20 relative">
                                    <img
                                        src="/hair.jpg"
                                        alt="Hair Services"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[20%] opacity-80"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center bg-brown-bg/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span className="bg-brushed-gold/90 backdrop-blur px-4 py-1 text-xs tracking-widest uppercase text-brown-bg">
                                            Coming Soon
                                        </span>
                                    </div>
                                </div>

                                <h3 className="text-4xl sm:text-5xl font-serif italic text-brushed-gold mb-4 sm:mb-6 group-hover:text-brushed-gold/80 transition-colors">
                                    Hair
                                </h3>

                                <p className="text-sm text-brushed-gold/70 leading-relaxed font-light">
                                    Signature hair rituals are on the way — from nourishing treatments to elegant styling, designed to
                                    complement your SAVÁ experience.
                                </p>
                            </motion.div>
                        </AnimatedSection>
                    </div>

                    <AnimatedSection className="text-center mt-14 sm:mt-16 md:mt-20">
                        <Link
                            to="/services"
                            className="inline-block border-2 border-brushed-gold bg-transparent text-brushed-gold px-8 sm:px-10 py-3 text-xs sm:text-sm tracking-[0.2em] font-medium hover:bg-brushed-gold hover:text-brown-bg transition-all duration-300 w-full sm:w-auto"
                        >
                            VIEW ALL SERVICES
                        </Link>
                    </AnimatedSection>
                </div>
            </section>

            {/* WHY SAVÁ */}
            <section className="py-16 sm:py-20 md:py-24 px-6 bg-[#8D6E63]">
                <div className="container-custom max-w-5xl">
                    <AnimatedSection className="text-center mb-10 sm:mb-12 md:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-brushed-gold">Why SAVÁ</h2>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12">
                        {[
                            { icon: <FaShieldAlt />, title: "Hygiene & Safety", desc: "Highest standards in cleanliness" },
                            { icon: <FaHeart />, title: "Luxury with Heart", desc: "Every detail designed with love" },
                            { icon: <FaStar />, title: "Quality First", desc: "Premium products and expertise" },
                        ].map((item, index) => (
                            <AnimatedSection key={index} delay={index * 0.15}>
                                <div className="text-center">
                                    <div className="text-5xl text-brushed-gold mb-4 flex justify-center">{item.icon}</div>
                                    <h3 className="text-xl font-serif font-semibold text-brushed-gold mb-2">{item.title}</h3>
                                    <p className="text-brushed-gold/70">{item.desc}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* TEAM */}
            <section className="py-16 sm:py-20 md:py-24 px-6 bg-brown-bg">
                <div className="container-custom">
                    <AnimatedSection className="text-center mb-10 sm:mb-12 md:mb-16">
                        <h2 className="text-xs sm:text-sm tracking-[0.2em] font-light text-brushed-gold/70 uppercase mb-4">
                            EXPERTISE
                        </h2>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-brushed-gold">Meet Our Team</h2>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-12 max-w-6xl mx-auto">
                        {[
                            {
                                name: "Sarah Vance",
                                role: "Senior Stylist",
                                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80",
                            },
                            {
                                name: "Elena Brookes",
                                role: "Master Colorist",
                                image: "https://res.cloudinary.com/dxq0nrirt/image/upload/v1769772665/2149478921_lb5gv0.jpg",
                            },
                            {
                                name: "Maya Chen",
                                role: "Nail Artist",
                                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
                            },
                        ].map((member, index) => (
                            <AnimatedSection key={index} delay={index * 0.2}>
                                <div className="group text-center">
                                    <div className="relative mb-6 overflow-hidden aspect-[3/4] border border-brushed-gold/30">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                                        />
                                        <div className="absolute inset-0 bg-brown-bg/20 group-hover:bg-transparent transition-colors duration-500" />
                                    </div>
                                    <h3 className="text-2xl font-serif text-brushed-gold mb-1">{member.name}</h3>
                                    <p className="text-xs tracking-[0.2em] uppercase text-brushed-gold/70 font-medium">{member.role}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 sm:py-20 md:py-24 px-6 bg-brown-bg">
                <div className="container-custom text-center max-w-3xl">
                    <AnimatedSection>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-brushed-gold mb-6">
                            Ready to experience SAVÁ?
                        </h2>
                        <p className="text-base sm:text-lg text-brushed-gold/70 mb-8">
                            Book your appointment today and discover the difference
                        </p>
                        <Button
                            size="large"
                            onClick={() => openFreshaBooking()}
                            className="rounded-none border-2 border-brushed-gold bg-transparent text-brushed-gold hover:bg-brushed-gold hover:text-brown-bg px-10 sm:px-12 transition-all duration-300 w-full sm:w-auto"
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
