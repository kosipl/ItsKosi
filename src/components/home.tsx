import { Nav } from "./portfolio/Nav";
import { Hero } from "./portfolio/Hero";
import { Marquee } from "./portfolio/Marquee";
import { Clients } from "./portfolio/Clients";
import { About } from "./portfolio/About";
import { Reach } from "./portfolio/Reach";
import { Mixes } from "./portfolio/Mixes";
import { Booking } from "./portfolio/Booking";
import { Footer } from "./portfolio/Footer";

function Home() {
  return (
    <div style={{ fontFamily: "'Archivo', sans-serif", color: "#15130f", background: "#F4F1EA", overflowX: "hidden" }}>
      <Nav />
      <Hero />
      <Marquee />
      <Clients />
      <About />
      <Reach />
      <Mixes />
      <Booking />
      <Footer />
    </div>
  );
}

export default Home
