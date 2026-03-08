import { useState } from "react";
import { motion } from "framer-motion";
import { Award, BookOpen, Star, Crown, Fish, Anchor, ArrowDown, Zap, Layers, MessageCircle, ShieldCheck, Info } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GlowCard } from "@/components/ui/spotlight-card";
import padi from "@/assets/padi-logo.png";
import CourseDetailDialog from "./CourseDetailDialog";

const WHATSAPP_URL = "https://wa.me/972528641581?text=Hi%20Siam%20Scuba!%20I'm%20interested%20in%20";

const categories = [
{
  label: "Basic Courses",
  description: "Perfect for beginners — take your first breath underwater or earn your first certification.",
  courses: [
  {
    icon: Fish,
    title: "Discover Scuba Diving",
    price: "2,600",
    duration: "1 day",
    highlights: ["No experience needed", "Pool + ocean dive", "PADI certified instructor"],
    hasDetails: true
  },
  {
    icon: BookOpen,
    title: "Open Water Diver",
    price: "11,000",
    duration: "3–4 days",
    highlights: ["Dive to 18m worldwide", "Lifetime certification", "4 open water dives"],
    featured: true,
    hasDetails: true
  }]

},
{
  label: "Advanced Courses",
  description: "Push your limits and explore deeper, further, and with more confidence.",
  courses: [
  {
    icon: Star,
    title: "Advanced Open Water",
    price: "10,000",
    duration: "2 days",
    highlights: ["Dive to 30m", "5 adventure dives", "Deep & navigation skills"],
    hasDetails: true
  },
  {
    icon: ShieldCheck,
    title: "Rescue Diver",
    price: "12,000",
    duration: "3–4 days",
    highlights: ["Emergency management", "Rescue techniques", "Stress & panic handling"],
    hasDetails: true
  }]

},
{
  label: "Professional Level",
  description: "Turn your passion into a career with professional-level PADI training.",
  courses: [
  {
    icon: Crown,
    title: "Divemaster",
    price: "38,000",
    duration: "4–8 weeks",
    highlights: ["Lead certified divers", "Career in diving", "Internship included"]
  },
  {
    icon: Award,
    title: "IDC (Instructor Course)",
    price: null,
    duration: "Varies",
    highlights: ["Become a PADI Instructor", "Full instructor training", "Teaching certifications"]
  }]

},
{
  label: "Specialty Courses",
  description: "Master specific skills and unlock new diving adventures.",
  courses: [
  {
    icon: Anchor,
    title: "Wreck Diving",
    price: "8,500",
    duration: "2 days",
    highlights: ["Explore sunken wrecks", "Penetration techniques", "PADI specialty cert"]
  },
  {
    icon: ArrowDown,
    title: "Deep Diving",
    price: "8,500",
    duration: "2 days",
    highlights: ["Dive beyond 18m", "Gas management", "Deep dive planning"]
  },
  {
    icon: Zap,
    title: "Underwater Scooter (DPV)",
    price: null,
    duration: "1 day",
    highlights: ["Ride a DPV underwater", "Cover more ground", "Unique experience"]
  },
  {
    icon: Layers,
    title: "Sidemount Diving",
    price: null,
    duration: "2–3 days",
    highlights: ["Improved streamlining", "Independent gas supply", "Advanced configuration"]
  }]

}];


const CoursesSection = () => {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  return (
    <>
    <section id="courses" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16">
            
          <div className="flex items-center justify-center gap-3 mb-2">
            <img src={padi} alt="PADI" className="h-32 w-auto" />
            <p className="text-primary font-body text-sm uppercase tracking-[0.2em]">PADI Courses</p>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Start Your Journey
          </h2>
          

            
        </motion.div>

        <div className="space-y-16">
          {categories.map((cat, catIdx) =>
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1 }}>
              
              <div className="mb-6">
                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">{cat.label}</h3>
                <p className="text-muted-foreground text-sm mt-1">{cat.description}</p>
              </div>

              <div className={`grid grid-cols-1 sm:grid-cols-2 ${cat.courses.length > 2 ? "lg:grid-cols-4" : cat.courses.length === 1 ? "lg:grid-cols-3" : "lg:grid-cols-2"} gap-6`}>
                {cat.courses.map((course, i) =>
                <motion.div
                  key={course.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}>
                  
                    <GlowCard
                      glowColor="blue"
                      customSize
                      className="h-full !p-0 !gap-0 !grid-rows-[1fr] !shadow-none"
                    >
                    <Card
                    className={`relative overflow-hidden h-full border-0 shadow-none bg-transparent ${
                    course.featured ? "ring-2 ring-primary" : ""}`
                    }>
                    
                      {course.featured &&
                    <div className="absolute top-0 right-0 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-bl-lg z-10">
                          Most Popular
                        </div>
                    }
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-ocean-surface text-secondary-foreground">
                          <course.icon className="h-6 w-6" />
                        </div>
                        <h4 className="font-display text-lg font-semibold text-foreground mb-2">{course.title}</h4>
                        <div className="flex items-baseline gap-1 mb-1">
                          {course.price ?
                        <>
                              <span className="text-2xl font-bold text-foreground">฿{course.price}</span>
                              <span className="text-sm text-muted-foreground">THB</span>
                            </> :

                        <span className="text-lg font-semibold text-primary">Get Price</span>
                        }
                        </div>
                        <p className="text-xs text-muted-foreground mb-4">{course.duration}</p>
                        <ul className="space-y-2 mb-6 flex-1">
                          {course.highlights.map((h) =>
                        <li key={h} className="flex items-start gap-2 text-sm text-foreground/80">
                              <Award className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                              {h}
                            </li>
                        )}
                        </ul>
                        <div className="space-y-2">
                          {course.hasDetails &&
                        <Button
                          variant="ghost"
                          className="rounded-full w-full text-primary hover:text-primary/80"
                          onClick={() => setSelectedCourse(course.title)}>
                          
                              <Info className="h-4 w-4 mr-1" />
                              More Details
                            </Button>
                        }
                          <Button
                          asChild
                          variant={course.featured ? "default" : "outline"}
                          className="rounded-full w-full">
                          
                            <a
                            href={`${WHATSAPP_URL}${encodeURIComponent(course.title)}`}
                            target="_blank"
                            rel="noopener noreferrer">
                            
                              {course.price ? "Book Now" : "Get Price"}
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                    </GlowCard>
                  </motion.div>
                )}
              </div>
            </motion.div>
            )}
        </div>
      </div>
    </section>

    <CourseDetailDialog
        courseTitle={selectedCourse || ""}
        open={!!selectedCourse}
        onOpenChange={(open) => !open && setSelectedCourse(null)} />
      
    </>);

};

export default CoursesSection;