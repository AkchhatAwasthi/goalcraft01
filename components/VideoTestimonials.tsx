"use client";

import React, { useState, useEffect } from 'react';

const VideoTestimonials = () => {
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

        const element = document.getElementById('video-testimonials');
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
            id="video-testimonials"
            className="py-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden"
        >
            {/* Background pattern */}
            <div className="absolute inset-0 cosmic-grid opacity-10"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div
                    className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                        Success Stories
                    </h2>
                    <div className="max-w-3xl mx-auto">
                        <div className="text-6xl md:text-8xl font-bold text-muted-foreground/20 mb-4">
                            Coming Soon
                        </div>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            We're preparing amazing video testimonials from our restaurant partners.
                            Stay tuned to see how GoalCraft has transformed their businesses!
                        </p>
                    </div>
                </div>

                {/* Call to Action */}
                <div
                    className={`text-center mt-16 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                        Ready to write your own success story? Join hundreds of restaurants that have transformed their business with GoalCraft.
                    </p>
                    <button
                        onClick={() => {
                            const footer = document.querySelector('footer');
                            footer?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="bg-primary text-primary-foreground hover:bg-primary/80 px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                        Start Your Transformation
                    </button>
                </div>
            </div>
        </section>
    );
};

export default VideoTestimonials;
