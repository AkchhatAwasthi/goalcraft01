"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const DashboardPreview = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        const section = document.getElementById('dashboard');
        if (section) observer.observe(section);

        return () => {
            if (section) observer.unobserve(section);
        };
    }, []);

    const graphs = [
        "/assets/graph-1.jpg",
        "/assets/graph-2.jpg",
        "/assets/graph-1-new.jpg",
        "/assets/graph-4.jpg"
    ];

    return (
        <section
            id="dashboard"
            className="w-full py-20 px-6 md:px-12 bg-gray-50"
            style={{ fontFamily: '"Helvetica Neue", sans-serif' }}
        >
            <div
                className={`relative max-w-7xl mx-auto rounded-2xl overflow-hidden border border-gray-200 backdrop-blur-md bg-white/80 shadow-lg transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}
            >
                <div className="p-10 space-y-3">
                    {/* Single Heading */}
                    <h3 className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-center">
                        MoM Performance Analytics
                    </h3>

                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-center">
                        See Our Strategy Driven Results
                    </p>

                    {/* Graphs Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {graphs.map((graph, idx) => (
                            <div
                                key={idx}
                                className="bg-white/40 rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 relative h-80 md:h-96"
                            >
                                <Image
                                    src={graph}
                                    alt={`Graph ${idx + 1}`}
                                    fill
                                    className="object-contain rounded-lg"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DashboardPreview;
