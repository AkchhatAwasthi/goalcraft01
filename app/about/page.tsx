import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';
import AboutUs from '@/components/AboutUs';
import { Metadata } from 'next';

import HeroBanner from '@/components/HeroBanner';
import PartnersMarquee from '@/components/PartnersMarquee';

export const metadata: Metadata = {
    title: 'About GoalCraft – Where Restaurant Dreams Become Revenue Engines',
    description: 'Meet the growth architects behind restaurant success. From menu engineering to digital strategy — learn how we help restaurants shine online. Ready to scale? Contact us!',
};

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground">
            <Header />
            <main className="flex-grow">
                <HeroBanner
                    imageSrc="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80"
                    title="About GoalCraft"
                    subtitle="Empowering restaurants to thrive in the digital age."
                />
                <PartnersMarquee />
                <div className="pt-10">
                    <AboutUs />
                    <AboutSection />
                </div>
            </main>
            <Footer />
        </div>
    );
}
