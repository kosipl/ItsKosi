import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function Bio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="scroll-mt-24 max-w-[1200px] mx-auto px-6 md:px-12 py-40">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl"
      >
        <div className="h-[2px] w-12 bg-brand mb-6" />
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 text-ink">
          About
        </h2>
        <div
          className="font-body space-y-6 text-lg leading-relaxed text-ink"
          style={{ fontSize: "1.125rem", lineHeight: "1.7" }}
        >
          <p>
            Kosi (aka ISOK) is a Seattle-based DJ and content creator building
            momentum across the U.S. and Europe (NYC, San Francisco, DC, North
            Carolina, and Lisbon).
          </p>
          <p>
            His sound is genre-agnostic — Hip-Hop, R&B, Afrobeats, and Dancehall
            with dance-floor intention. Equal parts performer and storyteller,
            ISOK creates nights that feel like community: loud, connected, and
            unforgettable.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
