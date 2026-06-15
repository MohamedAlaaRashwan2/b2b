'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { SPONSORS } from '@/constants';
import { Sponsor } from '@/types';

const tierStyles = {
  platinum: {
    label: 'Platinum Sponsors',
    color: 'from-amber-500 to-yellow-500',
    bgColor: 'bg-amber-900/20',
    borderColor: 'border-amber-500/30',
    size: 'h-16 md:h-20',
  },
  gold: {
    label: 'Gold Sponsors',
    color: 'from-orange-500 to-amber-500',
    bgColor: 'bg-orange-900/20',
    borderColor: 'border-orange-500/30',
    size: 'h-12 md:h-16',
  },
  silver: {
    label: 'Silver Sponsors',
    color: 'from-slate-400 to-slate-500',
    bgColor: 'bg-slate-800/20',
    borderColor: 'border-slate-500/30',
    size: 'h-10 md:h-12',
  },
  community: {
    label: 'Community Partners',
    color: 'from-blue-400 to-indigo-500',
    bgColor: 'bg-blue-900/20',
    borderColor: 'border-blue-500/30',
    size: 'h-8 md:h-10',
  },
};

function SponsorGrid({ sponsors, tier }: { sponsors: Sponsor[]; tier: Sponsor['tier'] }) {
  const style = tierStyles[tier];

  return (
    <div className="mb-12 last:mb-0">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 mb-6"
      >
        <h3 className={`text-lg font-semibold bg-gradient-to-r ${style.color} bg-clip-text text-transparent`}>
          {style.label}
        </h3>
        <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
      </motion.div>

      <div className={`grid ${
        tier === 'platinum' ? 'grid-cols-2 md:grid-cols-2' :
        tier === 'gold' ? 'grid-cols-2 md:grid-cols-3' :
        'grid-cols-3 md:grid-cols-4'
      } gap-4`}>
        {sponsors.map((sponsor, index) => (
          <motion.a
            key={sponsor.id}
            href={sponsor.website}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className={`glass-card p-6 md:p-8 rounded-xl flex items-center justify-center ${style.borderColor} border hover:border-white/30 transition-colors group`}
          >
            <div className="relative w-full max-w-[180px] grayscale group-hover:grayscale-0 transition-all duration-500">
              {tier === 'platinum' || tier === 'gold' ? (
                <div className="flex items-center justify-center h-16 md:h-20">
                  <span className="text-2xl md:text-3xl font-bold text-slate-300 group-hover:text-white transition-colors">
                    {sponsor.name}
                  </span>
                </div>
              ) : (
                <div className="flex items-center justify-center h-10 md:h-12">
                  <span className="text-lg md:text-xl font-semibold text-slate-400 group-hover:text-white transition-colors">
                    {sponsor.name}
                  </span>
                </div>
              )}
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}

export function Sponsors() {
  const platinumSponsors = SPONSORS.filter((s) => s.tier === 'platinum');
  const goldSponsors = SPONSORS.filter((s) => s.tier === 'gold');
  const silverSponsors = SPONSORS.filter((s) => s.tier === 'silver');
  const communitySponsors = SPONSORS.filter((s) => s.tier === 'community');

  return (
    <section id="sponsors" className="relative py-24 md:py-32 bg-slate-950 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent" />
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
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-amber-600/20 to-yellow-600/20 border border-white/10 text-slate-300 mb-4"
          >
            Our Partners
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            <span className="text-gradient-gold">Premium</span> Sponsors
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            TechSummit is made possible by the generous support of our sponsors and partners.
          </p>
        </motion.div>

        {/* Sponsors by Tier */}
        <div>
          {platinumSponsors.length > 0 && (
            <SponsorGrid sponsors={platinumSponsors} tier="platinum" />
          )}
          {goldSponsors.length > 0 && (
            <SponsorGrid sponsors={goldSponsors} tier="gold" />
          )}
          {silverSponsors.length > 0 && (
            <SponsorGrid sponsors={silverSponsors} tier="silver" />
          )}
          {communitySponsors.length > 0 && (
            <SponsorGrid sponsors={communitySponsors} tier="community" />
          )}
        </div>

        {/* Become a Sponsor CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-3">
              Interested in Sponsorship?
            </h3>
            <p className="text-slate-400 mb-6">
              Join the world&apos;s leading tech brands in supporting TechSummit 2026. Reach 5000+ tech professionals.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-premium"
            >
              Become a Sponsor
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
