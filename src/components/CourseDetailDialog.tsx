import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Clock, CheckCircle2, Gift, Tag, AlertCircle, MessageCircle, Waves, Fish, Anchor, XCircle, Backpack, CreditCard } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/972528641581?text=Hi%20Siam%20Scuba!%20I'm%20interested%20in%20";

interface CourseDetail {
  header: string;
  intro: string;
  schedule?: { time: string; description: string }[];
  itinerary?: { day: string; description: string }[];
  included?: string[];
  dives?: { name: string; description: string }[];
  highlights?: { name: string; description: string }[];
  tripDetails?: string[];
  learns?: string[];
  structure?: string[];
  prerequisites?: string[];
  perks?: string[];
  price: string;
  extras?: string[];
  specialOffer?: string;
  notIncluded?: string[];
  whatToBring?: string[];
  payment?: string[];
  nextStep?: string;
}

const courseDetails: Record<string, CourseDetail> = {
  "Sail Rock": {
    header: "Sail Rock: The Ultimate Diving Adventure",
    intro: "Located between Koh Tao and Koh Phangan, Sail Rock is an open-ocean pinnacle that rises 15m above the surface and drops to 40m. It is world-famous for its incredible fish density and unique topography.",
    highlights: [
      { name: "The Chimney", description: "A legendary vertical swim-through. Enter at 18 meters and exit at 5 meters—a must-do for every diver." },
      { name: "Whale Shark Hotspot", description: "This is the best place in Thailand to meet the ocean's gentle giants." },
      { name: "Cloud of Fish", description: "Swim through massive schools of Chevron Barracuda, Trevally, and Batfish." },
    ],
    tripDetails: [
      "Departs every 3 days at 07:30, returns at 16:30.",
      "3 dives: 2 at Sail Rock + 1 at a bonus site like Shark Island.",
      "Full breakfast and an authentic Thai buffet lunch served onboard.",
    ],
    prerequisites: [
      "Open Water certification (Max 18m).",
      "Advanced divers can explore the full 40m depth.",
    ],
    price: "3,800 THB",
    included: [
      "Full gear rental included.",
      "Professional dive guide.",
      "Breakfast, Thai buffet lunch, and refreshments.",
    ],
  },
  "Discover Scuba Diving": {
    header: "Your First Breath Underwater: One-Day Experience",
    intro: "Not a certified diver? No problem! Our DSD program is a safe, relaxed, and exciting introduction to the ocean. You'll be exploring coral reefs by the afternoon.",
    schedule: [
      { time: "10:30", description: "Meet your instructor, fit your gear, and learn the basics." },
      { time: "12:30", description: "Boat departure. Two dives at shallow, vibrant reefs (Max 12m)." },
      { time: "16:00", description: "Return to land as a new underwater explorer!" },
    ],
    included: [
      "Personal instructor (Max 2:1 ratio).",
      "Full set of high-quality diving equipment.",
      "Diving insurance and boat snacks.",
    ],
    price: "2,600 THB",
    extras: ["Add a second dive for just +1,000 THB on the day!"],
  },
  "Open Water Diver": {
    header: "⭐ Your First Diving Course — PADI Certified for Life!",
    intro: "No experience needed! In just 2.5 days you'll earn a PADI Open Water certification — recognized worldwide, valid for life. Dive to 18 meters with Israeli instructors who speak Hebrew & English.",
    itinerary: [
      { day: "Day 1", description: "09:00 — Meet at the club for theory. Break. 11:00 — Pool session for practical skills." },
      { day: "Day 2", description: "09:00 — Second theory session. 11:00 — Boat departure. Ocean drills + first dive to 12m. Lunch break. 14:00 — Second dive at another site. 16:00 — Return to club." },
      { day: "Day 3", description: "06:30 — First dive to 18m. 09:00 — Break. 10:00 — Final dive. 11:00 — Back to the club 🎉" },
    ],
    perks: [
      "Small Groups: Max 6 students per instructor.",
      "Free Stay: 2 nights of accommodation at our club! 🎁",
      "Israeli instructors — Hebrew & English speaking 🇮🇱",
    ],
    included: [
      "4 open-water dives at stunning sites",
      "Full professional diving equipment 🥽",
      "Theory sessions + pool safety drills",
      "Diving insurance",
      "Boat snacks — fruit, water, cookies, tea & coffee ☕",
      "2 nights accommodation — on us! 🎁",
      "PADI certification card",
    ],
    notIncluded: [
      "Meals 🍞",
      "Underwater photography (available on last day — extra charge 📸)",
      "Transport to the dive center 🚕",
      "Private instructor option 👨‍🏫 (available — extra charge)",
    ],
    whatToBring: [
      "Swimsuit 👙",
      "Towel 💦",
      "Good vibes & a sense of adventure 👍",
    ],
    payment: [
      "Course price: 11,000 THB",
      "Booking deposit: 3,000 THB (payable via Bit)",
      "Balance on dive day: 8,000 THB (cash or Thai bank transfer)",
      "Deposit is non-refundable ❌",
      "Reschedule up to 12 hours before",
      "If you stop mid-course — partial refund available",
      "Complete the course anywhere in the world within 12 months",
    ],
    price: "11,000 THB",
    nextStep: "Continue to Advanced Open Water — 1.5 days, 5 more dives! 🌊",
  },
  "Advanced Open Water": {
    header: "Explore Further: Depth & Adventure",
    intro: "No exams, all action! This course is about fine-tuning your skills and exploring the best sites in Koh Tao, including wrecks and deep pinnacles.",
    dives: [
      { name: "Deep", description: "Go down to 30 meters." },
      { name: "Navigation", description: "Master the underwater compass." },
      { name: "Night", description: "Experience the reef's nightlife." },
      { name: "Wreck", description: "Dive the famous HTMS Sattakut." },
      { name: "Buoyancy", description: "Glide like a pro and save your air." },
    ],
    perks: ["1 free night of stay + a limited edition Club T-shirt!"],
    price: "10,000 THB",
    prerequisites: ["Open Water certification"],
    specialOffer: "Get 500 THB off your next Rescue Course if you book directly after!",
  },
  "Rescue Diver": {
    header: "Serious Fun: Become a Hero Underwater",
    intro: "Transform from a diver into a leader. You'll learn how to anticipate problems and manage emergencies, making you the best buddy in the water.",
    learns: [
      "Self-rescue and managing diver stress.",
      "Missing diver search and recovery patterns.",
      "Surfacing an unconscious diver.",
    ],
    structure: [
      "Duration: 2-3 days of intense, rewarding scenarios.",
      "Includes theory, 10 rescue exercises, and 2 realistic open-water scenarios.",
    ],
    prerequisites: [
      "Advanced Open Water certification (or equivalent).",
      "EFR (First Aid/CPR) certification valid within the last 12 months.",
    ],
    price: "12,000 THB (Add EFR for 4,000 THB if needed)",
  },
  "Peak Performance Buoyancy": {
    header: "Master Your Buoyancy & Become a Better Diver",
    intro: "Take your diving to the next level by mastering the art of buoyancy control. Learn to ascend and descend with precision, glide effortlessly over the reef, and position yourself perfectly to observe marine life—all while using less air and expending less energy.",
    included: [
      "PADI Peak Performance Buoyancy manual",
      "2 PPB training dives",
      "PADI Certification card",
      "Rental of all scuba equipment",
      "FREE use of dive computer",
      "Log book",
      "Maximum 4 students per PADI Instructor",
    ],
    learns: [
      "Fine-tune your weighting for perfect trim",
      "Hover motionless in any position",
      "Reduce air consumption significantly",
      "Navigate delicate environments without contact",
    ],
    prerequisites: [
      "Open Water certification (or equivalent)",
    ],
    price: "5,500 THB",
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

            {/* Top Highlights (Sail Rock) */}
            {detail.highlights && (
              <div className="space-y-3">
                <h4 className="font-display font-semibold text-foreground flex items-center gap-2">
                  <Anchor className="h-4 w-4 text-primary" /> Top Highlights
                </h4>
                <div className="space-y-2">
                  {detail.highlights.map((h) => (
                    <div key={h.name} className="text-sm">
                      <span className="font-semibold text-foreground">{h.name}:</span>{" "}
                      <span className="text-foreground/80">{h.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Trip Details (Sail Rock) */}
            {detail.tripDetails && (
              <div className="space-y-3">
                <h4 className="font-display font-semibold text-foreground flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" /> Trip Details
                </h4>
                <ul className="space-y-1.5">
                  {detail.tripDetails.map((t) => (
                    <li key={t} className="text-sm text-foreground/80 flex items-start gap-2">
                      <span className="text-primary mt-1">•</span> {t}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Schedule */}
            {detail.schedule && (
              <div className="space-y-3">
                <h4 className="font-display font-semibold text-foreground flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" /> Your Day
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
                  <Clock className="h-4 w-4 text-primary" /> The Course Plan
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
                  <Fish className="h-4 w-4 text-primary" /> 5 Specialty Dives
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
                  <CheckCircle2 className="h-4 w-4 text-primary" /> Skills You'll Master
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
                  <AlertCircle className="h-4 w-4 text-accent" /> Requirements
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
