"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const AboutUs = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById('about-us');
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    return (
        <section
            id="about-us"
            className="py-20 bg-background"
        >
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content - Left Side */}
                    <div className={`space-y-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}>
                        <div className="space-y-6">
                            <h3 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                                About GoalCraft
                            </h3>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                At GoalCraft, we don't just promise restaurant growth — we engineer it. Founded by industry experts <span className="font-semibold text-primary">Saurabh Kr</span> and <span className="font-semibold text-primary">Vipin Singh</span>, our team brings over a decade of food-tech mastery and hands-on experience driving millions of daily orders on platforms like <span className="text-red-500"> Zomato </span>and <span className="text-orange-500">Swiggy</span>.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                We specialize in turning online menus into revenue powerhouses with precision menu engineering, strategic positioning, and data-driven insights that boost visibility, maximize margins, and attract loyal customers. From optimizing listings for higher conversions to streamlining operations for faster deliveries, we help restaurants rise above the noise and own their market.
                            </p>
                        </div>
                    </div>

                    {/* Image - Right Side */}
                    <div className={`order-first lg:order-last transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}>
                        <div className="relative group">
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-3xl group-hover:scale-105 relative">
                                <Image
                                    src="https://raw.githubusercontent.com/codeandcanvas18/goalcraft/main/White%20and%20Black%20Minimalist%20Graduation%20Video.jpg"
                                    alt="GoalCraft restaurant consulting team analyzing Swiggy Zomato menu optimization strategies"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            {/* Decorative gradient overlay */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                            {/* Floating elements for visual interest */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-pulse group-hover:scale-125 transition-transform duration-500"></div>
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse delay-1000 group-hover:scale-125 transition-transform duration-500"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
