"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

const values = [
    {
        title: "Deep Collaboration With Partners",
        description: "Embracing deep collaboration with partners for shared success. Together, we navigate challenges and unlock opportunities, fostering a thriving and impactful alliance."
    },
    {
        title: "Focus on Results",
        description: "Our unwavering focus on results drives every endeavor. Committed to achieving excellence, we harness innovation and dedication, ensuring success for all stakeholders."
    },
    {
        title: "Constantly Improving",
        description: "Embracing a culture of constant improvement. Through innovation and adaptability, we evolve to exceed expectations and deliver exceptional experiences for our partners."
    }
];

const stats = [
    { value: "30+", label: "Partners" },
    { value: "3.8x", label: "Avg Revenue Increase" },
    { value: "60+", label: "Brands" },
    { value: "6", label: "Cities" }
];

const ValuesSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                        Values We Live By
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto mb-20">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="flex flex-col items-center text-center"
                        >
                            <div className="mb-6">
                                <CheckCircle className="w-16 h-16 text-green-500 fill-green-100" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {value.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16 border-t border-gray-100 pt-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.4 + (index * 0.1) }}
                            className="text-center group hover:-translate-y-1 transition-transform duration-300"
                        >
                            <div className="text-4xl md:text-6xl font-bold text-green-500 mb-2 group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                            <div className="text-lg text-gray-600 font-medium">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="text-center"
                >
                    <Link href="/contact">
                        <button className="px-10 py-4 bg-gradient-to-r from-yellow-500 to-slate-800 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                            Yes, I am Interested
                        </button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default ValuesSection;
