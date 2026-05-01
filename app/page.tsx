'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const codePoints = [
  {
    title: 'Performance-First Formulation',
    body: 'Every formula is built to deliver real results—not trends, not hype. Just what works.',
  },
  {
    title: 'Raw Ingredient Integrity',
    body: 'We don’t just choose ingredients—we choose where they come from. Purity, sourcing, and consistency are non-negotiable.',
  },
  {
    title: 'Third-Party Tested',
    body: 'Our supplements undergo four rounds of testing, rigorous ingredient validation, and trusted third-party certification—ensuring uncompromised quality and accuracy.',
  },
  {
    title: 'Transparent Labels',
    body: 'No proprietary blends. Nothing hidden. Every ingredient, precisely disclosed with its exact dose.',
  },
];

export default function Home() {
  return (
    <main className="bg-[#03050a] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#03050a]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <div className="flex items-center gap-3">
            <Image src="/brand_logo_without_background.png" alt="Get Enhanced" width={38} height={38} priority />
            <span className="text-lg font-black tracking-tight">GET ENHANCED</span>
          </div>
          <nav className="hidden items-center gap-7 text-sm font-medium text-zinc-300 md:flex">
            <a href="#never-average" className="transition hover:text-white">Never Average</a>
            <a href="#our-story" className="transition hover:text-white">Our Story</a>
            <a href="#enhanced-code" className="transition hover:text-white">The Enhanced Code</a>
          </nav>
        </div>
      </header>

      <section id="never-average" className="mx-auto grid max-w-7xl grid-cols-1 px-5 py-8 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.article initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={stagger} className="order-2 bg-white px-6 py-10 text-black md:px-12 md:py-16 lg:order-1">
          <motion.p variants={fadeUp} className="mb-4 text-sm font-semibold tracking-[0.18em] text-zinc-500">01</motion.p>
          <motion.h1 variants={fadeUp} className="mb-6 text-5xl font-black leading-[0.9] tracking-tight md:text-7xl">NEVER AVERAGE</motion.h1>
          <motion.div variants={fadeUp} className="space-y-6 text-lg leading-relaxed text-zinc-800">
            <p>You don’t stop when it gets tough. You push through the reps that burn, the sets that break you. You’ve never been okay with average — not in the gym, not in life.</p>
            <p>So why settle for ordinary supplements?</p>
            <p>Get Enhanced brings you a higher standard of supplementation — where quality isn’t claimed, it’s evident.</p>
            <p>It is Made for the days you push harder. Made for the days you don’t stop. Made to keep up — every single time.</p>
            <p className="font-semibold">Average was never part of you.</p>
          </motion.div>
        </motion.article>

        <div className="order-1 relative min-h-[360px] overflow-hidden lg:order-2">
          <Image src="/hero-bg.png" alt="Transform your journey" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-black/45 via-black/15 to-transparent" />
        </div>
      </section>

      <section id="our-story" className="bg-white py-14 text-black md:py-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger} className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 md:px-8 lg:grid-cols-[1fr_1.1fr]">
          <motion.div variants={fadeUp} className="relative min-h-[360px] overflow-hidden rounded-sm bg-zinc-950">
            <Image src="/brand_logo.jpeg" alt="Our story visual" fill className="object-cover" />
          </motion.div>
          <motion.article variants={fadeUp} className="space-y-4">
            <h2 className="text-5xl font-black tracking-tight md:text-6xl">OUR STORY</h2>
            <p className="text-lg leading-relaxed">If you’ve ever started going to the gym, you probably remember why.</p>
            <p className="text-lg leading-relaxed">For most people, it’s simple. You want abs, you want to look better or Maybe you just want to feel more confident. So you start training.</p>
            <p className="text-lg leading-relaxed">At first it’s all about the mirror…checking if anything has changed yet.</p>
            <p className="text-lg leading-relaxed">But if you stick with it long enough, something shifts.</p>
            <p className="text-lg leading-relaxed">You stop worrying so much about abs. You start thinking about getting stronger, beating your last workout or becoming more disciplined.</p>
            <p className="text-lg leading-relaxed">And somewhere along the way, you realize the gym was never really about getting abs.</p>
            <p className="text-lg leading-relaxed">It’s about the person you’re becoming.</p>
            <p className="text-lg leading-relaxed">More focused. More consistent. A little stronger every day.</p>
            <p className="text-lg leading-relaxed">And deep down, we’re all chasing the same thing — to be better than we were yesterday.</p>
            <p className="text-lg leading-relaxed">That’s the mindset behind Get Enhanced.</p>
            <p className="text-lg leading-relaxed">Our journey goes beyond physical transformation, helping people exceed expectations and win in all areas of life.</p>
            <p className="text-lg leading-relaxed">We just believe that when someone is putting in real work, their supplements should actually support that effort — with clean ingredients, honest formulations, and no unnecessary hype.</p>
            <p className="text-lg leading-relaxed">Because at the end of the day, progress isn’t about being perfect.</p>
            <p className="text-lg leading-relaxed">It’s about showing up, putting in the work, and moving forward — one step at a time.</p>
            <p className="text-lg leading-relaxed">And if that’s the mindset you live by, you’re already part of Get Enhanced.</p>
            <p className="pt-2 text-3xl font-black italic">Never Settle for Average.</p>
          </motion.article>
        </motion.div>
      </section>

      <section id="enhanced-code" className="bg-[#f3f3f3] py-14 text-black md:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-0 overflow-hidden px-5 md:px-8 lg:grid-cols-2">
          <div className="bg-white px-6 py-10 md:px-10">
            <h3 className="mb-8 text-4xl font-black tracking-tight md:text-5xl">THE ENHANCED CODE</h3>
            <div className="space-y-7">
              {codePoints.map((point, i) => (
                <article key={point.title}>
                  <h4 className="text-3xl font-black">{i + 1}. {point.title}</h4>
                  <p className="mt-1 text-2xl leading-relaxed text-zinc-800">{point.body}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="relative min-h-[500px] bg-zinc-200">
            <Image src="/hero-bg.png" alt="Get Enhanced product visual" fill className="object-cover object-center" />
          </div>
        </div>
      </section>
    </main>
  );
}
