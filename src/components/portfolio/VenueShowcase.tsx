import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const featuredClients = [
  "NCAA",
  "ESPN",
  "Amazon",
  "New York Fashion Week (NYFW)",
  "Microsoft",
  "Duke University",
  "University of Washingston",
  "Capitol Hill Block Party (Daydream State)",
];

const venues = [
  "Pioneer Square Alliance",
  "Comet Tavern",
  "Good Bar",
  "Gold Bar",
  "Provisions Seattle",
  "Monkey Loft",
  "Guillotine Seattle",
  "Avole Coffee",
  "RichRich",
  "All Things Fashion Tech",
  "Captain Blacks",
  "ESFNA",
  "Rome Bar",
  "Art Walk",
  "Lemon Grove",
  "Venison Pho",
  "Curated Vibez",
  "The Wash Capitol Hill",
  "Sams Tavern Seattle",
  "Seattle Art Walk",
];

export function VenueShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="max-w-[1200px] mx-auto px-6 md:px-12 py-40">
      {/* Divider line */}
      <div className="border-t border-[#E5E5E5] mb-20" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Featured Clients / Partners */}
        <h2
          className="text-4xl md:text-5xl font-bold mb-16"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            color: "#1A1A1A",
          }}
        >
          Featured Clients / Partners
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {featuredClients.map((client, index) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative py-6 px-4 border-b border-[#E5E5E5] hover:border-[#E63946] transition-colors duration-300"
            >
              <h3
                className="text-2xl font-medium group-hover:translate-x-2 transition-transform duration-300"
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  color: "#1A1A1A",
                }}
              >
                {client}
              </h3>
              <div className="absolute bottom-0 left-0 h-[2px] bg-[#E63946] w-0 group-hover:w-full transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Venues + Community / Creative Partners */}
        <h2
          className="text-4xl md:text-5xl font-bold mb-16"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            color: "#1A1A1A",
          }}
        >
          Venues + Community / Creative Partners
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {venues.map((venue, index) => (
            <motion.div
              key={venue}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative py-6 px-4 border-b border-[#E5E5E5] hover:border-[#E63946] transition-colors duration-300"
            >
              <h3
                className="text-xl font-medium group-hover:translate-x-2 transition-transform duration-300"
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  color: "#1A1A1A",
                }}
              >
                {venue}
              </h3>
              <div className="absolute bottom-0 left-0 h-[2px] bg-[#E63946] w-0 group-hover:w-full transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
