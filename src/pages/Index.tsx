import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CoursesSection from "@/components/CoursesSection";
import FunDivingSection from "@/components/FunDivingSection";
import BoatsSection from "@/components/BoatsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <CoursesSection />
      <FunDivingSection />
      <BoatsSection />
      <WhyChooseUs />
      <BookingCTA />
      <Footer />
    </div>
  );
};

export default Index;
