import { motion } from "framer-motion";
import { Share2, Search, Layers, Sparkles } from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Any format, one place",
    description:
      "Articles, YouTube videos, tweets, images, audio. SecondBrain doesn't make you pick a category — it just holds everything.",
    rotate: -8,
    x: -40,
    y: -20,
  },
  {
    icon: Search,
    title: "Search that actually finds it",
    description:
      "Filter by type or just type what you remember. No tagging discipline required — your brain does that part for you.",
    rotate: 6,
    x: 50,
    y: -35,
  },
  {
    icon: Sparkles,
    title: "Previews, not just links",
    description:
      "Every saved item pulls its own title, image, and description automatically. You see what it is before you click it.",
    rotate: 9,
    x: -55,
    y: 30,
  },
  {
    icon: Share2,
    title: "Share your whole brain",
    description:
      "Flip one switch and get a public link to your collection. Turn it off just as easily — it's private by default.",
    rotate: -7,
    x: 45,
    y: 25,
  },
];

export default function Features() {
  return (
    <section className="relative bg-yellow-400 py-28 px-6 overflow-hidden border-y-2 border-black">

      {/* Subtle diagonal texture */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 1px, transparent 14px)",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-black text-yellow-400 border-2 border-black rounded-full text-xs font-black tracking-widest uppercase mb-5">
            What's inside
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-black leading-tight">
            Chaos in.{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-white">Order out.</span>
              <motion.span
                className="absolute inset-0 bg-black -z-10 rounded-sm"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: "left" }}
              />
            </span>
          </h2>
          <p className="mt-4 text-black/70 font-bold max-w-md mx-auto">
            Everything you throw at it lands somewhere — and snaps into place.
          </p>
        </motion.div>

        {/* Feature grid — cards start scattered like sticky notes, then snap into a clean grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-16">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{
                  opacity: 0,
                  rotate: feature.rotate,
                  x: feature.x,
                  y: feature.y,
                  scale: 0.92,
                }}
                whileInView={{
                  opacity: 1,
                  rotate: 0,
                  x: 0,
                  y: 0,
                  scale: 1,
                }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 14,
                  delay: 0.15 * i,
                }}
                whileHover={{ y: -4, rotate: i % 2 === 0 ? -1.5 : 1.5 }}
                className="bg-white border-2 border-black rounded-2xl p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-200"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-black">
                  <Icon className="w-6 h-6 text-yellow-400" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-black text-black mb-2">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 font-medium leading-relaxed text-sm">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}