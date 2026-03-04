import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import FunDiveCalendar from "@/components/FunDiveCalendar";

const FunDiveBookingPage = () => {
  return (
    <div className="min-h-screen bg-ocean-surface">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <div className="text-center mb-10">
          <p className="text-primary font-body text-sm uppercase tracking-[0.2em] mb-2">Certified Divers</p>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground">Book Fun Dives</h1>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Choose your preferred date and time slot. Morning, afternoon, or night — the ocean awaits.
          </p>
        </div>

        <FunDiveCalendar />
      </div>
    </div>
  );
};

export default FunDiveBookingPage;
