import AboutUs from "@/components/about-us";
import Creators from "@/components/creators";
import FeaturedProjects from "@/components/featured-projects";
import HeroSection from "@/components/hero-section";

//test another one
export default async function Home() {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <FeaturedProjects />
      <Creators />
    </div>
  );
}
