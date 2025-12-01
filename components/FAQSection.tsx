"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
    {
        question: "How much revenue increase can I expect?",
        answer: "While results vary based on location and cuisine, our partners typically see a 2x to 3.8x increase in revenue within the first 3 months of implementing our strategies."
    },
    {
        question: "Do you handle food photography?",
        answer: "Yes! We provide professional food photography services to make your menu visually appealing, which is a key factor in converting visitors into customers on Swiggy and Zomato."
    },
    {
        question: "Is this service for new or existing restaurants?",
        answer: "We work with both! Whether you're launching a new cloud kitchen or have an established dine-in restaurant looking to grow your delivery business, our strategies are tailored to your specific stage and goals."
    },
    {
        question: "How long does it take to see results?",
        answer: "You can start seeing improvements in your menu score and visibility within the first week. Significant revenue growth usually gains momentum after the first month of consistent optimization."
    },
    {
        question: "What makes your system different from others?",
        answer: "Unlike generic marketing agencies, we specialize exclusively in Swiggy and Zomato optimization. Our 'Done-for-you' system covers everything from menu engineering and SEO to ads management and operational consulting."
    }
];

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 md:px-12 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Everything you need to know about our growth services.
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                                {activeIndex === index ? (
                                    <ChevronUp className="w-5 h-5 text-gray-500" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-gray-500" />
                                )}
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
