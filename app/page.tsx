'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const animateImage = {
  initial: { scale: 1.02 },
  animate: { scale: 1.07, y: [-6, 6, -6] as number[] },
  transition: { duration: 12, repeat: Infinity, ease: 'easeInOut' as const },
};

const navItems = [
  'Our Story',
  'Enhanced Life - Join our community',
  'Enhanced Journal',
  'Where to Buy',
  'Lab Test Reports',
  'Become a Distributor',
  'Contact Us',
];

export default function Page() {
  return (
    <div
      className="font-['Inter',sans-serif] text-[#0c0c0c]"
      style={{ background: 'linear-gradient(180deg, #0a0a0a 0 96px, #ece8e1 96px 100%)' }}
    >
      <div className="mx-auto w-[min(calc(100%-28px),1180px)] pb-20">
        <header className="flex min-h-24 items-center justify-between gap-6 text-white">
          <div className="flex items-center gap-3.5 font-extrabold tracking-[0.04em]">
            <span className="relative h-[34px] w-[34px] rotate-45 border-2 border-white after:absolute after:inset-[7px] after:border-r-2 after:border-t-2 after:content-['']" />
            <span>GET ENHANCED</span>
          </div>
          <nav className="hidden flex-wrap gap-7 text-sm text-white/85 lg:flex">
            {navItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </nav>
        </header>

        <main className="overflow-hidden bg-white shadow-[0_20px_50px_rgba(0,0,0,.08)]">
          <section className="grid min-h-[720px] border-b border-black/10 bg-[#f5f2ec] md:grid-cols-[.92fr_1.08fr]">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger} className="flex flex-col justify-center gap-[18px] p-[clamp(28px,4vw,64px)]">
              <motion.div variants={fadeUp} className="flex items-center gap-[18px] text-[13px] uppercase tracking-[.18em] text-[#383838] before:h-[2px] before:w-[38px] before:bg-black/35 before:content-[''] after:h-[2px] after:w-[38px] after:bg-black/35 after:content-['']">01</motion.div>
              <motion.h1 variants={fadeUp} className="font-['Oswald',sans-serif] m-0 max-w-[6ch] text-[clamp(54px,7vw,92px)] uppercase leading-[.92] tracking-[.01em]">Never Average</motion.h1>
              {[
                'You don’t stop when it gets tough. You push through the reps that burn, the sets that break you. You’ve never been okay with average — not in the gym, not in life.',
                'So why settle for ordinary supplements?',
                'Get Enhanced brings you a higher standard of supplementation — where quality isn’t claimed, it’s evident.',
                'It is made for the days you push harder. Made for the days you don’t stop.',
                'Made to keep up — every single time.',
              ].map((text) => (
                <motion.p key={text} variants={fadeUp} className="m-0 max-w-[24ch] text-[clamp(16px,1.5vw,21px)] leading-[1.65] text-[#545454]">{text}</motion.p>
              ))}
            </motion.div>
            <motion.div className="relative overflow-hidden" {...animateImage}>
              <Image src="/hero-bg.png" alt="Never Average reference screen" fill className="object-cover" priority />
            </motion.div>
          </section>

          <section className="grid min-h-[700px] border-b border-black/10 bg-[#f7f4ee] md:grid-cols-[.38fr_.62fr]">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="relative flex flex-col justify-center gap-[18px] p-[clamp(28px,3.5vw,58px)] md:sticky md:top-0 md:h-screen">
              <motion.h2 variants={fadeUp} className="font-['Oswald',sans-serif] max-w-[4ch] text-[clamp(54px,6vw,86px)] uppercase leading-[.92]">Never Average</motion.h2>
              <motion.div variants={fadeUp} className="font-['Oswald',sans-serif] text-[clamp(30px,3vw,52px)] uppercase leading-[.95]">Transform<br />Your Journey</motion.div>
              <motion.button variants={fadeUp} whileHover={{ y: -2 }} className="group relative inline-flex min-h-11 w-fit items-center gap-2 overflow-hidden rounded-full border-2 border-[#1b1b1b] bg-white px-[22px] text-[15px] font-bold uppercase">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Shop Now</span>
                <span className="relative z-10 text-sm transition-all duration-300 group-hover:translate-x-1 group-hover:text-white">→</span>
                <span className="absolute inset-0 -translate-x-full bg-black transition-transform duration-300 group-hover:translate-x-0" />
              </motion.button>
            </motion.div>
            <motion.div className="relative overflow-hidden min-h-[420px]" {...animateImage}>
              <Image src="/hero-bg.png" alt="Transform your journey reference screen" fill className="object-cover" />
            </motion.div>
          </section>

          <div className="flex items-center justify-between bg-white px-[30px] py-[26px]">
            <div className="font-['Oswald',sans-serif] text-[clamp(34px,3.5vw,54px)] uppercase leading-[.92]">Best Sellers</div>
            <div>View all</div>
          </div>

          <section className="border-b border-black/10 bg-[#faf8f4] p-[clamp(28px,4vw,64px)]">
            <div className="grid items-start gap-[clamp(24px,3vw,50px)] md:grid-cols-[.96fr_1.04fr]">
              <motion.div className="relative min-h-[620px] overflow-hidden rounded-[10px] bg-[#0d0d0d] shadow-[0_20px_50px_rgba(0,0,0,.08)]" {...animateImage}>
                <Image src="/hero-bg.png" alt="Our story reference screen" fill className="object-cover" />
              </motion.div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={stagger} className="md:sticky md:top-10">
                <motion.h2 variants={fadeUp} className="font-['Oswald',sans-serif] mb-[18px] text-[clamp(52px,5vw,80px)] uppercase leading-[.92]">Our Story</motion.h2>
                {[
                  'If you’ve ever started going to the gym, you probably remember why. For most people, it’s simple. You want abs, you want to look better or maybe you just want to feel more confident. So you start training.',
                  'At first it’s all about the mirror... checking if anything has changed yet. But if you stick with it long enough, something shifts.',
                  'You stop worrying so much about abs. You start thinking about getting stronger, beating your last workout or becoming more disciplined.',
                  'And somewhere along the way, you realize the gym was never really about getting abs. It’s about the person you’re becoming. More focused. More consistent. A little stronger every day.',
                  'And deep down, we’re all chasing the same thing — to be better than we were yesterday. That’s the mindset behind Get Enhanced.',
                  'Our journey goes beyond physical transformation, helping people exceed expectations and win in all areas of life. We just believe that when someone is putting in real work, their supplements should actually support that effort — with clean ingredients, honest formulations, and no unnecessary hype.',
                  'Because at the end of the day, progress isn’t about being perfect. It’s about showing up, putting in the work, and moving forward — one step at a time.',
                  'And if that’s the mindset you live by, you’re already part of Get Enhanced.',
                ].map((p) => (
                  <motion.p key={p} variants={fadeUp} className="mb-[14px] max-w-[42ch] text-[clamp(15px,1.25vw,18px)] leading-[1.5] text-[#212121]">{p}</motion.p>
                ))}
                <motion.div variants={fadeUp} className="font-['Caveat',cursive] mt-4 text-[clamp(34px,3.2vw,56px)]">Never Settle For Average!</motion.div>
              </motion.div>
            </div>
          </section>

          <div className="bg-white px-5 pb-[34px] pt-[18px] text-center text-[clamp(28px,3vw,48px)] text-[#272727]">Fueling Performance, Everywhere.</div>

          <section className="border-b border-black/10 bg-[#f1efeb] p-[clamp(28px,4vw,66px)]">
            <div className="grid items-stretch gap-[clamp(24px,3vw,50px)] md:grid-cols-2">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                <motion.h2 variants={fadeUp} className="font-['Oswald',sans-serif] mb-[26px] text-[clamp(48px,5vw,74px)] uppercase leading-[.92]">The Enhanced Code</motion.h2>
                <div className="grid gap-6">
                  {[
                    ['1. Performance-First Formulation', 'Every formula is built to deliver real results — not trends, not hype. Just what works.'],
                    ['2. Raw Ingredient Integrity', 'We don’t just choose ingredients — we choose where they come from. Purity, sourcing, and consistency are non-negotiable.'],
                    ['3. Third-Party Tested', 'Our supplements undergo rounds of testing, rigorous ingredient validation, and trusted third-party certification — ensuring uncompromised quality and accuracy.'],
                    ['4. Transparent Labels', 'No proprietary blends. Nothing hidden. Every ingredient, precisely disclosed with its exact dose.'],
                  ].map(([title, body]) => (
                    <motion.article key={title} variants={fadeUp} className="group">
                      <h3 className="font-['Oswald',sans-serif] mb-1.5 text-[clamp(28px,2.5vw,40px)] leading-none">{title}</h3>
                      <p className="max-w-[34ch] text-[clamp(16px,1.25vw,20px)] leading-[1.45] text-[#222]">{body}</p>
                    </motion.article>
                  ))}
                </div>
              </motion.div>
              <motion.div className="relative min-h-[760px] overflow-hidden bg-[#ddd8d2]" {...animateImage}>
                <Image src="/hero-bg.png" alt="The Enhanced Code reference screen" fill className="object-cover" />
              </motion.div>
            </div>
          </section>

          <div className="font-['Oswald',sans-serif] bg-[#ece9e3] px-4 pb-7 pt-6 text-center text-[clamp(40px,4vw,68px)] uppercase leading-[.95]">
            Verified Customer Reviews
          </div>
        </main>
      </div>
    </div>
  );
}
