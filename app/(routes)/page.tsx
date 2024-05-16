import FeaturedProjects from "@/components/featured-projects";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";

export default async function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedProjects />
      <Footer />
    </div>
  );
}
