import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';
import AboutUs from '@/components/AboutUs';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us | GoalCraft',
    description: 'Learn more about GoalCraft and how we help restaurants expand on Swiggy & Zomato.',
};

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground">
            <Header />
            <main className="flex-grow pt-20"> {/* Added pt-20 for header spacing if fixed */}
                <AboutUs />
                <AboutSection />
            </main>
            <Footer />
        </div>
    );
}
