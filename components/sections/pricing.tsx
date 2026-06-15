'use client';

import { motion } from 'framer-motion';
import { Check, Star, Zap, Crown, Ticket } from 'lucide-react';
import { PRICING_TIERS } from '@/constants';
import { PricingTier } from '@/types';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  basic: Ticket,
  standard: Zap,
  vip: Crown,
};

function PricingCard({ tier, index }: { tier: PricingTier; index: number }) {
  const Icon = iconMap[tier.name.toLowerCase()] || Ticket;
  const remainingPercent = tier.remaining && tier.total ? (tier.remaining / tier.total) * 100 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      whileHover={{ y: -10 }}
      className={`relative ${tier.recommended ? 'lg:-mt-4 lg:mb-4' : ''}`}
    >
      {tier.recommended && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-sm font-semibold text-white shadow-lg flex items-center gap-1">
            <Star className="w-3.5 h-3.5" />
            Best Value
          </div>
        </div>
      )}

      <div
        className={`glass-card p-8 rounded-2xl h-full relative overflow-hidden ${
          tier.recommended
            ? 'border-2 border-amber-500/30 bg-gradient-to-b from-amber-900/20 to-slate-900/50'
            : ''
        }`}
      >
        {/* Background glow for recommended */}
        {tier.recommended && (
          <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 to-transparent" />
        )}

        <div className="relative">
          {/* Icon and Name */}
          <div className="flex items-center gap-3 mb-4">
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                tier.recommended
                  ? 'bg-gradient-to-r from-amber-600 to-orange-600'
                  : 'bg-gradient-to-r from-blue-600/20 to-indigo-600/20'
              }`}
            >
              <Icon className={`w-6 h-6 ${tier.recommended ? 'text-white' : 'text-blue-400'}`} />
            </div>
            <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
          </div>

          {/* Price */}
          <div className="mb-6">
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-bold text-white">${tier.price}</span>
              {tier.originalPrice && (
                <span className="text-xl text-slate-500 line-through">${tier.originalPrice}</span>
              )}
            </div>
            <p className="text-slate-400 text-sm mt-2">{tier.description}</p>
          </div>

          {/* Remaining Tickets Progress */}
          {tier.remaining !== undefined && tier.total !== undefined && (
            <div className="mb-6">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-slate-400">Availability</span>
                <span className="text-white font-medium">
                  {tier.remaining} / {tier.total} left
                </span>
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${remainingPercent}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className={`h-full rounded-full ${
                    tier.recommended
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500'
                      : 'bg-gradient-to-r from-blue-500 to-indigo-500'
                  }`}
                />
              </div>
            </div>
          )}

          {/* Features */}
          <ul className="space-y-3 mb-8">
            {tier.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-start gap-3">
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                    tier.recommended ? 'bg-amber-500/20' : 'bg-blue-500/20'
                  }`}
                >
                  <Check
                    className={`w-3 h-3 ${tier.recommended ? 'text-amber-400' : 'text-blue-400'}`}
                  />
                </div>
                <span className="text-slate-300 text-sm">{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
              tier.recommended
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40'
                : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
            }`}
          >
            {tier.soldOut ? 'Sold Out' : 'Register Now'}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 md:py-32 bg-slate-900/50 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-3xl" />
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
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-white/10 text-slate-300 mb-4"
          >
            Secure Your Spot
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Choose Your <span className="text-gradient-gold">Ticket</span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Early bird pricing ends soon. Secure your spot at TechSummit 2026 and join thousands of tech innovators.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {PRICING_TIERS.map((tier, index) => (
            <PricingCard key={tier.id} tier={tier} index={index} />
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-slate-400 text-sm mb-4">
            100% money-back guarantee. Cancel up to 60 days before the event.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 text-slate-500 text-xs">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" /> Secure payment
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" /> Instant confirmation
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" /> Transferable tickets
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
