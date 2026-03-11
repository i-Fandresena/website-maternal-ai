import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import MissionSection from '@/components/MissionSection';
import InfoCards from '@/components/InfoCards';
import TestimonialSection from '@/components/TestimonialSection';
import PartnersSection from '@/components/PartnersSection';
import StatisticsSection from '@/components/StatisticsSection';
import Gallery from '@/components/Gallery';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <MissionSection />
      <InfoCards />
      <TestimonialSection />
      <PartnersSection />
      <StatisticsSection />
      <Gallery />
      <CTASection />
      <Footer />
    </main>
  );
}
