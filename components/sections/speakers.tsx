'use client';

import { motion } from 'framer-motion';
import { Linkedin, Globe,  } from 'lucide-react';
import { FaFacebookF,FaInstagram  } from "react-icons/fa";
import { SPEAKERS } from '@/constants';
import { Speaker } from '@/types';
import Image from 'next/image';

const iconMap = {
  linkedin: Linkedin,
  // twitter: Twitter,
  facebook: FaFacebookF,
  instagram: FaInstagram,
};

function SpeakerCard({ speaker, index }: { speaker: Speaker; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative"
    >
      <div className="glass-card rounded-2xl overflow-hidden relative">
        {/* Image */}
        <div className="relative h-[24rem] md:h-72 overflow-hidden">
          <Image
            src={speaker.image}
            alt={speaker.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

          {/* Social Links Overlay */}
          <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/60">
            {speaker.social.linkedin && (
              <motion.a
                href={speaker.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </motion.a>
            )}
            {speaker.social.facebook && (
              <motion.a
                href={speaker.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-sky-600 transition-colors"
              >
                <FaFacebookF className="w-4 h-4" />
              </motion.a>
            )}
            {speaker.social.instagram && (
              <motion.a
                href={speaker.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-indigo-600 transition-colors"
              >
                <FaInstagram className="w-4 h-4" />
              </motion.a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 relative">
          {/* Glow border */}
          <div className="absolute inset-0 rounded-2xl border border-white/5 group-hover:border-blue-500/30 transition-colors duration-500" />

          <div className="relative">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-xl font-bold text-white">{speaker.name}</h3>
                <p className="text-blue-400 text-sm font-medium">{speaker.position}</p>
                <p className="text-slate-500 text-sm">{speaker.company}</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">{speaker.bio}</p>

            {/* Session */}
            <div className="flex items-center gap-2 text-xs text-slate-500 bg-white/5 px-3 py-2 rounded-lg">
              <span className="text-blue-400">Session:</span>
              <span className="text-slate-300">{speaker.session}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Speakers() {
  return (
    <section id="speakers" className="relative py-24 md:py-32 bg-slate-950 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-amber-600/20 to-orange-600/20 border border-white/10 text-slate-300 mb-4"
          >
            Industry Leaders
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Featured <span className="text-gradient">Speakers</span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Learn from the world&apos;s leading technologists, entrepreneurs, and innovators who are shaping the future of technology.
          </p>
        </motion.div>

        {/* Speakers Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SPEAKERS.map((speaker, index) => (
            <SpeakerCard key={speaker.id} speaker={speaker} index={index} />
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
        </motion.div>
      </div>
    </section>
  );
}
