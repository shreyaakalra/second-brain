import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function Hero() {
  const [inputVal, setInputVal] = useState("");

  return (
    <section className="relative min-h-screen bg-white flex flex-col items-center justify-center overflow-hidden px-6">

      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Yellow blob */}
      <motion.div
        className="absolute top-20 -right-25 w-125 h-125 rounded-full bg-yellow-300 opacity-20 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.1, 1], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 -left-20 w-87.5 h-87.5 rounded-full bg-yellow-400 opacity-15 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.15, 1], x: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Badge */}
      <motion.div {...fadeUp(0.1)} className="mb-6">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-yellow-400 border-2 border-black rounded-full text-xs font-black tracking-widest uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          <Sparkles className="w-3 h-3" />
          Your digital memory
        </span>
      </motion.div>

      {/* Headline */}
      <motion.h1
        {...fadeUp(0.4)}
        className="text-center text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter text-black leading-none max-w-4xl"
      >
        Stop losing
        <br />
        <span className="relative inline-block">
          <span className="relative z-10 text-black">great ideas.</span>
          {/* Yellow underline highlight */}
          <motion.span
            className="absolute bottom-1 left-0 right-0 h-5 bg-yellow-400 -z-10 rounded-sm"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.0, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "left" }}
          />
        </span>
      </motion.h1>

      {/* Subheading */}
      <motion.p
        {...fadeUp(0.35)}
        className="mt-6 max-w-xl text-center text-lg text-neutral-500 font-medium leading-relaxed"
      >
        Drop in articles, videos, tweets, and links. SecondBrain remembers
        everything so you never lose a good idea again.
      </motion.p>

      {/* CTA */}
      <motion.div
        {...fadeUp(0.5)}
        className="mt-10 flex flex-col sm:flex-row items-center gap-3 w-full max-w-md"
      >
        <input
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Paste a link to get started..."
          className="w-full px-4 py-3 border-2 border-black rounded-xl text-sm font-medium placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
        />
        <Link to="/sign-up">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-6 py-3 bg-yellow-400 border-2 border-black rounded-xl text-sm font-black whitespace-nowrap shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-500 transition-colors"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </Link>
      </motion.div>

      {/* Social proof */}
      <motion.p
        {...fadeUp(0.65)}
        className="mt-5 text-xs text-neutral-400 font-medium"
      >
        Free to start · No credit card required
      </motion.p>

      {/* Floating cards */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mt-16 grid grid-cols-3 gap-3 max-w-2xl w-full"
      >
        {[
          { type: "Article", title: "The future of AI agents", tag: "Tech" },
          { type: "Video", title: "How to think in systems", tag: "Learning" },
          { type: "Tweet", title: "The best advice I ever got...", tag: "Life" },
        ].map((card, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-white border-2 border-black rounded-xl p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-default"
          >
            <span className="text-xs font-black text-yellow-600 uppercase tracking-wider">
              {card.type}
            </span>
            <p className="mt-1 text-sm font-bold text-black leading-tight">
              {card.title}
            </p>
            <span className="mt-2 inline-block text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full font-semibold">
              {card.tag}
            </span>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}