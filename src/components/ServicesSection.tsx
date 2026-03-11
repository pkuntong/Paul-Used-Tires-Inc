import { CircleDot, Wrench, Car, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: CircleDot,
    title: "Used Tires",
    description: "Wide selection of quality inspected used tires for all vehicle makes and models at affordable prices.",
  },
  {
    icon: Wrench,
    title: "Tire Installation",
    description: "Professional mounting, balancing, and installation by experienced technicians.",
  },
  {
    icon: Car,
    title: "Rims & Wheels",
    description: "Find the perfect rims to match your style. New and used options available.",
  },
  {
    icon: ShieldCheck,
    title: "Wheel Repair",
    description: "Expert wheel and rim repair services to get you back on the road safely.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="section-divider mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold">Our Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-colors group"
            >
              <service.icon className="w-10 h-10 text-primary mb-5 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
