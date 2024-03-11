import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import TestmonialCards from "@/components/TestmonialCards";
import WhyChooseUs from "@/components/WhyChooseUs";
import { ImagesSliderSection } from "@/components/ImageSlider";
import { ContactUs } from "@/components/ContactUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <ImagesSliderSection />
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <TestmonialCards />
      <Instructors />
      <ContactUs />
    </main>
  );
}
