'use client';

import { motion } from 'framer-motion';
import { CountdownTimer } from '../ui/countdown-timer';
import { Statistics } from '../ui/statistics';
import { EVENT_INFO } from '@/constants';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(./people-taking-part-high-protocol-event.jpg)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/90 to-slate-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-transparent" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Event Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Event Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10 backdrop-blur-sm mb-6"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-slate-300">{EVENT_INFO.date}</span>
            </motion.div>

            {/* Event Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4 tracking-tight"
            >
              {EVENT_INFO.name.split(' ')[0]}
              <span className="text-gradient md:block ml-4 md:ml-0">{EVENT_INFO.name.split(' ')[1]}</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-slate-300 mb-6"
            >
              {EVENT_INFO.tagline}
            </motion.p>

            {/* Event Meta */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
            >
              <div className="flex items-center gap-2 text-slate-400">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span>{EVENT_INFO.venue}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <div className="w-2 h-2 bg-purple-500 rounded-full" />
                <span>{EVENT_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <div className="w-2 h-2 bg-cyan-500 rounded-full" />
                <span>{EVENT_INFO.time}</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-premium cursor-pointer md:text-lg text-sm"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#register')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Register Now
              </motion.a>
              <motion.a
                href="#schedule"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline md:text-lg text-sm"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#schedule')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Schedule
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Countdown */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <CountdownTimer />
          </motion.div>
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-14 md:mt-20"
        >
          <Statistics />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
