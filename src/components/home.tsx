import { Nav } from "./portfolio/Nav";
import { Hero } from "./portfolio/Hero";
import { Bio } from "./portfolio/Bio";
import { FeaturedClients } from "./portfolio/FeaturedClients";
import { VenueShowcase } from "./portfolio/VenueShowcase";
import { SocialStats } from "./portfolio/SocialStats";
import { MediaGallery } from "./portfolio/MediaGallery";
import { ContactFooter } from "./portfolio/ContactFooter";

function Home() {
  return (
    <div id="top" className="min-h-screen bg-paper">
      <Nav />
      <Hero />
      <Bio />
      <FeaturedClients />
      <VenueShowcase />
      <SocialStats />
      <MediaGallery />
      <ContactFooter />
    </div>
  )
}

export default Home
