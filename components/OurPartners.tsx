"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { partnerLogos } from '@/app/data/ourPartners';

const OurPartners = () => {
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

        const element = document.getElementById('our-partners');
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    // Duplicate the logos array for seamless infinite scroll
    const duplicatedLogos = [...partnerLogos, ...partnerLogos];

    return (
        <section
            id="our-partners"
            className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background"
        >
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_hsl(var(--primary)/0.1)_0%,_transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_hsl(var(--accent)/0.1)_0%,_transparent_50%)]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div
                    className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                        Our Partners
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Trusted by the best in the business
                    </p>
                </div>

                {/* Marquee Container */}
                <div
                    className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                        }`}
                >
                    {/* Gradient overlays for seamless scroll effect */}
                    <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-background to-transparent z-10" />
                    <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-background to-transparent z-10" />

                    {/* Scrolling logos */}
                    <div className="flex animate-[marquee_15s_linear_infinite]">
                        {duplicatedLogos.map((partner, index) => (
                            <div
                                key={`${partner.id}-${index}`}
                                className="flex-shrink-0 mx-1 md:mx-2 group"
                            >
                                {/* Outer circle (gray outline) */}
                                <div className="relative w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full border-2 border-border/50 p-1 group-hover:border-primary/50 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">
                                    {/* Inner circle (logo container) */}
                                    <div className="w-full h-full rounded-full bg-background border border-border/30 flex items-center justify-center overflow-hidden shadow-sm group-hover:shadow-lg transition-all duration-500 p-2 group-hover:bg-gradient-to-br group-hover:from-background group-hover:to-primary/5 relative">
                                        <Image
                                            src={partner.logoUrl}
                                            alt={partner.alt}
                                            fill
                                            className="object-contain transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                                            onError={(e) => {
                                                // Fallback to placeholder if image fails to load
                                                // Note: onError on Next.js Image is different, but for now we'll keep it simple or remove it if it causes issues.
                                                // Next.js Image doesn't support direct DOM manipulation like this easily.
                                                // We'll remove the complex fallback for now to avoid hydration errors.
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurPartners;
