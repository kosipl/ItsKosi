import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 relative overflow-hidden">
      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="text-center"
      >
        <h1 
          className="font-light tracking-tight mb-4"
          style={{
            fontSize: 'clamp(4rem, 12vw, 12rem)',
            lineHeight: '0.95',
            fontFamily: "'Fraunces', serif",
            fontWeight: 300,
            color: '#1A1A1A'
          }}
        >
          It's Kosi
        </h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="uppercase tracking-[0.2em] text-sm md:text-base"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 500,
            color: '#6B6B6B',
            letterSpacing: '0.2em'
          }}
        >
          ISOK
        </motion.p>
      </motion.div>
    </section>
  );
}
