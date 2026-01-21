import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, Youtube, Music } from "lucide-react";
import { SiTiktok } from "react-icons/si";

export function ContactFooter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer ref={ref} className="max-w-[1200px] mx-auto px-6 md:px-12 py-40">
      {/* Divider line */}
      <div className="border-t border-[#E5E5E5] mb-20" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-center"
      >
        <h2
          className="text-5xl md:text-7xl font-light mb-8"
          style={{
            fontFamily: "'Fraunces', serif",
            fontWeight: 300,
            color: "#1A1A1A",
          }}
        >
          Let's Connect
        </h2>

        <p
          className="text-lg md:text-xl mb-12 max-w-2xl mx-auto"
          style={{
            fontFamily: "'Manrope', sans-serif",
            color: "#6B6B6B",
            lineHeight: "1.7",
          }}
        >
          Available for bookings, collaborations, and creative projects. Get in
          touch to discuss how we can work together.
        </p>

        <motion.a
          href="mailto:contact@itskosi.com"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-block text-2xl md:text-3xl font-semibold mb-16 hover:text-[#E63946] transition-colors duration-300"
          style={{
            fontFamily: "'Manrope', sans-serif",
            color: "#1A1A1A",
          }}
        >
          contact@itskosi.com
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex justify-center items-center gap-8 mb-16"
        >
          <a
            href="https://www.instagram.com/kosipl/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 hover:text-[#E63946] transition-colors duration-300"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "#1A1A1A",
              fontWeight: 500,
            }}
          >
            <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            <span className="hidden md:inline">Instagram</span>
          </a>

          <a
            href="https://www.youtube.com/@iisokk"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 hover:text-[#E63946] transition-colors duration-300"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "#1A1A1A",
              fontWeight: 500,
            }}
          >
            <Youtube className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            <span className="hidden md:inline">YouTube</span>
          </a>

          <a
            href="https://soundcloud.com/iisokk"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 hover:text-[#E63946] transition-colors duration-300"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "#1A1A1A",
              fontWeight: 500,
            }}
          >
            <Music className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            <span className="hidden md:inline">SoundCloud</span>
          </a>

          <a
            href="https://www.tiktok.com/@kosipl"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 hover:text-[#E63946] transition-colors duration-300"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "#1A1A1A",
              fontWeight: 500,
            }}
          >
            <SiTiktok className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            <span className="hidden md:inline">TikTok</span>
          </a>
        </motion.div>

        <p
          className="text-sm uppercase tracking-[0.2em]"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            color: "#6B6B6B",
            fontWeight: 500,
          }}
        >
          © 2026 ISOK LLC . All Rights Reserved.
        </p>
      </motion.div>
    </footer>
  );
}
