'use client';

import { motion } from 'framer-motion';
import { Sparkles, Facebook, Instagram, Linkedin, Twitter, Youtube, Send } from 'lucide-react';
import { useState } from 'react';
import { SITE_CONFIG, NAV_ITEMS } from '@/constants';

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: SITE_CONFIG.social.twitter },
  { name: 'LinkedIn', icon: Linkedin, href: SITE_CONFIG.social.linkedin },
  { name: 'Instagram', icon: Instagram, href: SITE_CONFIG.social.instagram },
  { name: 'Facebook', icon: Facebook, href: SITE_CONFIG.social.facebook },
  { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/@BusinessGuide' },
];

export function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.a
              href="#home"
              className="inline-flex items-center gap-2.5 mb-4"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/30">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Tech<span className="text-gradient">Summit</span>
              </span>
            </motion.a>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Join the world&apos;s leading tech innovators for three days of keynotes, workshops, and unparalleled networking.
            </p>

            {/* Newsletter */}
            <div className="max-w-md">
              <h4 className="text-white font-semibold mb-3">Stay Updated</h4>
              <form onSubmit={handleNewsletterSubmit} className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 pr-12 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors"
                  required
                />
                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.95 }}
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 p-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg text-white"
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </form>
              {isSubscribed && (
                <p className="text-green-400 text-sm mt-2">Thanks for subscribing!</p>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_ITEMS.slice(0, 4).map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">Blog</a></li>
              <li><a href="#faq" className="text-slate-400 hover:text-white transition-colors duration-300">FAQ</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">Press Kit</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-white transition-colors duration-300">Support</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">Terms of Service</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">Code of Conduct</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            � {new Date().getFullYear()} Business
Guide. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20 hover:border-white/20 transition-all duration-300"
                aria-label={social.name}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
