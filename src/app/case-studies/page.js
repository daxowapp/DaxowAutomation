"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CaseStudiesExpanded from '@/components/CaseStudiesExpanded';
import MetricsDashboard from '@/components/MetricsDashboard';
import CallToAction from '@/components/CallToAction';
import { motion } from 'framer-motion';

export default function CaseStudiesPage() {
  return (
    <main>
      <Navbar />
      
      <header className="page-header">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1>Client <span className="gradient-text">Success</span> Stories</h1>
            <p>
              Discover how leading universities and global enterprises are using Daxow to reduce operational costs by up to 80% and scale their impact without scaling their headcount.
            </p>
          </motion.div>
        </div>
      </header>

      <MetricsDashboard />
      <CaseStudiesExpanded />
      
      <CallToAction />
      <Footer />
    </main>
  );
}
