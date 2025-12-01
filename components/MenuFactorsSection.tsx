"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Trash2, ImagePlus, UtensilsCrossed, FileText } from 'lucide-react';

const factors = [
    {
        icon: <Trash2 className="w-12 h-12 text-red-500" />,
        title: "Simplify Your Menu",
        description: "Customers are switching to restaurants with simpler menus! Customers prefer Menus that are easy to browse and understand."
    },
    {
        icon: <ImagePlus className="w-12 h-12 text-blue-500" />,
        title: "Add photos",
        description: "Add photos of your top selling items. We will enhance it through our optimized editing service dedicated for Swiggy & Zomato."
    },
    {
        icon: <UtensilsCrossed className="w-12 h-12 text-orange-500" />,
        title: "Create Add-Ons",
        description: "Your competitors are increasing their order value by providing add ons and complementary dishes! Some Side dishes have the potential to be ordered frequently with dishes in your menu. Add them to your menu to increase your average order value."
    },
    {
        icon: <FileText className="w-12 h-12 text-green-500" />,
        title: "Add Descriptions",
        description: "A good dish description should include serving size, preparation style, ingredients, allergen info, and other information that will help consumers"
    }
];

const MenuFactorsSection = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        Few Important Factors of Your Menu on <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Swiggy</span> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-600">Zomato</span>
                    </h2>
                    <div className="w-24 h-1 bg-gray-300 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {factors.map((factor, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                            className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
                        >
                            <div className="mb-6 p-4 bg-gray-50 rounded-full">
                                {factor.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{factor.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {factor.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MenuFactorsSection;
