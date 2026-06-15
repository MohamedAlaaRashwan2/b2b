'use client';

import { motion } from 'framer-motion';
import { useCountdown } from '@/hooks/use-countdown';
import { EVENT_DATE } from '@/constants';

export function CountdownTimer() {
  const { days, hours, minutes, seconds } = useCountdown(EVENT_DATE);

  const timeUnits = [
    { value: days, label: 'Days' },
    { value: hours, label: 'Hours' },
    { value: minutes, label: 'Minutes' },
    { value: seconds, label: 'Seconds' },
  ];

  return (
    <div className="relative">
      <div className="glass-card p-4 md:p-8 rounded-3xl">
        <h3 className="text-lg font-medium text-slate-400 text-center mb-6">
          Event Starts In
        </h3>
        <div className="grid grid-cols-4 gap-4">
          {timeUnits.map((unit, index) => (
            <div key={unit.label} className="flex flex-col items-center md:block md:text-center">
              <motion.div
                key={`${unit.label}-${unit.value}`}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                className="glass-card p-3 md:p-4 rounded-2xl"
              >
                <motion.span
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  key={unit.value}
                  className="block text-4xl md:text-5xl font-bold text-white tabular-nums"
                >
                  {String(unit.value).padStart(2, '0')}
                </motion.span>
              </motion.div>
              <p className="mt-2 text-sm text-slate-400">{unit.label}</p>
            </div>
          ))}
        </div>

        {/* Mobile Countdown */}
        {/* <div className="lg:hidden mt-4 text-center">
          <p className="text-white font-semibold">
            {days}d {hours}h {minutes}m {seconds}s
          </p>
        </div> */}
      </div>

      {/* Glow Effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-purple-600/20 blur-3xl -z-10 rounded-3xl" />
    </div>
  );
}
