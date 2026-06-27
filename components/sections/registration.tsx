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
  const TICKETS_SOLD_OUT = true;
  
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
        </div>

        <AnimatePresence mode="popLayout">
  {TICKETS_SOLD_OUT ? (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="max-w-2xl mx-auto"
    >
      <div className="glass-card p-10 rounded-2xl text-center border border-red-500/30">

        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-red-500/10 flex items-center justify-center">
          <span className="text-5xl">🎟️</span>
        </div>

        <h2 className="text-4xl font-bold text-white mb-4">
          Tickets Sold Out
        </h2>

        <p className="text-slate-300 text-lg leading-8 mb-6">
          Thank you for your amazing interest in <strong>Busen 2026</strong>.
          <br />
          All available tickets have been reserved.
        </p>

        <div className="rounded-xl bg-blue-500/10 border border-blue-500/30 p-5">
          <p className="text-blue-300 text-lg font-medium">
            🚀 A new batch of tickets will be available soon.
          </p>

          <p className="text-slate-400 mt-2">
            Stay tuned for the next release.
          </p>
        </div>

      </div>
    </motion.div>
  ) : (
    <>
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
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center"
            >
              <CheckCircle className="w-8 h-8 text-white" />
            </motion.div>

            <h3 className="text-xl font-bold text-white mb-2">
              Registration Successful!
            </h3>

            <p className="text-slate-400 mb-6">
              Check your email for confirmation.
            </p>

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
        // ضع هنا الفورم الحالي بالكامل كما هو بدون أي تعديل
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-2xl mx-auto"
        >
          {/* الصق الفورم الحالي بالكامل هنا */}
        </motion.form>
      )}
    </>
  )}
</AnimatePresence>
    </section>
  );
}
