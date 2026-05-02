'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Oswald, Inter } from 'next/font/google';

const oswald = Oswald({ subsets: ['latin'], variable: '--font-display' });
const inter = Inter({ subsets: ['latin'], variable: '--font-body' });

export default function DistributorApplication() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // TODO: Connect to Resend / EmailJS
    await new Promise(resolve => setTimeout(resolve, 1500)); 
    setIsSubmitting(false);
    alert("Application sent successfully! Our team will review your details.");
    window.location.href = "/"; // Redirect home after submit
  };

  return (
    <main className={`${inter.variable} ${oswald.variable} font-body bg-[#f6f3ed] text-[#0c0c0c] min-h-screen selection:bg-blue-600 selection:text-white`}>
      
      {/* Minimal Navigation */}
      <nav className="w-full px-8 py-6 flex justify-between items-center bg-white border-b border-black/5">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 relative transition-transform group-hover:scale-110">
            <Image src="/brand_logo_without_background.png" alt="Logo" fill className="object-contain filter invert" />
          </div>
          <span className="font-display font-bold uppercase tracking-wide text-xl">GET ENHANCED</span>
        </Link>
        <Link href="/" className="text-xs font-bold tracking-widest uppercase hover:text-blue-600 transition">
          &larr; Back to Site
        </Link>
      </nav>

      {/* Application Form Container */}
      <div className="max-w-3xl mx-auto px-4 py-16 md:py-24">
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <span className="text-blue-600 text-xs font-bold tracking-widest uppercase bg-blue-600/10 px-4 py-1 rounded-full">Distributor Information Request</span>
          <h1 className="font-display text-5xl md:text-6xl uppercase mt-6 mb-4 tracking-tight">Become a Distributor</h1>
          <p className="text-[#545454] text-lg max-w-xl mx-auto">Complete the application below to initiate your inquiry for GET ENHANCED distribution in India.</p>
        </motion.div>

        <motion.form initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} onSubmit={handleFormSubmit} className="space-y-8 bg-white p-8 md:p-12 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-black/5">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold mb-2">First Name*</label>
              <input required type="text" className="w-full bg-[#f6f3ed] border border-transparent rounded-md px-4 py-3 focus:border-blue-600 focus:bg-white outline-none transition" placeholder="Enter first name" />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Last Name*</label>
              <input required type="text" className="w-full bg-[#f6f3ed] border border-transparent rounded-md px-4 py-3 focus:border-blue-600 focus:bg-white outline-none transition" placeholder="Enter last name" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold mb-2">Email*</label>
            <input required type="email" className="w-full bg-[#f6f3ed] border border-transparent rounded-md px-4 py-3 focus:border-blue-600 focus:bg-white outline-none transition" placeholder="name@company.com" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold mb-2">Phone Number*</label>
              <input required type="tel" className="w-full bg-[#f6f3ed] border border-transparent rounded-md px-4 py-3 focus:border-blue-600 focus:bg-white outline-none transition" placeholder="+91 98765 43210" />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Company Name*</label>
              <input required type="text" className="w-full bg-[#f6f3ed] border border-transparent rounded-md px-4 py-3 focus:border-blue-600 focus:bg-white outline-none transition" placeholder="Your company name" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold mb-2">GST Number</label>
            <input type="text" className="w-full bg-[#f6f3ed] border border-transparent rounded-md px-4 py-3 focus:border-blue-600 focus:bg-white outline-none transition" placeholder="Enter GST number" />
            <span className="text-xs text-[#545454] mt-2 block">Optional, but speeds up distributor verification.</span>
          </div>

          <div className="space-y-4 pt-4 border-t border-black/5">
            <h3 className="font-display text-2xl uppercase tracking-tight mb-4">Business Details</h3>
            <label className="block text-sm font-bold">Business Address*</label>
            <input required type="text" className="w-full bg-[#f6f3ed] border border-transparent rounded-md px-4 py-3 focus:border-blue-600 focus:bg-white outline-none transition" placeholder="Address line 1" />
            <input type="text" className="w-full bg-[#f6f3ed] border border-transparent rounded-md px-4 py-3 focus:border-blue-600 focus:bg-white outline-none transition" placeholder="Address line 2" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input required type="text" className="w-full bg-[#f6f3ed] border border-transparent rounded-md px-4 py-3 focus:border-blue-600 focus:bg-white outline-none transition" placeholder="City" />
              <input required type="text" className="w-full bg-[#f6f3ed] border border-transparent rounded-md px-4 py-3 focus:border-blue-600 focus:bg-white outline-none transition" placeholder="State" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
              <input required type="text" className="w-full bg-[#f6f3ed] border border-transparent rounded-md px-4 py-3 focus:border-blue-600 focus:bg-white outline-none transition" placeholder="PIN Code" />
              <div>
                <label className="block text-sm font-bold mb-2">Business Type*</label>
                <select required className="w-full bg-[#f6f3ed] border border-transparent rounded-md px-4 py-3 focus:border-blue-600 focus:bg-white outline-none transition appearance-none">
                  <option value="">Select business type</option>
                  <option value="retail">Retail Store</option>
                  <option value="gym">Gym / Fitness Chain</option>
                  <option value="distributor">Supplement Distributor</option>
                  <option value="pharmacy">Pharmacy / Wellness Store</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-black/5">
            <label className="block text-sm font-bold mb-2">Business Overview</label>
            <textarea rows={5} className="w-full bg-[#f6f3ed] border border-transparent rounded-md px-4 py-3 focus:border-blue-600 focus:bg-white outline-none transition resize-none" placeholder="Tell us about your business, current market coverage, and why you want to distribute GET ENHANCED." />
          </div>

          <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs text-[#545454] max-w-[280px]">Note: This portal is currently optimized for India-only distribution inquiries.</p>
            <button type="submit" disabled={isSubmitting} className="w-full md:w-auto bg-[#0a0a0a] text-white px-10 py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-blue-600 transition disabled:opacity-50">
              {isSubmitting ? 'Transmitting...' : 'Submit Inquiry'}
            </button>
          </div>
        </motion.form>
      </div>
    </main>
  );
}