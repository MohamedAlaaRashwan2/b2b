'use client';

import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Loader2, User, Mail, Phone, Building, Briefcase, Globe, Upload, X, CheckCircle2, BadgePercent, Trash2 } from 'lucide-react';
import { TICKET_PRICE, BADR_UNIVERSITY_DISCOUNT } from '@/constants';

const registrationSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  // company: z.string().min(2, 'Company name is required'),
  // jobTitle: z.string().min(2, 'Job title is required'),
  country: z.string().min(1, 'Please select a country'),
  isBadrStudent: z.boolean().default(false),
  senderNumber: z.string().min(10, 'Enter a valid number'),
  transactionId: z.string().optional(),
  paymentMethod: z.enum(['instapay', 'vodafone_cash'], {required_error: "Please select payment method"})
}).refine((data) => {
  return true; // File validation handled separately
});

type RegistrationFormData = z.infer<typeof registrationSchema>;

const countries = [
  'United States', 'Canada', 'United Kingdom', 'Germany', 'France', 'Japan',
  'Australia', 'India', 'Brazil', 'Netherlands', 'Singapore', 'South Korea',
  'Egypt', 'Other'
].sort();

export function Registration() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [discountApplied2, setDiscountApplied2] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [pendingData, setPendingData] = useState<any>(null);
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const [warning, setWarning] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [couponError, setCouponError] = useState("");
  const [senderNumber, setsenderNumber] = useState("");
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      isBadrStudent: false,
    },
  });
  
  const paymentMethod = watch("paymentMethod");
  const isBadrStudent = watch('isBadrStudent');
  const specialDiscount = 349;
  const discountedPrice = TICKET_PRICE - specialDiscount;
  const couponDiscountAmount = 
    (discountedPrice * couponDiscount) / 100;
  const finalPrice =
    TICKET_PRICE -
    specialDiscount
    -couponDiscountAmount;
  const applyCoupon = () => {
  const code = couponCode.trim();
   console.log("Applying coupon code:", code);
  if (code === "uni10") {
    setCouponDiscount(10);
    setCouponError("");
    if (code === "uni10") {
      setDiscountApplied2(true);
    }else {
      setDiscountApplied2(false);
    }
  }
  else if (code === "Ah10") {
    setCouponDiscount(10);
    setCouponError("");
    if (code === "Ah10") {
      setDiscountApplied2(true);
    }else {
      setDiscountApplied2(false);
    }
  }
  else {
    setCouponDiscount(0);
    setCouponError("Invalid coupon code");
  }
};

const onSubmit = async (data: RegistrationFormData) => {
  setPendingData(data);
  setShowPaymentModal(true);
};

const handleConfirmPaid = async () => {
  setPaymentConfirmed(true);
  setShowPaymentModal(false);
  setWarning("");
  await submitToServer(); // هنفصلها تحت
};

const submitToServer = async () => {
  setIsSubmitting(true);

  const data = pendingData;

  if (!data) return;

  const formData = new FormData();

  formData.append("fullName", data.fullName);
  formData.append("email", data.email);
  formData.append("phone", data.phone);
  formData.append("country", data.country);
  formData.append("paymentMethod", data.paymentMethod);
  formData.append("senderNumber", data.senderNumber);
  formData.append("finalPrice", String(finalPrice));
  formData.append("couponCode", couponCode);


  const res = await fetch("https://lightslategray-skunk-815178.hostingersite.com/register1.php", {
    method: "POST",
    body: formData,
  });

  
  const result = await res.json();
      console.log("Server response:", formData);
  setIsSubmitting(false);

  if (result.success) {
    setIsSubmitted(true);
    reset();
  } else {
    setWarning(result.message || "Something went wrong");
  }
};

  return (
    <section id="register" className="relative py-16 md:py-20 bg-slate-950">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Complete your registration and join thousands of BusinessGuide innovators at Busen 2026.
          </p>
        </motion.div>

        <AnimatePresence mode="popLayout">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-xl mx-auto"
            >
              <div className="glass-card p-8 rounded-xl text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center"
                >
                  <CheckCircle className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2">Registration Successful!</h3>
                <p className="text-slate-400 mb-6">Check your email for confirmation.</p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsSubmitted(false)}
                  className="btn-premium"
                >
                  Register Another
                </motion.button>
              </div>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit(onSubmit)}
              className="max-w-2xl mx-auto"
            >
              <div className="glass-card p-6 md:p-8 rounded-xl">
                {/* Price Summary */}
                <div className="mb-6 p-4 rounded-lg bg-slate-800/50 border border-slate-700">
                  {/* السعر الأصلي */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400">Original Price:</span>
                  <span className="text-red-400 line-through">
                    EGP {TICKET_PRICE.toFixed(1)}
                  </span>
                </div>
                
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400">Special Offer:</span>
                  <span className="text-white">EGP {discountedPrice.toFixed(1)}</span>
                </div>
                
                <div className="text-center my-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/10 text-green-400 font-semibold">
                    Save EGP {specialDiscount}
                  </span>
                </div>
                  {discountApplied2 && (
                    <>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-green-400 flex items-center gap-1">
                          <BadgePercent className="w-4 h-4" />
                          Coupon {couponCode} (-{couponDiscount}%)
                        </span>
                        <span className="text-green-400">
                          -EGP {couponDiscountAmount.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t border-slate-600">
                        <span className="text-white font-medium">
                          Final Price:
                        </span>
                        <span className="text-2xl font-bold text-green-400">
                          EGP {finalPrice.toFixed(2)}
                        </span>
                      </div>
                    </>
                  )}
                  {!discountApplied2 && (
                    <div className="flex items-center justify-between pt-2 border-t border-slate-600">
                      <span className="text-white font-medium">
                        Total:
                      </span>
                      <span className="text-2xl font-bold text-white">
                        EGP {discountedPrice.toFixed(2)}
                      </span>
                    </div>
                  )}
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  {/* Full Name */}
                  <div>
                    <label className="text-sm text-slate-300 flex items-center gap-1 mb-1">
                      <User className="w-3 h-3" /> Full Name *
                    </label>
                    <input
                      {...register('fullName')}
                      className={`w-full px-4 py-2.5 rounded-lg bg-white/5 border ${
                        errors.fullName ? 'border-red-500/50' : 'border-white/10 focus:border-blue-500/50'
                      } text-white placeholder:text-slate-500 focus:outline-none transition-colors`}
                      placeholder="John Doe"
                    />
                    {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName.message}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-sm text-slate-300 flex items-center gap-1 mb-1">
                      <Mail className="w-3 h-3" /> Email *
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      className={`w-full px-4 py-2.5 rounded-lg bg-white/5 border ${
                        errors.email ? 'border-red-500/50' : 'border-white/10 focus:border-blue-500/50'
                      } text-white placeholder:text-slate-500 focus:outline-none transition-colors`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="text-sm text-slate-300 flex items-center gap-1 mb-1">
                      <Phone className="w-3 h-3" /> Phone *
                    </label>
                    <input
                      {...register('phone')}
                      type="tel"
                      className={`w-full px-4 py-2.5 rounded-lg bg-white/5 border ${
                        errors.phone ? 'border-red-500/50' : 'border-white/10 focus:border-blue-500/50'
                      } text-white placeholder:text-slate-500 focus:outline-none transition-colors`}
                      placeholder="+20123456789"
                    />
                    {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
                  </div>

                  {/* Company */}
                  {/* <div>
                    <label className="text-sm text-slate-300 flex items-center gap-1 mb-1">
                      <Building className="w-3 h-3" /> Company *
                    </label>
                    <input
                      {...register('company')}
                      className={`w-full px-4 py-2.5 rounded-lg bg-white/5 border ${
                        errors.company ? 'border-red-500/50' : 'border-white/10 focus:border-blue-500/50'
                      } text-white placeholder:text-slate-500 focus:outline-none transition-colors`}
                      placeholder="TechCorp Inc"
                    />
                    {errors.company && <p className="text-red-400 text-xs mt-1">{errors.company.message}</p>}
                  </div> */}

                  {/* Job Title */}
                  {/* <div>
                    <label className="text-sm text-slate-300 flex items-center gap-1 mb-1">
                      <Briefcase className="w-3 h-3" /> Job Title *
                    </label>
                    <input
                      {...register('jobTitle')}
                      className={`w-full px-4 py-2.5 rounded-lg bg-white/5 border ${
                        errors.jobTitle ? 'border-red-500/50' : 'border-white/10 focus:border-blue-500/50'
                      } text-white placeholder:text-slate-500 focus:outline-none transition-colors`}
                      placeholder="Senior Developer"
                    />
                    {errors.jobTitle && <p className="text-red-400 text-xs mt-1">{errors.jobTitle.message}</p>}
                  </div> */}

                  {/* Country */}
                  <div>
                    <label className="text-sm text-slate-300 flex items-center gap-1 mb-1">
                      <Globe className="w-3 h-3" /> Country *
                    </label>
                    <select
                      {...register('country')}
                      className={`w-full px-4 py-2.5 rounded-lg bg-white/5 border ${
                        errors.country ? 'border-red-500/50' : 'border-white/10'
                      } text-white focus:outline-none transition-colors`}
                    >
                      <option value="" className="bg-slate-800">Select country</option>
                      {countries.map((country) => (
                        <option key={country} value={country} className="bg-slate-800">{country}</option>
                      ))}
                    </select>
                    {errors.country && <p className="text-red-400 text-xs mt-1">{errors.country.message}</p>}
                  </div>
                </div>

                {/* Badr University Student Section */}
                {/* <div className="mb-4 p-4 rounded-lg bg-blue-600/10 border border-blue-500/30">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      {...register('isBadrStudent')}
                      className="w-5 h-5 rounded bg-white/10 border-white/20 text-blue-500 focus:ring-blue-500"
                    />
                    <div>
                      <span className="text-white font-medium">I am a University student</span>
                      <p className="text-xs text-blue-400">Upload your ID card to get {BADR_UNIVERSITY_DISCOUNT.percentage}% off</p>
                    </div>
                  </label>

                  {isBadrStudent && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-4"
                    >
                      <label className="text-sm text-slate-300 mb-2 block">Student ID Card *</label>

                      {!studentIdPreview ? (
                        <div
                          onClick={() => fileInputRef.current?.click()}
                          className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-all ${
                            fileError ? 'border-red-500/50 bg-red-500/5' : 'border-blue-500/30 hover:border-blue-500/50'
                          }`}
                        >
                          <Upload className="w-8 h-8 mx-auto text-blue-400 mb-2" />
                          <p className="text-slate-300 text-sm mb-1">Click to upload your student ID</p>
                          <p className="text-slate-500 text-xs">JPG, JPEG, or PNG (max {BADR_UNIVERSITY_DISCOUNT.maxFileSizeMB}MB)</p>
                        </div>
                      ) : (
                        <div className="relative rounded-lg overflow-hidden border border-white/20">
                          <img
                            src={studentIdPreview}
                            alt="Student ID Preview"
                            className="w-full h-40 object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                            <div className="p-4 w-full flex items-center justify-between">
                              <div className="flex items-center gap-2 text-green-400">
                                <CheckCircle2 className="w-4 h-4" />
                                <span className="text-sm">{studentIdFile?.name}</span>
                              </div>
                              <button
                                type="button"
                                onClick={handleRemoveFile}
                                className="p-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      )}

                      <input
                        ref={fileInputRef}
                        type="file"
                        accept=".jpg,.jpeg,.png"
                        onChange={handleFileChange}
                        className="hidden"
                      />

                      {fileError && (
                        <p className="text-red-400 text-xs mt-2">{fileError}</p>
                      )}

                      {discountApplied && !fileError && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-green-400 text-xs mt-2 flex items-center gap-1"
                        >
                          <CheckCircle className="w-3 h-3" />
                          {BADR_UNIVERSITY_DISCOUNT.percentage}% discount applied! You save EGP {studentDiscountAmount.toFixed(2)}
                        </motion.p>
                      )}
                    </motion.div>
                  )}
                </div> */}
                <div className="mb-4">
  <label className="text-sm text-slate-300 block mb-2">
    Coupon Code
  </label>

  <div className="flex gap-2">
    <input
      value={couponCode}
      onChange={(e) => setCouponCode(e.target.value)}
      placeholder="Enter coupon"
      className="flex-1 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white"
    />

    <button
      type="button"
      onClick={applyCoupon}
      className="px-4 bg-blue-600 rounded-lg text-white"
    >
      Apply
    </button>
  </div>

  {couponError && (
    <p className="text-red-400 text-xs mt-2">
      {couponError}
    </p>
  )}

  {couponDiscount > 0 && (
    <p className="text-green-400 text-xs mt-2">
      Coupon Applied ({couponDiscount}% OFF)
    </p>
  )}
</div>
                <div className="mb-4">
  <label className="text-sm text-slate-300 mb-2 block">
    Payment Method *
  </label>

<select
  {...register('paymentMethod')}
  className="w-full focus:outline-none focus:ring-0 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white"
  defaultValue=""
>
  <option value="" disabled className="bg-slate-800">
    Choose payment method
  </option>

  <option value="instapay" className="bg-slate-800">
    Instapay
  </option>

  <option value="vodafone_cash" className="bg-slate-800">
    Vodafone Cash
  </option>
</select>

{errors.paymentMethod && (
  <p className="text-red-400 text-xs mt-2">
    {errors.paymentMethod.message}
  </p>
)}
<div className="mt-3 p-4 rounded-xl bg-slate-800/50 border border-white/10">
  <p className="text-slate-400 text-xs mb-1">Send payment to:</p>

  {paymentMethod === "instapay" && (
    <p className="text-blue-400 font-semibold">
      Instapay: 01288333941
    </p>
  )}

  {paymentMethod === "vodafone_cash" && (
    <p className="text-red-400 font-semibold">
      Vodafone Cash: 01021623615
    </p>
  )}
</div>
</div>
{/* phone number */}
<div className="mb-4">
  <label className="text-sm text-slate-300 mb-2 block">
    Your Payment Number *
  </label>

  <input
    {...register('senderNumber')}
    type="tel"
    placeholder="01XXXXXXXXX"
    className={`w-full px-4 py-2.5 rounded-lg bg-white/5 border ${
      errors.senderNumber ? 'border-red-500/50' : 'border-white/10'
    } text-white`}
  />

  {errors.senderNumber && (
    <p className="text-red-400 text-xs mt-1">
      {errors.senderNumber.message}
    </p>
  )}
</div>
{warning && (
  <div className="mb-3 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
    {warning}
  </div>
)}
                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
                  className="btn-premium w-full flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    `Complete Registration - $${finalPrice.toFixed(2)}`
                  )}
                </motion.button>

                <p className="text-slate-500 text-xs text-center mt-3">
                  By registering, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
<AnimatePresence>
  {showPaymentModal && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-slate-900 border border-white/10 rounded-2xl p-6 w-full max-w-md"
      >

        {/* Title */}
        <h2 className="text-xl font-bold text-white mb-2">
          Confirm Your Registration
        </h2>

        <p className="text-slate-400 text-sm mb-4">
          Please confirm that you have completed the payment to finalize your booking.
        </p>

        {/* Payment Info */}
        <div className="bg-slate-800/50 p-3 rounded-lg mb-4">
          <p className="text-slate-400 text-xs">Total Amount</p>
          <p className="text-green-400 text-xl font-bold">
            ${finalPrice.toFixed(2)}
          </p>

          <p className="text-xs mt-2 text-slate-400">
            Method: <span className="text-white">{pendingData?.paymentMethod}</span>
          </p>
        </div>

        {/* Warning */}
        <div className="text-yellow-400 text-xs mb-4">
          ⚠️ Your spot will NOT be reserved until payment is confirmed
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          
          <button
            onClick={handleConfirmPaid}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition"
          >
            I’ve Paid
          </button>

          <button
            onClick={() => {
              setShowPaymentModal(false);
              setWarning("You must complete payment to reserve your seat.!");
            }}            className="flex-1 bg-red-500/20 hover:bg-red-500/30 text-red-400 py-2 rounded-lg"
          >
            Cancel
          </button>

        </div>

      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </section>
  );
}
