import { motion } from "framer-motion";
import { Link2, FolderOpen, Search } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Link2,
    title: "Drop in anything",
    description:
      "Paste a link, forward a tweet, save a video. SecondBrain doesn't care what it is — it just remembers it.",
  },
  {
    number: "02",
    icon: FolderOpen,
    title: "It sorts itself",
    description:
      "Articles, videos, tweets, audio — everything gets tagged and filed automatically. No folders to manage.",
  },
  {
    number: "03",
    icon: Search,
    title: "Find it in seconds",
    description:
      "Search your whole brain instantly. That thing you saved three weeks ago is one keystroke away.",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function HowItWorks() {
  return (
    <section className="relative bg-white py-24 px-6 overflow-hidden">

        {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Yellow blob */}
      <motion.div
        className="absolute top-20 right-[-100px] w-[500px] h-[500px] rounded-full bg-yellow-300 opacity-10 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.1, 1], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 left-[-80px] w-[350px] h-[350px] rounded-full bg-yellow-400 opacity-15 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.15, 1], x: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* faint connecting line behind the steps, only on desktop */}
      <div
        className="hidden md:block absolute top-[260px] left-1/2 -translate-x-1/2 w-[70%] h-px bg-black/10"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-yellow-400 border-2 border-black rounded-full text-xs font-black tracking-widest uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-5">
            How it works
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-black leading-tight">
            Three steps.{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Zero effort.</span>
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-yellow-400 -z-10 rounded-sm" />
            </span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                {...fadeUp(0.15 * i)}
                className="relative flex flex-col items-center text-center"
              >
                {/* Icon badge, sits on the connecting line */}
                <div className="relative z-10 w-20 h-20 bg-white border-2 border-black rounded-2xl flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
                  <Icon className="w-8 h-8 text-black" strokeWidth={2} />
                  <span className="absolute -top-3 -right-3 w-8 h-8 bg-yellow-400 border-2 border-black rounded-full flex items-center justify-center text-xs font-black">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-black text-black mb-2">
                  {step.title}
                </h3>
                <p className="text-neutral-500 font-medium leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}