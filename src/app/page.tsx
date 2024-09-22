
import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebiners from "@/components/UpcomingWebiners";
import Instructors from "@/components/Instructors";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
   
    <main className=" min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      
      <HeroSection />
      <FeaturedCourses/>
      <WhyChooseUs/>
      <TestimonialCards/>
      <UpcomingWebiners/>
      <Instructors/>
      <Footer/>

    </main>
  );
}
