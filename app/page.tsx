import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import HowWeWork from '@/components/HowWeWork';
import SEOBlocks from '@/components/SEOBlocks';
import VideoTestimonials from '@/components/VideoTestimonials';
import Footer from '@/components/Footer';
import PollPopup from '@/components/PollPopup';
import DashboardPreview from '@/components/DashboardPreview';
import MenuComparison from '@/components/MenuComparison';
import AboutSection from '@/components/AboutSection';
import AboutUs from '@/components/AboutUs';
import Services from '@/components/Services';
import OurPartners from '@/components/OurPartners';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GoalCraft: Turn Your Restaurant Into the Next Big Sensation on Zomato & Swiggy',
  description: 'Fuel your restaurant’s success with data-driven growth, menu magic, and aggregator domination. Let’s make your eatery irresistible — talk to the experts today!',
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* <PollPopup /> */}
      <Header />
      <main>
        <HeroSection />
        <AboutUs />
        <Services />
        <HowWeWork />
        <DashboardPreview />
        {/* <OurPartners /> */}
        <MenuComparison />
        <AboutSection />
        <VideoTestimonials />
        <SEOBlocks />
      </main>
      <Footer />
    </div>
  );
}
