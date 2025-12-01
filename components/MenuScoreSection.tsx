"use client";

import React from 'react';
import { motion } from 'framer-motion';

const MenuScoreSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Improve Your Menu Score, Improve Sales
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                    {/* Before Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="flex flex-col items-center"
                    >
                        <h3 className="text-2xl font-bold text-gray-800 mb-8">Before</h3>
                        <div className="relative w-full max-w-lg aspect-[16/10] mb-8 group">
                            <div className="absolute inset-0 bg-gray-200 rounded-xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                            <div className="relative h-full bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200 p-2">
                                <div className="h-full w-full bg-gray-50 rounded-lg overflow-hidden relative">
                                    {/* Simulated Laptop Screen - Low Score */}
                                    <img
                                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                                        alt="Dashboard Low Score"
                                        className="w-full h-full object-cover opacity-80 grayscale-[50%]"
                                    />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm border border-red-100">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                            <span className="font-bold text-red-600">Score: 33%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-600 text-center leading-relaxed max-w-md">
                            When these brand came to us there was no proper image, description or ADD Ons. The overall menu was not easy to read.
                        </p>
                    </motion.div>

                    {/* After Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="flex flex-col items-center"
                    >
                        <h3 className="text-2xl font-bold text-gray-800 mb-8">After</h3>
                        <div className="relative w-full max-w-lg aspect-[16/10] mb-8 group">
                            <div className="absolute inset-0 bg-green-100 rounded-xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
                            <div className="relative h-full bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200 p-2">
                                <div className="h-full w-full bg-gray-50 rounded-lg overflow-hidden relative">
                                    {/* Simulated Laptop Screen - High Score */}
                                    <img
                                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
                                        alt="Dashboard High Score"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm border border-green-100">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                            <span className="font-bold text-green-600">Score: 91%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        export default MenuScoreSection;
