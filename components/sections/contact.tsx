'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle, Loader2 } from 'lucide-react';
import { SITE_CONFIG } from '@/constants';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    setIsSubmitted(true);
    reset();
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      value: SITE_CONFIG.email,
      href: `mailto:${SITE_CONFIG.email}`,
      color: 'from-blue-600 to-indigo-600',
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: SITE_CONFIG.phone,
      href: `tel:${SITE_CONFIG.phone.replace(/\D/g, '')}`,
      color: 'from-green-600 to-emerald-600',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: SITE_CONFIG.whatsapp,
      href: `https://wa.me/${SITE_CONFIG.whatsapp.replace(/\D/g, '')}`,
      color: 'from-emerald-500 to-teal-600',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      value: SITE_CONFIG.address,
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE_CONFIG.address)}`,
      color: 'from-purple-600 to-pink-600',
    },
  ];

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-slate-950 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2" />
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
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border border-white/10 text-slate-300 mb-4"
          >
            Get in Touch
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Contact <span className="text-gradient">Us</span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.href}
                target={method.title === 'Visit Us' ? '_blank' : undefined}
                rel={method.title === 'Visit Us' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="glass-card p-5 rounded-xl flex items-center gap-4 group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${method.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <method.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">{method.title}</p>
                  <p className="text-white font-medium">{method.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <AnimatePresence mode="popLayout">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="glass-card p-8 rounded-2xl text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center"
                  >
                    <CheckCircle className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-400 mb-6">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsSubmitted(false)}
                    className="btn-glass"
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              ) : (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="glass-card p-8 rounded-2xl"
                >
                  <div className="space-y-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label htmlFor="contact-name" className="text-sm font-medium text-slate-300">
                        Name *
                      </label>
                      <input
                        {...register('name')}
                        id="contact-name"
                        placeholder="Your name"
                        className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                          errors.name ? 'border-red-500/50' : 'border-white/10'
                        } text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors`}
                      />
                      {errors.name && (
                        <p className="text-red-400 text-sm">{errors.name.message}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="contact-email" className="text-sm font-medium text-slate-300">
                        Email *
                      </label>
                      <input
                        {...register('email')}
                        id="contact-email"
                        type="email"
                        placeholder="your@email.com"
                        className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                          errors.email ? 'border-red-500/50' : 'border-white/10'
                        } text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors`}
                      />
                      {errors.email && (
                        <p className="text-red-400 text-sm">{errors.email.message}</p>
                      )}
                    </div>

                    {/* Subject */}
                    <div className="space-y-2">
                      <label htmlFor="contact-subject" className="text-sm font-medium text-slate-300">
                        Subject *
                      </label>
                      <input
                        {...register('subject')}
                        id="contact-subject"
                        placeholder="How can we help?"
                        className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                          errors.subject ? 'border-red-500/50' : 'border-white/10'
                        } text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors`}
                      />
                      {errors.subject && (
                        <p className="text-red-400 text-sm">{errors.subject.message}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label htmlFor="contact-message" className="text-sm font-medium text-slate-300">
                        Message *
                      </label>
                      <textarea
                        {...register('message')}
                        id="contact-message"
                        rows={5}
                        placeholder="Your message..."
                        className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                          errors.message ? 'border-red-500/50' : 'border-white/10'
                        } text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors resize-none`}
                      />
                      {errors.message && (
                        <p className="text-red-400 text-sm">{errors.message.message}</p>
                      )}
                    </div>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      className="btn-premium w-full flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
