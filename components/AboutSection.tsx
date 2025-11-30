"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const AboutSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
            }
        }, {
            threshold: 0.1
        });
        const element = document.getElementById('about-section');
        if (element) {
            observer.observe(element);
        }
        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    const btsImages = [{
        id: 1,
        src: "/assets/pic1.jpeg",
        alt: "GoalCraft restaurant consultation in progress"
    }, {
        id: 2,
        src: "/assets/pic2.jpeg",
        alt: "Menu optimization session with restaurant team"
    }, {
        id: 3,
        src: "/assets/pic3.jpeg",
        alt: "Food photography and styling for online platforms"
    },
    {
        id: 9,
        src: "/assets/bts-9.jpg",
        alt: "On-site restaurant consultation and analysis"
    }, {
        id: 10,
        src: "/assets/bts-10.jpg",
        alt: "Menu positioning and pricing strategy session"
    }, {
        id: 11,
        src: "/assets/bts-11.jpg",
        alt: "Restaurant branding and positioning workshop"
    }, {
        id: 12,
        src: "/assets/bts-12.jpg",
        alt: "Delivery optimization and logistics planning"
    }, {
        id: 13,
        src: "/assets/bts-13.jpg",
        alt: "Customer engagement strategy development"
    }, {
        id: 14,
        src: "/assets/pic4.jpeg",
        alt: "Revenue maximization planning session"
    }];

    return (
        <section id="about-section" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" style={{
                        fontFamily: 'Helvetica Neue, Arial, sans-serif'
                    }}>PhotoShoot with Goalcraft</h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed" style={{
                        fontFamily: 'Helvetica Neue, Arial, sans-serif'
                    }}>Goalcraft Consultancy helps restaurants grow through tailored services and strategic optimization. Take a look at our restaurant shoots and consulting work.</p>
                </div>

                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    {btsImages.map((image, index) => (
                        <div key={image.id} className={`group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-500 delay-${index * 100}`} style={{
                            animationDelay: `${index * 0.1}s`
                        }}>
                            <div className="aspect-[4/3] overflow-hidden relative">
                                <Image src={image.src} alt={image.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <p className="text-sm font-medium" style={{
                                            fontFamily: 'Helvetica Neue, Arial, sans-serif'
                                        }}>
                                            {image.alt}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={`text-center mt-16 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <p className="text-muted-foreground max-w-2xl mx-auto" style={{
                        fontFamily: 'Helvetica Neue, Arial, sans-serif'
                    }}>
                        Our team works closely with restaurants to capture their unique story and optimize their operations for maximum growth and customer engagement.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
