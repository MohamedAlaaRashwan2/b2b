'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, Car, Navigation, Star } from 'lucide-react';
import { SITE_CONFIG, HOTELS, EVENT_INFO } from '@/constants';
import Image from 'next/image';

export function Location() {
  return (
    <section id="location" className="relative py-24 md:py-32 bg-slate-900/50 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />
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
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-white/10 text-slate-300 mb-4"
          >
            Venue Details
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Find <span className="text-gradient">Us Here</span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Join us at the iconic Moscone Center in San Francisco, California.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl overflow-hidden"
          >
            <div className="relative aspect-square md:aspect-video lg:aspect-square">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6907.489404139476!2d31.2390376!3d30.0441813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840c792ff5ed5%3A0x27392189a2c25351!2z2KfZhNit2LHZhSDYp9mE2YrZiNmG2KfZhtmK!5e0!3m2!1sar!2seg!4v1781639689120!5m2!1sar!2seg"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>
          </motion.div>

          {/* Venue Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Venue Card */}
            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{EVENT_INFO.venue}</h3>
                  <p className="text-slate-400">{SITE_CONFIG.address}</p>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Event Hours</h3>
                  <p className="text-slate-400">{EVENT_INFO.time}</p>
                  <p className="text-slate-500 text-sm">{EVENT_INFO.date}</p>
                </div>
              </div>
            </div>

            {/* Parking Card */}
            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0">
                  <Car className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Parking Information</h3>
                  <p className="text-slate-400">
                    1,000+ parking spots available in underground garage
                  </p>
                  <p className="text-slate-500 text-sm">Valet parking available for VIP attendees</p>
                </div>
              </div>
            </div>

            {/* Directions Button */}
            <motion.a
              href="https://maps.app.goo.gl/d1ZDZGnbhUUQKNSe9"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-premium flex items-center justify-center gap-2"
            >
              <Navigation className="w-5 h-5" />
              Get Directions
            </motion.a>
          </motion.div>
        </div>

        {/* Nearby Hotels */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">Nearby Hotels</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {HOTELS.map((hotel, index) => (
              <motion.div
                key={hotel.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card rounded-2xl overflow-hidden group"
              >
                <div className="relative h-48">
                  <Image
                    src={hotel.image}
                    alt={hotel.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(hotel.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <h4 className="font-semibold text-white text-lg">{hotel.name}</h4>
                  <p className="text-slate-400 text-sm mb-2">{hotel.distance}</p>
                  <p className="text-blue-400 font-semibold">{hotel.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
