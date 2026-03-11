import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        <a href="#" className="font-heading text-xl font-bold tracking-wider uppercase">
          Paul's <span className="text-primary">Tires</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#services" className="hover:text-foreground transition-colors">Services</a>
          <a href="#hours" className="hover:text-foreground transition-colors">Hours</a>
          <Button variant="hero" size="sm" asChild>
            <a href="tel:3019266736">
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
