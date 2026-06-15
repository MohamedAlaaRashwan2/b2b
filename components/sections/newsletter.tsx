'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Bell, Sparkles, CheckCircle } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="relative py-24 md:py-32 bg-slate-900/50 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card p-8 md:p-12 rounded-2xl relative overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-indigo-600/5 to-purple-600/10" />

            <div className="relative text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/30"
              >
                <Mail className="w-8 h-8 text-white" />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-white mb-4"
              >
                Stay in the Loop
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-slate-400 mb-8 max-w-xl mx-auto"
              >
                Subscribe to our newsletter for exclusive event updates, speaker announcements, and early access to special offers.
              </motion.p>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap justify-center gap-4 mb-8"
              >
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Bell className="w-4 h-4 text-blue-400" />
                  Event Updates
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  Speaker Announcements
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <span className="w-4 h-4 rounded bg-green-400 flex items-center justify-center">$</span>
                  Exclusive Discounts
                </div>
              </motion.div>

              {/* Form */}
              {!isSubmitted ? (
                <motion.form
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors"
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-premium px-8"
                  >
                    Subscribe
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center justify-center gap-3 text-green-400"
                >
                  <CheckCircle className="w-6 h-6" />
                  <span className="text-lg font-medium">Thanks for subscribing!</span>
                </motion.div>
              )}

              <p className="text-slate-500 text-xs mt-4">
                No spam, unsubscribe anytime. Read our Privacy Policy.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
