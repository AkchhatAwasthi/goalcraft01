"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const GrowthHero = () => {
    return (
        <div className="relative w-full h-[600px] md:h-[700px] flex items-center overflow-hidden bg-white/50">
            {/* Background Elements matching HeroSection */}
            <div className="absolute inset-0 cosmic-grid opacity-30"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full">
                <div className="w-full h-full opacity-10 bg-primary blur-[120px]"></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="max-w-3xl">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-4xl md:text-6xl font-bold text-foreground leading-tight mb-6"
                        >
                            Grow Your Sales on <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Swiggy</span> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-600">Zomato</span>.
                            <br />
                            Fast and Easy.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed"
                        >
                            We will help you grow your sales on Swiggy & Zomato by <span className="font-bold text-foreground">2X at least</span>.
                            Join our menu redevelopment service and watch your business thrive.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        >
                            <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-cyan-600 to-red-600 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-red-500/30 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                                <span className="mr-2">Yes, I am Interested</span>
                                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                                <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </button>
                        </motion.div>
                    </div>

                    {/* Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="relative hidden md:block"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                            <img
                                src=""
                                alt="Restaurant Growth"
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        </div>
                        {/* Floating elements */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg animate-bounce">
                            <div className="flex items-center gap-2">
                                <span className="text-2xl">🚀</span>
                                <div>
                                    <p className="text-xs text-gray-500">Growth</p>
                                    <p className="font-bold text-green-600">+200% Sales</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default GrowthHero;
