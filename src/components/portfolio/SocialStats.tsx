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
      <div className="font-serif font-light text-6xl md:text-7xl lg:text-8xl mb-4 text-brand">
        <span ref={displayValue}>0</span>
        {suffix}
      </div>
      <p className="font-display font-medium text-sm md:text-base uppercase tracking-[0.15em] text-subtle">
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
      <div className="border-t border-hairline mb-20" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center mb-20"
      >
        <div className="h-[2px] w-12 bg-brand mb-6" />
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center text-ink">
          Social Reach
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-0">
        <AnimatedStat value={1337932} label="Views / Plays" delay={0} />
        <div className="md:border-l md:border-hairline md:px-8">
          <AnimatedStat value={15000} label="Total Followers" suffix="+" delay={0.15} />
        </div>
        <div className="md:border-l md:border-hairline md:px-8">
          <AnimatedStat value={10000} label="Feet-on-the-floor Reach" suffix="+" delay={0.3} />
        </div>
      </div>
    </section>
  );
}
