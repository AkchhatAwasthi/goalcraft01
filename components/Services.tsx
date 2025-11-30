"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Services = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
            }
        }, {
            threshold: 0.1
        });

        const element = document.getElementById('services');
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    const services = [
        {
            id: 1,
            title: "Zomato & Swiggy Business Growth",
            image: "/assets/service-aggregator.jpg",
            shortDescription: "Maximize your restaurant's potential on major food delivery platforms.",
            details: [
                "Revenue growth from aggregator platforms",
                "Extracting maximum benefits from aggregator platforms",
                "Hygiene checks, setting up profiles and maintaining pages on these platforms",
                "One point contact for all"
            ]
        },
        {
            id: 2,
            title: "Menu Strategy & Designing",
            image: "/assets/service-menu.jpg",
            shortDescription: "Expert menu engineering to boost profitability and customer appeal.",
            details: [
                "Building and revamping menu",
                "Analyzing food costing",
                "Styling menu as per market preference and trends",
                "Recipe fixing",
                "Waste management"
            ]
        },
        {
            id: 3,
            title: "Business Expansion & Legal",
            image: "/assets/service-expansion.jpg",
            shortDescription: "Strategic guidance for scaling your restaurant business legally and efficiently.",
            details: [
                "Scouting ideal location",
                "Market research and data",
                "Comparative analysis with existing players",
                "Franchise distribution",
                "Government compliances and legal formalities"
            ]
        },
        {
            id: 4,
            title: "User Experience Optimization",
            image: "/assets/service-customer.jpg",
            shortDescription: "Enhance customer satisfaction and loyalty through data-driven insights.",
            details: [
                "Handling user grievances",
                "Feedback generation",
                "Extracting valuable suggestions and incorporating the same"
            ]
        },
        {
            id: 5,
            title: "Digital Marketing & Branding",
            image: "/assets/service-marketing.jpg",
            shortDescription: "Comprehensive digital strategies to build a strong restaurant brand.",
            details: [
                "Social media publishing, campaigns, posters, and reports",
                "SMS campaigns",
                "Branding and packaging"
            ]
        },
        {
            id: 6,
            title: "Performance Analytics & Reports",
            image: "/assets/service-reports.jpg",
            shortDescription: "Detailed monthly reports to track growth and identify opportunities.",
            details: [
                "Timely reports to clients on business performance",
                "Complete analysis and solutions to roadblocks",
                "Plan of action for future"
            ]
        }
    ];

    return (
        <section id="services" className="py-24" style={{ backgroundColor: '#0B1E3F' }}>
            <div className="container mx-auto px-4">
                <div className={`text-center mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Our Services
                    </h2>
                    <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
                        Comprehensive solutions to transform your restaurant business and maximize growth potential through expert consulting and strategic innovation.
                    </p>
                </div>

                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={`group relative h-[400px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 delay-${index * 100}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Default State (White Card) */}
                            <div className="absolute inset-0 bg-white flex flex-col transition-opacity duration-500 group-hover:opacity-0">
                                <div className="relative h-[75%] w-full overflow-hidden">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        priority={index < 3}
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/60 to-transparent" />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 h-[30%] flex items-center justify-center px-6 pb-4">
                                    <h3 className="text-xl font-bold text-slate-800 text-center leading-tight relative z-10">
                                        {service.title}
                                    </h3>
                                </div>
                                {/* Hidden SEO text */}
                                <p className="sr-only">{service.shortDescription}</p>
                            </div>

                            {/* Hover State (Dark Blue Card) */}
                            <div className="absolute inset-0 bg-[#0B1E3F] p-8 flex flex-col justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out border border-white/10">
                                <h3 className="text-xl font-bold text-white mb-6 text-center border-b border-white/10 pb-4">
                                    {service.title}
                                </h3>
                                <ul className="space-y-3">
                                    {service.details.map((detail, detailIndex) => (
                                        <li key={detailIndex} className="text-sm text-white/90 flex items-start">
                                            <span className="text-primary mr-3 mt-1 shrink-0">•</span>
                                            <span className="leading-relaxed font-light">{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-auto pt-4 flex justify-center">
                                    <span className="text-xs font-medium text-white/60 uppercase tracking-wider">
                                        Learn More
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={`text-center mt-20 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <p className="text-white/80 max-w-2xl mx-auto">
                        Partner with GoalCraft to unlock your restaurant's full potential.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Services;
