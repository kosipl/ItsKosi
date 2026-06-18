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
      <div className="border-t border-hairline mb-20" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-center"
      >
        <h2 className="font-serif font-light text-5xl md:text-7xl mb-8 text-ink">
          Let's Connect
        </h2>

        <p
          className="font-body text-lg md:text-xl mb-12 max-w-2xl mx-auto text-subtle"
          style={{ lineHeight: "1.7" }}
        >
          Available for bookings, collaborations, and creative projects. Get in
          touch to discuss how we can work together.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-16 flex flex-col items-center gap-4"
        >
          <a
            href="mailto:contact@itskosi.com?subject=Booking%20inquiry"
            className="font-body font-medium text-base md:text-lg rounded-lg px-8 py-4 bg-ink text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand"
          >
            Book ISOK
          </a>
          <a
            href="mailto:contact@itskosi.com"
            className="font-body text-base text-subtle hover:text-brand transition-colors duration-300"
          >
            contact@itskosi.com
          </a>
        </motion.div>

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
