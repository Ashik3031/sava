import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import Hero from '../components/Hero';
import Button from '../components/Button';
import AnimatedSection from '../components/AnimatedSection';
import { openFreshaBooking } from '../utils/freshaIntegration';

const About = () => {
    const coreValues = [
        {
            title: 'Hygiene & Safety',
            description: 'We maintain the highest standards of cleanliness and sterilization, ensuring every tool and surface meets international safety protocols.',
        },
        {
            title: 'Luxury with Heart',
            description: 'Every detail is thoughtfully designed to create an atmosphere of elegance and warmth that makes you feel truly special.',
        },
        {
            title: 'Quality First',
            description: 'We use only premium, internationally recognized products and employ expert techniques to deliver exceptional results.',
        },
        {
            title: 'Personalization',
            description: 'Your unique preferences and needs guide every treatment, ensuring a truly customized beauty experience.',
        },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <Hero
                image="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80"
                title="About SAVÁ"
                subtitle="Where beauty meets intention and heart"
                height="h-[60vh]"
            />

            {/* Our Story Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <AnimatedSection>
                            <img
                                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80"
                                alt="SAVÁ Salon Interior"
                                className="rounded-lg shadow-soft w-full h-[500px] object-cover"
                            />
                        </AnimatedSection>

                        <AnimatedSection delay={0.2}>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-mocha mb-6">
                                Our Story
                            </h2>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>
                                    SAVÁ Ladies Beauty Salon is a high-end beauty destination offering personalized
                                    beauty experiences in an atmosphere of tranquility and elegance. Our name evokes
                                    satisfaction and balance — creating a subtle yet powerful emotional bond with every guest.
                                </p>
                                <p>
                                    We believe that beauty is more than skin deep. It's about how you feel when you
                                    walk through our doors and the confidence you carry when you leave. Every treatment
                                    is crafted with intention, every detail designed with care.
                                </p>
                                <p>
                                    Our philosophy is built on three pillars: <strong className="text-brushed-gold">Satisfaction</strong> through
                                    personalized treatments, <strong className="text-brushed-gold">Serenity</strong> in our elegant interiors
                                    and exceptional service, and <strong className="text-brushed-gold">Style</strong> that reflects your unique beauty.
                                </p>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="section-padding bg-soft-ivory">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <AnimatedSection>
                            <div className="bg-white p-8 md:p-10 rounded-lg shadow-soft h-full">
                                <h3 className="text-3xl font-serif font-bold text-deep-mocha mb-4">
                                    Our Vision
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    To deliver satisfaction through personalized treatments, elegant interiors,
                                    exceptional service, and a sensory experience that inspires repeat visits and
                                    brand loyalty. We strive to be the sanctuary where women rediscover their beauty
                                    and confidence.
                                </p>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={0.15}>
                            <div className="bg-white p-8 md:p-10 rounded-lg shadow-soft h-full">
                                <h3 className="text-3xl font-serif font-bold text-deep-mocha mb-4">
                                    Our Mission
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    To be Abu Dhabi's most cherished beauty destination, offering curated, thoughtful
                                    luxury to women who seek more than just beauty — they seek serenity. We are committed
                                    to creating experiences that transform not just appearances, but spirits.
                                </p>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <AnimatedSection className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-mocha mb-4">
                            Our Core Values
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            The principles that guide everything we do
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {coreValues.map((value, index) => (
                            <AnimatedSection key={index} delay={index * 0.1}>
                                <div className="flex items-start space-x-4 p-6 rounded-lg hover:bg-lavender-mist/30 transition-colors duration-300">
                                    <FaCheckCircle className="text-brushed-gold text-2xl flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="text-xl font-serif font-semibold text-deep-mocha mb-2">
                                            {value.title}
                                        </h4>
                                        <p className="text-gray-600 leading-relaxed">
                                            {value.description}
                                        </p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* What Makes SAVÁ Special */}
            <section className="section-padding bg-lavender-mist">
                <div className="container-custom">
                    <AnimatedSection>
                        <div className="max-w-4xl mx-auto text-center">
                            <blockquote className="text-2xl md:text-3xl font-serif italic text-deep-mocha leading-relaxed">
                                "SAVÁ Ladies Beauty Salon is where women come not just to be transformed —
                                but to be understood, fulfilled, and cared for. We don't just offer services —
                                we create beauty with intention and heart."
                            </blockquote>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <AnimatedSection className="text-center">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-mocha mb-6">
                            Experience the SAVÁ Difference
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                            Join us and discover a beauty experience that's truly personal,
                            luxurious, and transformative.
                        </p>
                        <Button size="large" onClick={() => openFreshaBooking()}>
                            Book Your Appointment
                        </Button>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

export default About;
