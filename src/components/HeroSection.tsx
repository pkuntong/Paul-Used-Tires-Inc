import heroImage from "@/assets/hero-tires.jpg";
import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Quality used tires at Paul's Tire shop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="max-w-2xl space-y-6 animate-fade-in-up">
          <div className="flex items-center gap-2 text-primary font-body text-sm tracking-widest uppercase">
            <MapPin className="w-4 h-4" />
            Gaithersburg, Maryland
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[0.95]">
            Paul's Used<br />
            <span className="text-gradient">Tires & Rims</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg font-light leading-relaxed">
            Quality used tires and rims at unbeatable prices. Trusted by the Gaithersburg community for reliable service and expert tire installation.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button variant="hero" size="lg" asChild>
              <a href="tel:3019266736">
                <Phone className="w-5 h-5" />
                (301) 926-6736
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="https://maps.google.com/?q=8041+Snouffer+School+Rd+Gaithersburg+MD" target="_blank" rel="noopener noreferrer">
                Get Directions
              </a>
            </Button>
          </div>
          <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <span className="text-primary font-semibold">★ 4.1</span> on Yelp
            </div>
            <div>BBB A+ Rated</div>
            <div>89+ Reviews</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
