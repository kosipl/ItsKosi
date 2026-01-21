import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const videos = [
  {
    id: "1",
    title: "R&B, Neo Soul | Unmixed Company Vol 3. | DJ ISOK",
    embedUrl: "https://www.youtube.com/embed/GJhxoQXANPw?si=YPJpmjO7dMI7IfXW",
  },
  {
    id: "2",
    title: "House, Dance, Disco | Club Cubical 001 | DJ ISOK",
    embedUrl: "https://www.youtube.com/embed/IB7wBu8f08I?si=LkEhqdyPW8D3aYxb",
  },
  {
    id: "3",
    title:
      "Hiphop, Dancehall, Afrobeats | Unmixed Company Vol. 2 - The Pregame | DJ ISOK SET",
    embedUrl: "https://www.youtube.com/embed/WSPQQTo5EeY?si=tpuXGSOtudfvseuZ",
  },
  {
    id: "4",
    title:
      "Neo Soul, Dance, Funk, Edits | Unmixed Company Vol. 1 [DJ ISOK MIX]",
    embedUrl: "https://www.youtube.com/embed/nrmC0i4zoM8?si=apmBpyUTWxZH3pxz",
  },
];

export function MediaGallery() {
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
        <h2
          className="text-4xl md:text-5xl font-bold mb-16"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            color: "#1A1A1A",
          }}
        >
          Featured Mixes
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 group-hover:shadow-[0_8px_30px_rgba(230,57,70,0.15)] group-hover:scale-[1.02]">
                <div className="aspect-video bg-gray-100">
                  <iframe
                    src={video.embedUrl}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <div className="bg-white w-[80px] h-[80px]"></div>
                  <h3
                    className="text-xl font-semibold"
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      color: "#1A1A1A",
                    }}
                  >
                    {video.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
