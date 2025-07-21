import Hero from "@/pages/Home/Hero";
import FeatureSection from "@/pages/Home/FeatureSection";
import HowItWorks from "@/pages/Home/HowItWork";
import BannerSection from "@/pages/Home/BannerSectoin";
import Testimonials from "@/pages/Home/Testimonials";
import ContactSection from "@/pages/Home/Contact/ContactSection";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <FeatureSection />
        <HowItWorks />
        <BannerSection />
        <Testimonials />
        <ContactSection />
      </main>
    </>
  );
}
