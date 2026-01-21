import { Hero } from "./portfolio/Hero";
import { Bio } from "./portfolio/Bio";
import { VenueShowcase } from "./portfolio/VenueShowcase";
import { SocialStats } from "./portfolio/SocialStats";
import { MediaGallery } from "./portfolio/MediaGallery";
import { ContactFooter } from "./portfolio/ContactFooter";

function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAFAF8' }}>
      <Hero />
      <Bio />
      <VenueShowcase />
      <SocialStats />
      <MediaGallery />
      <ContactFooter />
    </div>
  )
}

export default Home
