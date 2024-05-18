import AboutUs from "@/components/about-us";
import FeaturedProjects from "@/components/featured-projects";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";

//test
export default async function Home() {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <FeaturedProjects />
      <Footer />
    </div>
  );
}
