'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Oswald, Inter, Caveat } from 'next/font/google';

// Typography Configuration
const oswald = Oswald({ subsets: ['latin'], variable: '--font-display' });
const inter = Inter({ subsets: ['latin'], variable: '--font-body' });
const caveat = Caveat({ subsets: ['latin'], variable: '--font-script' });

// Animation Variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function HybridEnhancedSite() {
  const [isLoading, setIsLoading] = useState(true);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Pre-loader Simulation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Mock Email Submit Handler
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // TODO: Connect to Resend or EmailJS here
    await new Promise(resolve => setTimeout(resolve, 1500)); 
    setIsSubmitting(false);
    // setIsModalOpen(false);
    alert("Application sent successfully! Our team will review your details.");
  };

  return (
    <main className={`${inter.variable} ${oswald.variable} ${caveat.variable} font-body selection:bg-blue-600 selection:text-white bg-[#0a0a0a] text-white relative`}>
      
      {/* --- PRE-LOADER --- */}
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            key="loader"
            exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
            className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
          >
            <div className="relative w-32 h-32 mb-8">
              <Image src="/brand_logo_without_background.png" alt="Logo" fill className="object-contain animate-pulse" priority />
            </div>
            <motion.div className="w-48 h-1 bg-zinc-800 relative overflow-hidden">
              <motion.div initial={{ x: "-100%" }} animate={{ x: "0%" }} transition={{ duration: 2, ease: "easeInOut" }} className="absolute inset-0 bg-blue-600" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* --- TOP BAR --- */}
      <nav className="fixed top-0 w-full z-40 px-6 md:px-12 py-6 flex justify-between items-center mix-blend-difference">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 relative"><Image src="/brand_logo_without_background.png" alt="Logo" fill className="object-contain" /></div>
          <span className="font-display text-xl md:text-2xl tracking-wide uppercase text-white">GET ENHANCED</span>
        </div>
        <div className="hidden lg:flex gap-8 text-xs font-bold tracking-widest uppercase text-white">
          <a href="#story" className="hover:text-blue-500 transition">Our Story</a>
          <a href="#journal" className="hover:text-blue-500 transition">Journal</a>
          <Link href="/distributor" className="hover:text-blue-500 transition">Distributor</Link>
        </div>
        <button className="text-[10px] md:text-xs font-bold tracking-widest uppercase border border-white px-6 py-2 hover:bg-white hover:text-black transition">Shop Now</button>
      </nav>

      {/* --- 1. HERO SECTION (Dark Theme) --- */}
      <section className="relative min-h-screen flex items-center bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/hero-silhouette.jpg" alt="Never Average" fill className="object-cover object-[center_top] opacity-50" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>
        
        <motion.div initial="hidden" animate={!isLoading ? "visible" : "hidden"} variants={staggerContainer} className="relative z-10 px-8 md:px-20 max-w-3xl">
          <motion.div variants={fadeUp} className="flex items-center gap-4 text-xs text-blue-500 tracking-[0.2em] uppercase font-bold mb-6 before:w-8 before:h-[2px] before:bg-blue-500">01</motion.div>
          <motion.h1 variants={fadeUp} className="font-display uppercase text-6xl md:text-[8rem] leading-[0.85] tracking-tight mb-8">Never<br/>Average</motion.h1>
          <motion.p variants={fadeUp} className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
            You don’t stop when it gets tough. You push through the reps that burn, the sets that break you. You’ve never been okay with average — not in the gym, not in life.
          </motion.p>
          <motion.button variants={fadeUp} className="bg-white text-black px-10 py-4 font-bold tracking-widest uppercase text-sm hover:bg-blue-600 hover:text-white transition">
            Discover the Standard
          </motion.button>
        </motion.div>
      </section>

      {/* --- 2. THE JOURNEY (Light Editorial Theme) --- */}
      <section className="bg-[#f6f3ed] text-[#0c0c0c] grid grid-cols-1 md:grid-cols-[0.4fr_0.6fr] min-h-[80vh]">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="p-10 md:p-20 flex flex-col justify-center gap-6 relative z-10">
          <motion.h2 variants={fadeUp} className="font-display uppercase text-5xl md:text-[5rem] leading-[0.9] tracking-tight">Never Average</motion.h2>
          <motion.div variants={fadeUp} className="font-display uppercase text-3xl md:text-[3rem] leading-none text-[#545454]">Transform<br/>Your Journey</motion.div>
          <motion.button variants={fadeUp} className="mt-8 border-2 border-[#0c0c0c] rounded-full px-10 py-4 font-bold uppercase text-sm hover:bg-[#0c0c0c] hover:text-white transition w-fit">
            Shop Collection
          </motion.button>
        </motion.div>
        <div className="relative min-h-[500px]">
          <Image src="/journey-back.jpg" alt="Journey" fill className="object-cover object-center" />
        </div>
      </section>

      {/* --- 3. OUR STORY (Light Editorial Theme - Sticky) --- */}
      <section id="story" className="bg-[#ece8e1] text-[#0c0c0c] p-8 md:p-20">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-12 md:gap-20 max-w-[1400px] mx-auto">
          <div className="md:sticky md:top-24 bg-[#0a0a0a] rounded-xl overflow-hidden min-h-[500px] md:min-h-[700px] shadow-2xl relative">
             <Image src="/hero-silhouette.jpg" alt="Our Story" fill className="object-cover object-center opacity-80" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-10">
                <span className="font-display text-white text-5xl uppercase tracking-tighter">Evolution</span>
             </div>
          </div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="flex flex-col gap-6 py-10">
            <motion.h2 variants={fadeUp} className="font-display uppercase text-5xl md:text-[6rem] mb-6">Our Story</motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-[#545454] leading-[1.7]">If you’ve ever started going to the gym, you probably remember why. For most people, it’s simple. You want abs, you want to look better or maybe you just want to feel more confident. So you start training.</motion.p>
            <motion.p variants={fadeUp} className="text-lg text-[#545454] leading-[1.7]">At first it’s all about the mirror... checking if anything has changed yet. But if you stick with it long enough, something shifts.</motion.p>
            <motion.p variants={fadeUp} className="text-lg text-[#545454] leading-[1.7]">You stop worrying so much about abs. You start thinking about getting stronger, beating your last workout or becoming more disciplined.</motion.p>
            <motion.p variants={fadeUp} className="text-lg text-[#545454] leading-[1.7]">And somewhere along the way, you realize the gym was never really about getting abs. It’s about the person you’re becoming. More focused. More consistent. A little stronger every day.</motion.p>
            <motion.p variants={fadeUp} className="text-lg text-[#545454] leading-[1.7]">Our journey goes beyond physical transformation. We believe that when someone is putting in real work, their supplements should actually support that effort — with clean ingredients, honest formulations, and no unnecessary hype.</motion.p>
            <motion.div variants={fadeUp} className="font-script text-4xl md:text-5xl mt-10 font-bold text-[#0c0c0c]">Never Settle For Average!</motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- 4. THE ENHANCED CODE (Hybrid Split) --- */}
      <section className="bg-white text-[#0c0c0c] grid grid-cols-1 md:grid-cols-2">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="p-10 md:p-24 flex flex-col justify-center border-b md:border-b-0 md:border-r border-black/10">
          <motion.h2 variants={fadeUp} className="font-display uppercase text-5xl md:text-[5rem] mb-12 leading-[0.9] tracking-tight">The Enhanced<br/>Code</motion.h2>
          <div className="space-y-10">
            <motion.div variants={fadeUp}>
              <h3 className="font-display text-2xl md:text-3xl mb-2">1. Performance-First</h3>
              <p className="text-[#545454] leading-relaxed">Every formula is built to deliver real results — not trends, not hype. Just what works.</p>
            </motion.div>
            <motion.div variants={fadeUp}>
              <h3 className="font-display text-2xl md:text-3xl mb-2">2. Ingredient Integrity</h3>
              <p className="text-[#545454] leading-relaxed">Purity, sourcing, and consistency are non-negotiable. We choose where they come from.</p>
            </motion.div>
            <motion.div variants={fadeUp}>
              <h3 className="font-display text-2xl md:text-3xl mb-2">3. Third-Party Tested</h3>
              <p className="text-[#545454] leading-relaxed">Rigorous ingredient validation and trusted certification ensuring uncompromised quality.</p>
            </motion.div>
            <motion.div variants={fadeUp}>
              <h3 className="font-display text-2xl md:text-3xl mb-2">4. Transparent Labels</h3>
              <p className="text-[#545454] leading-relaxed">No proprietary blends. Nothing hidden. Every ingredient, precisely disclosed.</p>
            </motion.div>
          </div>
        </motion.div>
        <div className="relative min-h-[600px] bg-[#f6f3ed]">
          <Image src="/shaker-scoop.jpg" alt="The Enhanced Code" fill className="object-cover object-center mix-blend-multiply" />
        </div>
      </section>

      {/* --- 5. DISTRIBUTOR CTA (Dark Theme Return) --- */}
      <section className="bg-[#0a0a0a] text-white py-32 px-6 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-4xl mx-auto flex flex-col items-center">
          <motion.h2 variants={fadeUp} className="font-display uppercase text-5xl md:text-[6rem] mb-6 tracking-tight">Expand The Empire</motion.h2>
          <motion.p variants={fadeUp} className="text-zinc-400 text-lg max-w-xl mb-10">Join our elite network of global distributors. Bring the new standard of clinical supplementation to your territory.</motion.p>
          <Link 
            href="/distributor"
            className="inline-block bg-blue-600 text-white px-12 py-5 font-bold tracking-widest uppercase text-sm hover:bg-white hover:text-black transition"
          >
            Apply for Distribution
          </Link>
        </motion.div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#050505] text-zinc-600 py-8 text-center text-xs font-bold tracking-widest uppercase border-t border-white/5">
        © 2026 GET ENHANCED. ALL RIGHTS RESERVED.
      </footer>

    </main>
  );
}