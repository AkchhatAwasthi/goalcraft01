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
  title: 'GoalCraft – Restaurant Consulting for Swiggy & Zomato Growth',
  description: 'Expert restaurant consulting to boost your sales on Swiggy and Zomato. We offer menu engineering, food photography, and strategic marketing.',
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
