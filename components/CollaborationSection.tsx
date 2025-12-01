"use client";

import React from 'react';
import { motion } from 'framer-motion';

const CollaborationSection = () => {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-8"
                    >
                        <div className="inline-block px-6 py-2 bg-cyan-100 rounded-full">
                            <span className="text-cyan-800 font-bold tracking-wide text-sm">SUCCESS, TOGETHER</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            Collaboration to Achieve Your Aspirations
                        </h2>

                        <p className="text-lg text-gray-600 leading-relaxed">
                            Unlike other consultants, digital marketing specialists, or YouTube gurus, we partner with you rather than sell Gyan. Our team is experts in fields ranging from restaurant operations to marketing, accounting, and more. We are here to make your life better!
                        </p>
                    </motion.div>

                    {/* Right Content - Image Collage */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative"
                    >
                        {/* Background Dots Pattern */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 opacity-20"
                            style={{ backgroundImage: 'radial-gradient(#3b82f6 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
                        <div className="absolute -bottom-10 -left-10 w-60 h-60 opacity-20"
                            style={{ backgroundImage: 'radial-gradient(#3b82f6 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>

                        <div className="grid grid-cols-2 gap-4 relative z-10">
                            <div className="row-span-2 relative rounded-2xl overflow-hidden shadow-lg h-[400px]">
                                <img
                                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop"
                                    alt="Team High Five"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="relative rounded-2xl overflow-hidden shadow-lg h-[190px]">
                                <img
                                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                                    alt="Business Meeting"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="relative rounded-2xl overflow-hidden shadow-lg h-[190px]">
                                <img
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                                    alt="Team Strategy"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CollaborationSection;
