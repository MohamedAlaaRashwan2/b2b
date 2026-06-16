'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SCHEDULE } from '@/constants';
import { ScheduleItem } from '@/types';
import { MapPin, Clock, User, Calendar } from 'lucide-react';

const categoryColors: Record<string, string> = {
  workshop: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  talk: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  panel: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  networking: 'bg-green-500/20 text-green-400 border-green-500/30',
  break: 'bg-slate-500/20 text-slate-400 border-slate-500/30',
};

const filters = [
  { id: 'all', label: 'All' },
  { id: 'workshop', label: 'Workshops' },
  { id: 'talk', label: 'Talks' },
  { id: 'panel', label: 'Panels' },
  { id: 'networking', label: 'Networking' },
];

function ScheduleCard({ item, index }: { item: ScheduleItem; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.02 }}
      className="group relative"
    >
      <div className="glass-card p-5 rounded-xl relative overflow-hidden">
        {/* Timeline marker */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-indigo-500" />

        <div className="pl-4">
          <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 text-slate-400 text-sm">
                <Clock className="w-4 h-4" />
                <span>{item.time}</span>
              </div>
              <span className="text-xs text-slate-500">{item.duration}</span>
            </div>
            <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${categoryColors[item.category]}`}>
              {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
            </span>
          </div>

          <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>

          <p className="text-slate-400 text-sm mb-3 line-clamp-2">{item.description}</p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
            {item.speaker && (
              <div className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5" />
                <span className="text-slate-300">{item.speaker}</span>
              </div>
            )}
            {item.stage && (
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>{item.stage}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Schedule() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredSchedule = activeFilter === 'all'
    ? SCHEDULE
    : SCHEDULE.filter((item) => item.category === activeFilter);

  // Group by time or maintain order
  const groupedSchedule = filteredSchedule.reduce((acc, item) => {
    const day = item.id <= '7' ? 'Day 1' : 'Day 1' ;
    if (!acc[day]) acc[day] = [];
    acc[day].push(item);
    return acc;
  }, {} as Record<string, ScheduleItem[]>);

  return (
    <section id="schedule" className="relative py-24 md:py-32 bg-slate-900/50 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 left-1/2 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-3xl -translate-x-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-white/10 text-slate-300 mb-4"
          >
            3 Days of Innovation
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Event <span className="text-gradient">Schedule</span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            A carefully curated agenda of keynotes, workshops, panels, and networking sessions.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-indigo-500/30'
                  : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Schedule Timeline */}
        <div className="space-y-10">
          {Object.entries(groupedSchedule).map(([day, items], dayIndex) => (
            <motion.div
              key={day}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: dayIndex * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-blue-400" />
                  <h3 className="text-xl font-semibold text-white">{day}</h3>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
                <span className="text-sm text-slate-500">
                  {items.length} session{items.length !== 1 ? 's' : ''}
                </span>
              </div>

              <AnimatePresence mode="popLayout">
                <div className="grid gap-4 md:grid-cols-2">
                  {items.map((item, index) => (
                    <ScheduleCard key={item.id} item={item} index={index} />
                  ))}
                </div>
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Download Schedule */}
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
