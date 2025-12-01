import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GrowthHero from '@/components/GrowthHero';
import CollaborationSection from '@/components/CollaborationSection';
import MenuScoreSection from '@/components/MenuScoreSection';
import MenuFactorsSection from '@/components/MenuFactorsSection';
import BoostSystemSection from '@/components/BoostSystemSection';
import ValuesSection from '@/components/ValuesSection';
import FAQSection from '@/components/FAQSection';

export default function SwiggyZomatoGrowth() {
    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground">
            <Header />
            <main className="flex-grow">
                <GrowthHero />
                <CollaborationSection />
                <MenuScoreSection />
                <MenuFactorsSection />
                <BoostSystemSection />
                <ValuesSection />
                <FAQSection />

                <div className="container mx-auto px-4 py-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            We specialize in optimizing your restaurant's presence on major food delivery platforms.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <div className="p-8 bg-card rounded-2xl shadow-lg border border-border hover:shadow-xl transition-shadow">
                            <h2 className="text-2xl font-bold mb-4 text-orange-500">Swiggy Growth Strategies</h2>
                            <p className="text-muted-foreground mb-6">
                                Unlock the potential of Swiggy's vast user base. We help you optimize your menu, improve visibility, and run effective ad campaigns to skyrocket your orders.
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                                <li>Menu Engineering & Optimization</li>
                                <li>Keyword & SEO Enhancement</li>
                                <li>Strategic Discounting & Ads</li>
                            </ul>
                        </div>
                        <div className="p-8 bg-card rounded-2xl shadow-lg border border-border hover:shadow-xl transition-shadow">
                            <h2 className="text-2xl font-bold mb-4 text-red-500">Zomato Growth Strategies</h2>
                            <p className="text-muted-foreground mb-6">
                                Dominate the Zomato rankings with our proven techniques. From hygiene ratings to customer review management, we handle it all to boost your brand trust.
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                                <li>Rating & Review Management</li>
                                <li>Hygiene & Compliance Audits</li>
                                <li>Visual Content & Photography</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
