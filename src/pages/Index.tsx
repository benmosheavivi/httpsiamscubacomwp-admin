import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CoursesSection from "@/components/CoursesSection";
import SailRockBanner from "@/components/SailRockBanner";
import FunDivingSection from "@/components/FunDivingSection";
import BoatsSection from "@/components/BoatsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import BlogPreview from "@/components/BlogPreview";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";
import FloatingInstagram from "@/components/FloatingInstagram";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <CoursesSection />
      <SailRockBanner />
      <FunDivingSection />
      <BoatsSection />
      <WhyChooseUs />
      <BookingCTA />
      <Footer />
      <FloatingInstagram />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
