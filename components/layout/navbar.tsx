'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import { NAV_ITEMS, SITE_CONFIG } from '@/constants';
import { useActiveSection } from '@/hooks/use-active-section';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled
            ? 'bg-slate-900/80 backdrop-blur-xl border-b border-white/10 shadow-lg'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-2.5"
              whileHover={{ scale: 1.02 }}
            >
              <div 
                onClick={() => {
                  window.open("https://www.utopiaagency.cc", "_blank");
                }}
              className="w-10 h-10 cursor-pointer bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/30">
                {/* <Sparkles className="w-5 h-5 text-white" /> */}
                <Image src="/logo1.png" alt="" width={40} height={40} style={{ maxWidth: '60%', height: 'auto' }} />
              </div>
              <div 
                onClick={(e) => {
                handleNavClick('#home');
              }}
              className="w-10 h-10 cursor-pointer bg-gradient-to-br from-[#C6A5FF] via-[#A46BFF] to-[#6E4BCF] rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/30">
                <Image src="/logobg.png" alt="" width={40} height={40} style={{ maxWidth: '80%', height: 'auto' }} />
              </div>
              {/* <span className="text-xl font-bold text-white tracking-tight">
                {SITE_CONFIG.name.split(' ')[0]}
                <span className="text-gradient">{SITE_CONFIG.name.split(' ')[1]}</span>
              </span> */}
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.slice(0, 7).map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={cn(
                    'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300',
                    activeSection === item.href.slice(1)
                      ? 'text-white bg-white/10'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  )}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-3">
              <motion.a
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#register');
                }}
                className="hidden cursor-pointer md:inline-flex btn-premium text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Register Now
              </motion.a>
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all duration-300"
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-slate-900 border-l border-white/10 backdrop-blur-xl"
            >
              <div className="flex flex-col h-full pt-24 pb-8 px-6">
                <nav className="flex flex-col gap-2">
                  {NAV_ITEMS.map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={cn(
                        'px-4 py-3 rounded-xl text-lg font-medium transition-all duration-300',
                        activeSection === item.href.slice(1)
                          ? 'text-white bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10'
                          : 'text-slate-300 hover:text-white hover:bg-white/5'
                      )}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </nav>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: NAV_ITEMS.length * 0.05 }}
                  className="mt-auto"
                >
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('#register');
                    }}
                    className="btn-premium cursor-pointer w-full block text-center"
                  >
                    Register Now
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
