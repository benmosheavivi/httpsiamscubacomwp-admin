import { motion } from "framer-motion";
import { Award, BookOpen, Star, Crown, Fish } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/66123456789?text=Hi%20Siam%20Scuba!%20I'm%20interested%20in%20";

const courses = [
  {
    icon: Fish,
    level: "Discovery",
    title: "Discover Scuba Diving",
    price: "2,600",
    duration: "1 day",
    highlights: ["No experience needed", "Pool + ocean dive", "PADI certified instructor"],
    color: "bg-ocean-surface text-secondary-foreground",
  },
  {
    icon: BookOpen,
    level: "Beginner",
    title: "Open Water Diver",
    price: "11,000",
    duration: "3-4 days",
    highlights: ["Dive to 18m worldwide", "Lifetime certification", "4 open water dives"],
    color: "bg-primary text-primary-foreground",
    featured: true,
  },
  {
    icon: Star,
    level: "Advanced",
    title: "Advanced Open Water",
    price: "10,000",
    duration: "2 days",
    highlights: ["Dive to 30m", "5 adventure dives", "Deep & navigation skills"],
    color: "bg-ocean-surface text-secondary-foreground",
  },
  {
    icon: Crown,
    level: "Professional",
    title: "Divemaster",
    price: "30,000+",
    duration: "4-8 weeks",
    highlights: ["Lead certified divers", "Career in diving", "Internship included"],
    color: "bg-ocean-surface text-secondary-foreground",
  },
];

const CoursesSection = () => {
  return (
    <section id="courses" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm uppercase tracking-[0.2em] mb-2">PADI Courses</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Start Your Journey
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            From your first breath underwater to professional-level training — we've got every step covered.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, i) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card
                className={`relative overflow-hidden h-full border-0 shadow-md hover:shadow-xl transition-shadow ${
                  course.featured ? "ring-2 ring-primary" : ""
                }`}
              >
                {course.featured && (
                  <div className="absolute top-0 right-0 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
                    Most Popular
                  </div>
                )}
                <CardContent className="p-6 flex flex-col h-full">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${course.color}`}>
                    <course.icon className="h-6 w-6" />
                  </div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{course.level}</p>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{course.title}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-2xl font-bold text-foreground">฿{course.price}</span>
                    <span className="text-sm text-muted-foreground">THB</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-4">{course.duration}</p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {course.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-foreground/80">
                        <Award className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    variant={course.featured ? "default" : "outline"}
                    className="rounded-full w-full"
                  >
                    <a
                      href={`${WHATSAPP_URL}${encodeURIComponent(course.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book Now
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
