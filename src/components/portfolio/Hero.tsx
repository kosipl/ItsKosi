import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const proof = ["NCAA", "ESPN", "Amazon", "Microsoft", "NYFW"];

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 relative overflow-hidden">
      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease }}
        className="text-center relative"
      >
        <h1
          className="font-serif font-light tracking-tight mb-4 text-ink"
          style={{ fontSize: "clamp(4rem, 12vw, 12rem)", lineHeight: "0.95", fontWeight: 300 }}
        >
          It's Kosi
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-display font-medium uppercase tracking-[0.2em] text-sm md:text-base text-subtle"
        >
          ISOK
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease }}
          className="font-display mt-6 text-base md:text-lg text-subtle"
        >
          DJ &amp; Content Creator
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.8, ease }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <a
            href="#mixes"
            className="font-body font-medium text-sm md:text-base rounded-lg px-7 py-3 bg-ink text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand"
          >
            Listen
          </a>
          <a
            href="mailto:contact@itskosi.com?subject=Booking%20inquiry"
            className="font-body font-medium text-sm md:text-base rounded-lg px-7 py-3 border border-ink text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-brand hover:text-brand"
          >
            Book
          </a>
        </motion.div>

        {/* Proof teaser */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.8 }}
          className="font-display mt-10 text-[11px] md:text-xs uppercase tracking-[0.18em] text-subtle"
        >
          <span className="opacity-70">Played for</span>{" "}
          {proof.map((name, i) => (
            <span key={name}>
              {i > 0 && <span className="mx-2 text-brand">·</span>}
              {name}
            </span>
          ))}
        </motion.p>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-subtle hover:text-brand transition-colors"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="block"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.span>
      </motion.a>
    </section>
  );
}
