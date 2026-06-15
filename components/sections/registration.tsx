'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Loader2, User, Mail, Phone, Building, Briefcase, Globe, MessageSquare } from 'lucide-react';
import { PRICING_TIERS } from '@/constants';

const registrationSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name is too long'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  company: z.string().min(2, 'Company name is required'),
  jobTitle: z.string().min(2, 'Job title is required'),
  country: z.string().min(1, 'Please select a country'),
  ticketType: z.string().min(1, 'Please select a ticket type'),
  specialRequests: z.string().optional(),
});

type RegistrationFormData = z.infer<typeof registrationSchema>;

const countries = [
  'United States', 'Canada', 'United Kingdom', 'Germany', 'France', 'Japan',
  'Australia', 'India', 'Brazil', 'Netherlands', 'Singapore', 'South Korea',
  'China', 'Mexico', 'Spain', 'Italy', 'Switzerland', 'Sweden', 'Other'
].sort();

export function Registration() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit = async (data: RegistrationFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    setIsSubmitted(true);
    reset();
  };

  const handleReset = () => {
    setIsSubmitted(false);
  };

  return (
    <section id="register" className="relative py-24 md:py-32 bg-slate-950 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-3xl" />
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
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border border-white/10 text-slate-300 mb-4"
          >
            Reserve Your Spot
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Register <span className="text-gradient">Now</span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Complete your registration and join thousands of tech innovators at TechSummit 2026.
          </p>
        </motion.div>

        <AnimatePresence mode="popLayout">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-2xl mx-auto"
            >
              <motion.div
                className="glass-card p-12 rounded-2xl text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center"
                >
                  <CheckCircle className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-3">Registration Successful!</h3>
                <p className="text-slate-400 mb-6">
                  Thank you for registering for TechSummit 2026. A confirmation email has been sent to your inbox.
                </p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleReset}
                  className="btn-premium"
                >
                  Register Another Attendee
                </motion.button>
              </motion.div>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit(onSubmit)}
              className="max-w-4xl mx-auto"
            >
              <div className="glass-card p-8 md:p-12 rounded-2xl">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="text-sm font-medium text-slate-300 flex items-center gap-2">
                      <User className="w-4 h-4 text-blue-400" />
                      Full Name *
                    </label>
                    <input
                      {...register('fullName')}
                      type="text"
                      id="fullName"
                      placeholder="John Doe"
                      className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                        errors.fullName
                          ? 'border-red-500/50'
                          : 'border-white/10 focus:border-blue-500/50'
                      } text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300`}
                    />
                    {errors.fullName && (
                      <p className="text-red-400 text-sm">{errors.fullName.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-300 flex items-center gap-2">
                      <Mail className="w-4 h-4 text-blue-400" />
                      Email Address *
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      id="email"
                      placeholder="john@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                        errors.email
                          ? 'border-red-500/50'
                          : 'border-white/10 focus:border-blue-500/50'
                      } text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300`}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-slate-300 flex items-center gap-2">
                      <Phone className="w-4 h-4 text-blue-400" />
                      Phone Number *
                    </label>
                    <input
                      {...register('phone')}
                      type="tel"
                      id="phone"
                      placeholder="+1 (555) 123-4567"
                      className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                        errors.phone
                          ? 'border-red-500/50'
                          : 'border-white/10 focus:border-blue-500/50'
                      } text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300`}
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-sm">{errors.phone.message}</p>
                    )}
                  </div>

                  {/* Company */}
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-slate-300 flex items-center gap-2">
                      <Building className="w-4 h-4 text-blue-400" />
                      Company Name *
                    </label>
                    <input
                      {...register('company')}
                      type="text"
                      id="company"
                      placeholder="TechCorp Inc"
                      className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                        errors.company
                          ? 'border-red-500/50'
                          : 'border-white/10 focus:border-blue-500/50'
                      } text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300`}
                    />
                    {errors.company && (
                      <p className="text-red-400 text-sm">{errors.company.message}</p>
                    )}
                  </div>

                  {/* Job Title */}
                  <div className="space-y-2">
                    <label htmlFor="jobTitle" className="text-sm font-medium text-slate-300 flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-blue-400" />
                      Job Title *
                    </label>
                    <input
                      {...register('jobTitle')}
                      type="text"
                      id="jobTitle"
                      placeholder="Senior Developer"
                      className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                        errors.jobTitle
                          ? 'border-red-500/50'
                          : 'border-white/10 focus:border-blue-500/50'
                      } text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300`}
                    />
                    {errors.jobTitle && (
                      <p className="text-red-400 text-sm">{errors.jobTitle.message}</p>
                    )}
                  </div>

                  {/* Country */}
                  <div className="space-y-2">
                    <label htmlFor="country" className="text-sm font-medium text-slate-300 flex items-center gap-2">
                      <Globe className="w-4 h-4 text-blue-400" />
                      Country *
                    </label>
                    <select
                      {...register('country')}
                      id="country"
                      className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                        errors.country
                          ? 'border-red-500/50'
                          : 'border-white/10 focus:border-blue-500/50'
                      } text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300`}
                    >
                      <option value="" className="bg-slate-800">Select country</option>
                      {countries.map((country) => (
                        <option key={country} value={country} className="bg-slate-800">
                          {country}
                        </option>
                      ))}
                    </select>
                    {errors.country && (
                      <p className="text-red-400 text-sm">{errors.country.message}</p>
                    )}
                  </div>

                  {/* Ticket Type */}
                  <div className="space-y-2 md:col-span-2 lg:col-span-1">
                    <label htmlFor="ticketType" className="text-sm font-medium text-slate-300 flex items-center gap-2">
                      <span className="w-4 h-4 rounded bg-blue-400 flex items-center justify-center text-xs text-white font-bold">$</span>
                      Ticket Type *
                    </label>
                    <select
                      {...register('ticketType')}
                      id="ticketType"
                      className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                        errors.ticketType
                          ? 'border-red-500/50'
                          : 'border-white/10 focus:border-blue-500/50'
                      } text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300`}
                    >
                      <option value="" className="bg-slate-800">Select ticket type</option>
                      {PRICING_TIERS.map((tier) => (
                        <option key={tier.id} value={tier.name} className="bg-slate-800">
                          {tier.name} - ${tier.price}
                        </option>
                      ))}
                    </select>
                    {errors.ticketType && (
                      <p className="text-red-400 text-sm">{errors.ticketType.message}</p>
                    )}
                  </div>

                  {/* Special Requests */}
                  <div className="space-y-2 md:col-span-2">
                    <label htmlFor="specialRequests" className="text-sm font-medium text-slate-300 flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-blue-400" />
                      Special Requests (Optional)
                    </label>
                    <textarea
                      {...register('specialRequests')}
                      id="specialRequests"
                      rows={4}
                      placeholder="Any dietary restrictions, accessibility requirements, or other special requests..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="mt-8">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="btn-premium w-full flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        Complete Registration
                      </>
                    )}
                  </motion.button>
                </div>

                <p className="text-slate-500 text-xs text-center mt-4">
                  By registering, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
