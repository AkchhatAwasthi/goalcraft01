import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

import HeroBanner from '@/components/HeroBanner';

export const metadata: Metadata = {
    title: 'Contact Us | GoalCraft',
    description: 'Get in touch with GoalCraft for restaurant consulting and growth strategies.',
};

export default function ContactPage() {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50 text-foreground">
            <Header />

            <HeroBanner
                imageSrc="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80"
                title="Contact Us"
                subtitle="Ready to transform your restaurant business? We're here to help you grow on Swiggy & Zomato."
            />

            <main className="flex-grow -mt-20 px-4 pb-20 z-10 relative">
                <div className="container mx-auto max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
                    <div className="grid md:grid-cols-5 h-full">
                        {/* Contact Info Sidebar */}
                        <div className="md:col-span-2 bg-slate-900 text-white p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                                        </pattern>
                                    </defs>
                                    <rect width="100%" height="100%" fill="url(#grid)" />
                                </svg>
                            </div>

                            <div className="relative z-10">
                                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                                <p className="text-white/70 mb-8">
                                    Fill out the form and our team will get back to you within 24 hours.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="mt-1 bg-white/10 p-2 rounded-lg">
                                            <Phone size={20} className="text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-white">Phone</h3>
                                            <p className="text-white/70 mt-1">+91 9653814628</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="mt-1 bg-white/10 p-2 rounded-lg">
                                            <Mail size={20} className="text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-white">Email</h3>
                                            <p className="text-white/70 mt-1">contact@goalcraft.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="mt-1 bg-white/10 p-2 rounded-lg">
                                            <MapPin size={20} className="text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-white">Location</h3>
                                            <p className="text-white/70 mt-1">India</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative z-10 mt-12">
                                <div className="flex space-x-4">
                                    {/* Social icons could go here */}
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <ContactForm />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
