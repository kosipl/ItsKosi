import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";

interface StatProps {
  value: number;
  label: string;
  suffix?: string;
  delay?: number;
}

function AnimatedStat({ value, label, suffix = "", delay = 0 }: StatProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 1500 });
  const displayValue = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        motionValue.set(value);
      }, delay);
    }
  }, [isInView, value, delay, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (displayValue.current) {
        displayValue.current.textContent = Math.floor(latest).toLocaleString();
      }
    });
    return unsubscribe;
  }, [springValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className="text-center"
    >
      <div
        className="text-6xl md:text-7xl lg:text-8xl font-light mb-4 min-h-[6rem] flex items-center justify-center"
        style={{
          fontFamily: "'Fraunces', serif",
          fontWeight: 300,
          color: "#E63946",
        }}
      >
        <span ref={displayValue}>0</span>
        {suffix}
      </div>
      <p
        className="text-base md:text-lg uppercase tracking-[0.15em] min-h-[3.5rem] flex items-center justify-center"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 500,
          color: "#6B6B6B",
        }}
      >
        {label}
      </p>
    </motion.div>
  );
}

export function SocialStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="max-w-[1200px] mx-auto px-6 md:px-12 py-40">
      {/* Divider line */}
      <div className="border-t border-[#E5E5E5] mb-20" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-4xl md:text-5xl font-bold mb-20 text-center"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          color: "#1A1A1A",
        }}
      >
        Social Reach
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
        <AnimatedStat
          value={1337932}
          label="Views / Plays"
          suffix=""
          delay={0}
        />
        <AnimatedStat
          value={7500}
          label="Total Followers"
          suffix="+"
          delay={0.15}
        />
        <AnimatedStat
          value={10000}
          label="Feet-on-the-floor Reach"
          suffix="+"
          delay={0.3}
        />
      </div>
    </section>
  );
}
