import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Clock, CheckCircle2, Gift, Tag, AlertCircle, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/972528641581?text=Hi%20Siam%20Scuba!%20I'm%20interested%20in%20";

interface CourseDetail {
  header: string;
  intro: string;
  schedule?: { time: string; description: string }[];
  itinerary?: { day: string; description: string }[];
  included?: string[];
  dives?: { name: string; description: string }[];
  learns?: string[];
  structure?: string[];
  prerequisites?: string[];
  perks?: string[];
  price: string;
  extras?: string[];
  specialOffer?: string;
}

const courseDetails: Record<string, CourseDetail> = {
  "Discover Scuba Diving": {
    header: "Our one-day introduction PADI Discover Scuba Diving in Koh Tao",
    intro: "Curious about the underwater world but not ready for a full course? Our one-day introduction is the perfect way to start your adventure without any prior experience needed.",
    schedule: [
      { time: "10:30", description: "Meet at the shop for a basic safety briefing and gear fitting." },
      { time: "11:30", description: "Board our boat for two incredible dives at Koh Tao's vibrant coral reefs." },
      { time: "16:00", description: "Return to the island with a massive smile!" },
    ],
    included: [
      "Professional guidance (max 2:1 student-to-instructor ratio for safety).",
      "Full set of high-quality diving equipment.",
      "Diving insurance and boat refreshments (fresh fruit, cookies, coffee, tea).",
    ],
    price: "2,600 THB",
    extras: ["Loved it? Add a second dive for just 1,000 THB on the day!"],
  },
  "Open Water Diver": {
    header: "Get Certified: PADI Open Water Course Koh Tao",
    intro: "Become a certified diver for life! This world-recognized certification allows you to dive up to 18 meters anywhere on the planet. Our course is designed to be safe, fun, and personalized.",
    itinerary: [
      { day: "Day 1", description: "Morning theory session followed by practical training in our private pool." },
      { day: "Day 2", description: "Theory review and your first two ocean dives (max 12m) to practice your new skills." },
      { day: "Day 3", description: "Two final dives to 18m at some of Koh Tao's premier dive sites, like Chumphon Pinnacle." },
    ],
    perks: ["Bonus: 2 Nights of free accommodation at our dorms!"],
    price: "11,000 THB",
  },
  "Advanced Open Water": {
    header: "Level Up Your Skills: PADI Advanced Open Water Diver",
    intro: "Take your diving to the next level! This practical course is all about experience—no exams and no heavy theory. You will explore deeper waters and discover new underwater specialties.",
    dives: [
      { name: "Deep Dive", description: "Reach 30 meters and see a whole new world." },
      { name: "Wreck Dive", description: "Explore the famous HTMS Sattakut." },
      { name: "Night Dive", description: "See the reef come alive after dark." },
      { name: "Navigation", description: "Master the compass and natural landmarks." },
      { name: "Peak Performance Buoyancy", description: "Perfect your trim and glide like a pro." },
    ],
    perks: ["Bonus: 1 Night of free accommodation + a limited edition Club T-shirt!"],
    price: "10,000 THB",
    prerequisites: ["Open Water certification"],
    specialOffer: "Get 500 THB off your next Rescue Course if you book directly after!",
  },
  "Rescue Diver": {
    header: "Become the Buddy Everyone Wants: PADI Rescue Diver Course",
    intro: "Challenging, rewarding, and incredibly fun! The Rescue Diver course shifts your focus from yourself to others, teaching you how to manage emergencies and prevent problems before they happen.",
    learns: [
      "Self-rescue techniques and diver stress management.",
      "Emergency oxygen delivery and first aid for diving injuries.",
      "Search patterns for missing divers and surfacing unresponsive divers.",
    ],
    structure: [
      "Duration: 2-3 Days.",
      "Includes theory, 10 rescue exercises, and 2 realistic open-water scenarios.",
    ],
    prerequisites: [
      "Advanced Open Water certification (or equivalent).",
      "EFR (First Aid/CPR) certification valid within the last 12 months.",
    ],
    price: "10,000 THB (Add EFR for 4,500 THB if needed)",
  },
};

interface CourseDetailDialogProps {
  courseTitle: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CourseDetailDialog = ({ courseTitle, open, onOpenChange }: CourseDetailDialogProps) => {
  const detail = courseDetails[courseTitle];
  if (!detail) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg max-h-[90vh] p-0 overflow-hidden">
        <ScrollArea className="max-h-[85vh]">
          <div className="p-6 space-y-6">
            <DialogHeader>
              <DialogTitle className="font-display text-xl md:text-2xl text-foreground leading-tight">
                {detail.header}
              </DialogTitle>
              <DialogDescription className="text-muted-foreground mt-2 text-sm leading-relaxed">
                {detail.intro}
              </DialogDescription>
            </DialogHeader>

            {/* Schedule */}
            {detail.schedule && (
              <div className="space-y-3">
                <h4 className="font-display font-semibold text-foreground flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" /> Schedule
                </h4>
                <div className="space-y-2">
                  {detail.schedule.map((s) => (
                    <div key={s.time} className="flex gap-3 text-sm">
                      <span className="font-semibold text-primary min-w-[50px]">{s.time}</span>
                      <span className="text-foreground/80">{s.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Itinerary */}
            {detail.itinerary && (
              <div className="space-y-3">
                <h4 className="font-display font-semibold text-foreground flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" /> Detailed Itinerary (2.5 Days)
                </h4>
                <div className="space-y-2">
                  {detail.itinerary.map((d) => (
                    <div key={d.day} className="flex gap-3 text-sm">
                      <span className="font-semibold text-primary min-w-[50px]">{d.day}</span>
                      <span className="text-foreground/80">{d.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Adventure Dives */}
            {detail.dives && (
              <div className="space-y-3">
                <h4 className="font-display font-semibold text-foreground flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> 5 Adventure Dives
                </h4>
                <div className="space-y-2">
                  {detail.dives.map((d) => (
                    <div key={d.name} className="text-sm">
                      <span className="font-semibold text-foreground">{d.name}:</span>{" "}
                      <span className="text-foreground/80">{d.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* What You'll Learn */}
            {detail.learns && (
              <div className="space-y-3">
                <h4 className="font-display font-semibold text-foreground flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> What You'll Learn
                </h4>
                <ul className="space-y-1.5">
                  {detail.learns.map((l) => (
                    <li key={l} className="text-sm text-foreground/80 flex items-start gap-2">
                      <span className="text-primary mt-1">•</span> {l}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Course Structure */}
            {detail.structure && (
              <div className="space-y-3">
                <h4 className="font-display font-semibold text-foreground flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" /> Course Structure
                </h4>
                <ul className="space-y-1.5">
                  {detail.structure.map((s) => (
                    <li key={s} className="text-sm text-foreground/80">{s}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* What's Included */}
            {detail.included && (
              <div className="space-y-3">
                <h4 className="font-display font-semibold text-foreground flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> What's Included
                </h4>
                <ul className="space-y-1.5">
                  {detail.included.map((item) => (
                    <li key={item} className="text-sm text-foreground/80 flex items-start gap-2">
                      <span className="text-primary mt-1">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Prerequisites */}
            {detail.prerequisites && (
              <div className="space-y-3">
                <h4 className="font-display font-semibold text-foreground flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-accent" /> Prerequisites
                </h4>
                <ul className="space-y-1.5">
                  {detail.prerequisites.map((p) => (
                    <li key={p} className="text-sm text-foreground/80 flex items-start gap-2">
                      <span className="text-accent mt-1">•</span> {p}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Perks */}
            {detail.perks && (
              <div className="space-y-2">
                {detail.perks.map((perk) => (
                  <div key={perk} className="flex items-center gap-2 bg-secondary/50 rounded-lg p-3 text-sm">
                    <Gift className="h-4 w-4 text-accent shrink-0" />
                    <span className="font-semibold text-foreground">{perk}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Price */}
            <div className="bg-primary/5 rounded-lg p-4 flex items-center gap-3">
              <Tag className="h-5 w-5 text-primary shrink-0" />
              <span className="text-lg font-bold text-foreground">Price: ฿{detail.price.replace(" THB", "")}</span>
              <span className="text-sm text-muted-foreground">THB</span>
            </div>

            {/* Extras */}
            {detail.extras?.map((e) => (
              <p key={e} className="text-sm text-accent font-semibold italic">{e}</p>
            ))}

            {/* Special Offer */}
            {detail.specialOffer && (
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-3 text-sm text-foreground font-medium">
                🎉 {detail.specialOffer}
              </div>
            )}

            {/* CTA */}
            <Button asChild className="w-full rounded-full" size="lg">
              <a
                href={`${WHATSAPP_URL}${encodeURIComponent(courseTitle)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                Book Now on WhatsApp
              </a>
            </Button>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default CourseDetailDialog;
