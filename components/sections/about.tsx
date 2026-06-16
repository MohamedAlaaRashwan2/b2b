'use client';

import { motion } from 'framer-motion';
import { Users, GraduationCap, TrendingUp, Heart } from 'lucide-react';
import { BENEFITS } from '@/constants';
import { cn } from '@/lib/utils';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Users,
  GraduationCap,
  TrendingUp,
  Heart,
};

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-slate-950 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(168,85,247,0.1),transparent)]" />
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
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10 text-slate-300 mb-4"
          >
            About the Event
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Why <span className="text-gradient">Business Guide</span>?
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
           Business Guide helps you understand how successful businesses truly operate. Through real-world insights from industry experts, you'll gain practical knowledge in Marketing, Management, ERP Systems, Accounting, Business Development, and Entrepreneurship—equipping you with the skills and understanding needed to grow your career or business with confidence.          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left - Vision/Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                Our Mission
              </h3>
              <p className="text-slate-400 leading-relaxed">
               To bring clarity, direction, and real business insights by helping individuals understand the essential fundamentals of Marketing, Management, ERP Systems, Accounting, and Business Development through practical knowledge and real-world experiences.              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                Our Vision
              </h3>
              <p className="text-slate-400 leading-relaxed">
               To become a leading platform that helps individuals gain a deeper understanding of how the business world works through practical insights, real experiences, and knowledge of the essential business fundamentals.              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                Why Attend
              </h3>
              <ul className="space-y-2">
                {[
                  'Learn from 4+ industry experts',
                  'Network with 200+ Business professionals',
                  'Access 8+ sessions covering latest trends',
                  'Earn professional certifications',
                  'Discover investment opportunities',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-slate-400">
                    <span className="text-blue-400 mt-1">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right - Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-card rounded-2xl overflow-hidden aspect-[4/3]"
              >
                <img
                  src="https://images.pexels.com/photos/1540576/pexels-photo-1540576.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Conference hall"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-card rounded-2xl overflow-hidden aspect-square"
              >
                <img
                  src="https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Networking event"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
            <div className="space-y-4 pt-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-card rounded-2xl overflow-hidden aspect-square"
              >
                <img
                  src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Workshop session"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-card rounded-2xl overflow-hidden aspect-[4/3]"
              >
                <img
                  src="https://images.pexels.com/photos/2388736/pexels-photo-2388736.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Tech showcase"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Benefit Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {BENEFITS.map((benefit, index) => {
            const Icon = iconMap[benefit.icon] || Users;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group glass-card p-6 rounded-2xl hover:bg-white/10 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 flex items-center justify-center mb-5 group-hover:from-blue-600/30 group-hover:to-purple-600/30 transition-all duration-300">
                  <Icon className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
