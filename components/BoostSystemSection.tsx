"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const features = [
    {
        title: "Done-for-you system",
        description: "A proven, done-for-you system that helps you improve your sales on Swiggy & Zomato."
    },
    {
        title: "1:1 support calls",
        description: "We'll guide you every step of the way with 1:1 support calls, onboarding, and premium live chat support."
    },
    {
        title: "Affordable plan",
        description: "An affordable one time that you can pay easily."
    }
];

const BoostSystemSection = () => {
    return (
        <section className="py-20 bg-[#0f172a] text-white">
            <div className="container mx-auto px-6 md:px-12 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        Get our system to boost sales and profits
                    </h2>
                    <p className="text-lg text-gray-300">
                        We maximize your restaurant's revenue on Swiggy & Zomato by systematic approach.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto mb-16">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
                            className="flex flex-col items-center"
                        >
                            <div className="mb-6">
                                <CheckCircle className="w-16 h-16 text-green-500 fill-green-500/20" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed max-w-xs mx-auto">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                >
                    <button className="px-10 py-4 bg-gradient-to-r from-yellow-600 to-red-600 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ring-2 ring-offset-2 ring-offset-[#0f172a] ring-red-500">
                        Yes, I am Interested
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default BoostSystemSection;
