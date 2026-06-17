'use client';

import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { ScrollProgress } from '@/components/layout/scroll-progress';
import { BackToTop } from '@/components/layout/back-to-top';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Speakers } from '@/components/sections/speakers';
import { Schedule } from '@/components/sections/schedule';
import { Gallery } from '@/components/sections/gallery';
import { Pricing } from '@/components/sections/pricing';
import { Registration } from '@/components/sections/registration';
import { Location } from '@/components/sections/location';
import { FAQ } from '@/components/sections/faq';
import { Newsletter } from '@/components/sections/newsletter';
import { Contact } from '@/components/sections/contact';
import { useState, useEffect } from 'react';
import Image from 'next/image';

function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-slate-950 flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center"
        >
        <Image src="/logobg.png" alt="" width={40} height={40} style={{ maxWidth: '80%', height: 'auto' }} />
        </motion.div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '200px' }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto"
        />
      </div>
    </motion.div>
  );
}

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen />}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <ScrollProgress />
        <Navbar />

        <main className="bg-slate-950">
          <Hero />
          <About />
          {/* <Highlights /> */}
          <Speakers />
          <Schedule />
          <Gallery />
          {/* <Pricing /> */}
          <Registration />
          {/* <Testimonials /> */}
          {/* <Sponsors /> */}
          <Location />
          <FAQ />
          <Newsletter />
          <Contact />
        </main>

        <Footer />
        <BackToTop />
      </motion.div>
    </>
  );
}
