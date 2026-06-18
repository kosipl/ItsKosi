import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const clients = [
  "NCAA",
  "ESPN",
  "Amazon",
  "NYFW",
  "Microsoft",
  "Duke University",
  "University of Washington",
  "Capitol Hill Block Party",
];

export function FeaturedClients() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="clients" ref={ref} className="scroll-mt-24 bg-white border-y border-hairline">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center mb-16"
        >
          <p className="font-display text-xs uppercase tracking-[0.25em] text-brand mb-4">
            Trusted by
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink">
            Featured Clients &amp; Partners
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 border-l border-t border-hairline">
          {clients.map((client, index) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group flex items-center justify-center text-center min-h-[120px] px-4 border-r border-b border-hairline"
            >
              <span className="font-display text-base md:text-lg font-bold uppercase tracking-[0.08em] text-ink/80 group-hover:text-brand transition-colors duration-300">
                {client}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
