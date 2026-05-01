'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

export default function Home() {
  return (
    <main className="bg-[#05070c] text-white selection:bg-blue-500 selection:text-white">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#05070c]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Image
              src="/brand_logo_without_background.png"
              alt="Get Enhanced logo"
              width={42}
              height={42}
              priority
            />
            <span className="text-lg font-black tracking-tight">GET ENHANCED</span>
          </div>
          <div className="hidden gap-8 text-sm font-semibold text-zinc-200 md:flex">
            <a href="#never-average" className="transition hover:text-white">Never Average</a>
            <a href="#our-story" className="transition hover:text-white">Our Story</a>
          </div>
          <a
            href="#never-average"
            className="rounded-full border border-white/30 px-5 py-2 text-xs font-bold tracking-wider uppercase transition hover:bg-white hover:text-black"
          >
            Explore
          </a>
        </div>
      </nav>

      <section
        id="never-average"
        className="mx-auto grid min-h-[85vh] max-w-7xl grid-cols-1 overflow-hidden px-6 py-10 md:grid-cols-2 md:py-14"
      >
        <motion.article
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
          className="order-2 bg-[#f7f7f7] p-8 text-black md:order-1 md:p-14"
        >
          <motion.p variants={fadeUp} className="mb-6 text-xs font-semibold tracking-[0.2em] text-zinc-500 uppercase">01</motion.p>
          <motion.h1 variants={fadeUp} className="mb-6 text-5xl font-black leading-none tracking-tight md:text-7xl">NEVER AVERAGE</motion.h1>
          <motion.div variants={fadeUp} className="space-y-6 text-lg leading-relaxed text-zinc-800">
            <p>You don’t stop when it gets tough. You push through the reps that burn, the sets that break you. You’ve never been okay with average — not in the gym, not in life.</p>
            <p>So why settle for ordinary supplements?</p>
            <p>Get Enhanced brings you a higher standard of supplementation — where quality isn’t claimed, it’s evident.</p>
            <p>It is Made for the days you push harder. Made for the days you don’t stop. Made to keep up — every single time.</p>
            <p className="font-semibold">Average was never part of you.</p>
          </motion.div>
        </motion.article>
        <div className="order-1 relative min-h-[320px] md:order-2 md:min-h-full">
          <Image src="/hero-bg.png" alt="Athlete in Get Enhanced t-shirt" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-l from-black/20 via-transparent to-black/35" />
        </div>
      </section>

      <section id="our-story" className="bg-white py-16 text-black md:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <motion.div variants={fadeUp} className="relative overflow-hidden rounded-lg bg-zinc-900">
            <Image src="/brand_logo.jpeg" alt="Get Enhanced story visual" width={900} height={1200} className="h-full w-full object-cover" />
          </motion.div>
          <motion.article variants={fadeUp} className="space-y-5">
            <h2 className="text-5xl font-black tracking-tight md:text-6xl">OUR STORY</h2>
            <div className="space-y-4 text-lg leading-relaxed text-zinc-800">
              <p>If you’ve ever started going to the gym, you probably remember why.</p>
              <p>For most people, it’s simple. You want abs, you want to look better or Maybe you just want to feel more confident. So you start training.</p>
              <p>At first it’s all about the mirror…checking if anything has changed yet.</p>
              <p>But if you stick with it long enough, something shifts.</p>
              <p>You stop worrying so much about abs. You start thinking about getting stronger, beating your last workout or becoming more disciplined.</p>
              <p>And somewhere along the way, you realize the gym was never really about getting abs.</p>
              <p>It’s about the person you’re becoming.</p>
              <p>More focused. More consistent. A little stronger every day.</p>
              <p>And deep down, we’re all chasing the same thing — to be better than we were yesterday.</p>
              <p>That’s the mindset behind Get Enhanced.</p>
              <p>Our journey goes beyond physical transformation, helping people exceed expectations and win in all areas of life.</p>
              <p>We just believe that when someone is putting in real work, their supplements should actually support that effort — with clean ingredients, honest formulations, and no unnecessary hype.</p>
              <p>Because at the end of the day, progress isn’t about being perfect.</p>
              <p>It’s about showing up, putting in the work, and moving forward — one step at a time.</p>
              <p>And if that’s the mindset you live by, you’re already part of Get Enhanced.</p>
              <p className="pt-2 text-2xl font-black italic tracking-tight">Never Settle for Average.</p>
            </div>
          </motion.article>
        </motion.div>
      </section>
    </main>
  );
}
