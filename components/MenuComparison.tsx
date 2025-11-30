"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const MenuComparison = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        const section = document.getElementById('menu-comparison');
        if (section) observer.observe(section);

        return () => {
            if (section) observer.unobserve(section);
        };
    }, []);

    return (
        <section id="menu-comparison" className="w-full py-20 px-6 md:px-12 bg-background">
            <div className="max-w-7xl mx-auto space-y-16">
                <div
                    className={`text-center space-y-4 max-w-3xl mx-auto transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        Menu Overhaul Comparison
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        See how we transform your menu presentation for maximum impact
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
                    {/* Unoptimized Menu Phone */}
                    <div className={`transition-all duration-800 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                        }`}>
                        <div className="relative">
                            <div className="text-center mb-6">
                                <span className="inline-flex items-center gap-2 px-3 py-2 bg-red-50 text-red-700 rounded-lg text-sm font-medium border border-red-200">
                                    Unoptimized Menu
                                </span>
                            </div>

                            {/* iPhone mockup */}
                            <div className="relative mx-auto w-[260px] h-[520px] bg-gray-900 border-4 border-gray-700 rounded-[2.5rem] shadow-xl overflow-hidden">
                                {/* iPhone notch */}
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-28 h-5 bg-gray-900 rounded-b-xl z-10"></div>

                                {/* Screen content */}
                                <div className="h-full bg-white p-2 pt-6 overflow-hidden relative">
                                    <Image
                                        src="/assets/unorganized-menu.jpg"
                                        alt="Unoptimized Swiggy Zomato menu design before GoalCraft optimization"
                                        fill
                                        className="object-contain rounded-sm"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Arrow */}
                    <div className={`hidden lg:block transition-all duration-700 delay-200 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                        }`}>
                        <div className="text-primary/70">
                            <svg width="48" height="20" viewBox="0 0 48 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 10H46M46 10L38 2M46 10L38 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>

                    {/* Optimized Menu Phone */}
                    <div className={`transition-all duration-800 delay-300 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                        }`}>
                        <div className="relative">
                            <div className="text-center mb-6">
                                <span className="inline-flex items-center gap-2 px-3 py-2 bg-green-50 text-green-700 rounded-lg text-sm font-medium border border-green-200">
                                    Optimized Menu
                                </span>
                            </div>

                            {/* iPhone mockup */}
                            <div className="relative mx-auto w-[260px] h-[520px] bg-gray-900 border-4 border-gray-700 rounded-[2.5rem] shadow-xl overflow-hidden">
                                {/* iPhone notch */}
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-28 h-5 bg-gray-900 rounded-b-xl z-10"></div>

                                {/* Screen content */}
                                <div className="h-full bg-white p-2 pt-6 overflow-hidden relative">
                                    <Image
                                        src="/assets/organized-menu.jpg"
                                        alt="Optimized Swiggy Zomato menu design after GoalCraft menu redesign"
                                        fill
                                        className="object-contain rounded-sm"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MenuComparison;
