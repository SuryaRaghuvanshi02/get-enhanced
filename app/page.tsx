'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// Reusable animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function SinglePageExperience() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading time (e.g., 2.5 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-zinc-950 text-white font-sans selection:bg-blue-600 selection:text-white overflow-hidden relative">
      
      {/* --- PRE-LOADER (The Suspense) --- */}
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            key="loader"
            exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
            className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
          >
            <div className="relative w-32 h-32 mb-8">
               {/* Replace with your actual logo path */}
              <Image src="/brand_logo_without_background.png" alt="Logo" fill className="object-contain animate-pulse" priority />
            </div>
            <div className="overflow-hidden">
              <motion.h1 
                initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.5 }}
                className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white italic"
              >
                INITIALIZING...
              </motion.h1>
            </div>
            <motion.div 
              className="w-48 h-1 bg-zinc-800 mt-6 relative overflow-hidden"
            >
              <motion.div 
                initial={{ x: "-100%" }} animate={{ x: "0%" }} transition={{ duration: 2.5, ease: "easeInOut" }}
                className="absolute inset-0 bg-blue-600"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference">
        <span className="text-xl md:text-2xl font-black tracking-tighter uppercase italic text-white">
          GET ENHANCED
        </span>
        <div className="hidden lg:flex gap-6 text-[10px] md:text-xs font-bold tracking-widest uppercase text-white">
          <a href="#story" className="hover:text-blue-500 transition">Our Story</a>
          <a href="#never-average" className="hover:text-blue-500 transition">Never Average</a>
          <a href="#journal" className="hover:text-blue-500 transition">Journal</a>
          <a href="#lab-reports" className="hover:text-blue-500 transition">Lab Tests</a>
        </div>
        <button className="text-[10px] md:text-xs font-bold tracking-widest uppercase border border-white px-6 py-2 hover:bg-white hover:text-black transition">
          Shop Now
        </button>
      </nav>

      {/* --- 1. HERO SECTION --- */}
      <section className="relative h-screen flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(30,58,138,0.2),transparent_60%)] pointer-events-none" />
        
        <motion.div initial="hidden" animate={!isLoading ? "visible" : "hidden"} variants={staggerContainer} className="z-10 flex flex-col items-center">
          <motion.h1 variants={fadeUp} className="text-6xl md:text-[9rem] font-black uppercase tracking-tighter leading-[0.85] mb-6">
            Evolve <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600">Or Remain.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-zinc-400 max-w-lg text-lg md:text-xl font-medium">
            Fueling performance, everywhere. The highest standard of clinical supplementation.
          </motion.p>
        </motion.div>
      </section>

      {/* --- 2. OUR STORY --- */}
      <section id="story" className="py-32 px-6 md:px-20 bg-white text-black">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-32">
            <motion.h2 variants={fadeUp} className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none">Our <br/> Story</motion.h2>
            <motion.div variants={fadeUp} className="w-20 h-2 bg-blue-600 mt-8" />
          </div>
          <div className="space-y-8 text-lg text-zinc-600 font-medium leading-relaxed">
            <motion.p variants={fadeUp}><strong className="text-black">If you’ve ever started going to the gym, you probably remember why.</strong> You want to look better or feel more confident. But stick with it, and something shifts.</motion.p>
            <motion.p variants={fadeUp}>It becomes about getting stronger, beating your last workout, and becoming more disciplined. Deep down, we’re all chasing the same thing — to be better than yesterday.</motion.p>
            <motion.p variants={fadeUp}>We believe your supplements should actually support that effort — with clean ingredients, honest formulations, and no hype. Just progress, one step at a time.</motion.p>
            <motion.p variants={fadeUp} className="text-2xl font-black text-black italic tracking-tight pt-8 border-t border-zinc-200">Never Settle For Average.</motion.p>
          </div>
        </motion.div>
      </section>

      {/* --- 3. NEVER AVERAGE & THE CODE --- */}
      <section id="never-average" className="py-32 px-6 bg-zinc-950 flex flex-col items-center text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-4xl mx-auto mb-32">
          <motion.h2 variants={fadeUp} className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-white mb-8">Never Average.</motion.h2>
          <motion.p variants={fadeUp} className="text-xl md:text-2xl text-zinc-400 mb-8">You push through the sets that break you. You’ve never been okay with average. So why settle for ordinary supplements?</motion.p>
        </motion.div>
      </section>

      {/* --- 4. ENHANCED JOURNAL (Community & Blog) --- */}
      <section id="journal" className="py-32 px-6 bg-zinc-900 border-y border-zinc-800">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-7xl mx-auto">
          <motion.div variants={fadeUp} className="flex justify-between items-end mb-16">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">The Journal</h2>
            <span className="text-blue-500 text-sm font-bold tracking-widest uppercase hover:text-white transition cursor-pointer">View All</span>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div key={item} variants={fadeUp} className="group cursor-pointer">
                <div className="w-full h-64 bg-zinc-800 rounded-lg mb-6 overflow-hidden relative">
                  {/* Placeholder for Blog Images */}
                  <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition duration-500" />
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-2 group-hover:text-blue-500 transition">Training Beyond Failure</h3>
                <p className="text-zinc-400 text-sm">Discover the science behind hypertrophy and elite recovery protocols.</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* --- 5. WHERE TO BUY & 6. LAB REPORTS (Split Section) --- */}
      <section id="lab-reports" className="py-0 flex flex-col md:flex-row bg-white text-black min-h-[60vh]">
        {/* Lab Reports (Left) */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="flex-1 p-12 md:p-24 flex flex-col justify-center border-b md:border-b-0 md:border-r border-zinc-200">
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-6">100% Transparency.</motion.h2>
          <motion.p variants={fadeUp} className="text-zinc-600 mb-8 max-w-md">Every batch is rigorously tested. No proprietary blends. View our third-party clinical certificates directly.</motion.p>
          <motion.button variants={fadeUp} className="self-start border border-black px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-black hover:text-white transition">
            View Lab Reports
          </motion.button>
        </motion.div>

        {/* Where to Buy (Right) */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="flex-1 p-12 md:p-24 bg-zinc-50 flex flex-col justify-center">
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-6">Where to Buy.</motion.h2>
          <motion.p variants={fadeUp} className="text-zinc-600 mb-8 max-w-md">Secure your stack directly through our platform or our verified global retail partners.</motion.p>
          <motion.button variants={fadeUp} className="self-start bg-blue-600 text-white px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-blue-700 transition">
            Order on Amazon
          </motion.button>
        </motion.div>
      </section>

      {/* --- 7. BECOME A DISTRIBUTOR & 8. CONTACT US (Heavy Footer) --- */}
      <section className="bg-zinc-950 pt-32 pb-12 px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 border-b border-zinc-800 pb-20">
          
          {/* Become a Distributor */}
          <div>
            <motion.h2 variants={fadeUp} className="text-5xl font-black tracking-tighter uppercase mb-6 text-white">Command Your <br/><span className="text-blue-600">Territory.</span></motion.h2>
            <motion.p variants={fadeUp} className="text-zinc-400 mb-10 max-w-md">Join our elite network of global distributors. Bring the new standard of supplementation to your community.</motion.p>
            <motion.button variants={fadeUp} className="bg-white text-black px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-zinc-200 transition">
              Apply For Distribution
            </motion.button>
          </div>

          {/* Contact Us Form */}
          <div className="bg-zinc-900 p-8 md:p-10 rounded-xl">
            <motion.h3 variants={fadeUp} className="text-2xl font-black tracking-tighter uppercase mb-6">Contact The Team</motion.h3>
            <motion.form variants={staggerContainer} className="space-y-4">
              <motion.input variants={fadeUp} type="text" placeholder="YOUR NAME" className="w-full bg-zinc-950 border border-zinc-800 text-white px-4 py-3 text-xs font-mono focus:border-blue-500 outline-none" />
              <motion.input variants={fadeUp} type="email" placeholder="EMAIL ADDRESS" className="w-full bg-zinc-950 border border-zinc-800 text-white px-4 py-3 text-xs font-mono focus:border-blue-500 outline-none" />
              <motion.textarea variants={fadeUp} placeholder="MESSAGE" rows={4} className="w-full bg-zinc-950 border border-zinc-800 text-white px-4 py-3 text-xs font-mono focus:border-blue-500 outline-none resize-none" />
              <motion.button variants={fadeUp} className="w-full bg-blue-600 text-white py-4 text-xs font-bold tracking-widest uppercase hover:bg-blue-700 transition">
                Send Transmission
              </motion.button>
            </motion.form>
          </div>
        </motion.div>

        {/* True Footer */}
        <div className="text-center text-zinc-600 text-[10px] font-mono uppercase tracking-widest mt-12">
          © 2026 GET ENHANCED. ALL RIGHTS RESERVED. <br className="md:hidden" /> | BUILT FOR THE ELITE.
        </div>
      </section>

    </main>
  );
}