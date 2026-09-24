import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Integrations from '@/components/Integrations';
import ValueProposition from '@/components/ValueProposition';
import AutomationDeepDive from '@/components/AutomationDeepDive';
import UniversityFocus from '@/components/UniversityFocus';
import AIWebsiteTeaser from '@/components/AIWebsiteTeaser';
import MetricsDashboard from '@/components/MetricsDashboard';
import CaseStudies from '@/components/CaseStudies';
import FAQ from '@/components/FAQ';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Integrations />
      <AutomationDeepDive />
      <ValueProposition />
      <UniversityFocus />
      <AIWebsiteTeaser />
      <MetricsDashboard />
      <FAQ />
      <CallToAction />
      <Footer />
    </main>
  );
}
