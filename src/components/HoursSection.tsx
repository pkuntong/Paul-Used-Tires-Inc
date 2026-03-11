import { Clock, MapPin, Phone } from "lucide-react";

const hours = [
  { day: "Monday", time: "9:00 AM – 5:00 PM" },
  { day: "Tuesday", time: "9:00 AM – 5:00 PM" },
  { day: "Wednesday", time: "9:00 AM – 5:00 PM" },
  { day: "Thursday", time: "9:00 AM – 5:00 PM" },
  { day: "Friday", time: "9:00 AM – 5:00 PM" },
  { day: "Saturday", time: "Closed", closed: true },
  { day: "Sunday", time: "8:00 AM – 5:00 PM" },
];

const HoursSection = () => {
  return (
    <section id="hours" className="py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Hours */}
          <div>
            <div className="section-divider mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold mb-10">
              Hours & Location
            </h2>
            <div className="space-y-0">
              {hours.map((h) => (
                <div
                  key={h.day}
                  className="flex justify-between items-center py-4 border-b border-border"
                >
                  <span className="font-medium">{h.day}</span>
                  <span className={h.closed ? "text-destructive" : "text-muted-foreground"}>
                    {h.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Map */}
          <div className="space-y-8">
            <div className="bg-card border border-border rounded-lg p-8 space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Address</h3>
                  <p className="text-muted-foreground">
                    8041 Snouffer School Rd<br />
                    Gaithersburg, MD 20879
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Phone</h3>
                  <a href="tel:3019266736" className="text-primary hover:underline text-lg">
                    (301) 926-6736
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Walk-ins Welcome</h3>
                  <p className="text-muted-foreground">
                    No appointment needed. Drive in anytime during business hours.
                  </p>
                </div>
              </div>
            </div>
            {/* Embedded Map */}
            <div className="rounded-lg overflow-hidden border border-border h-64">
              <iframe
                title="Paul's Used Tires & Rims Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3098.5!2d-77.22!3d39.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s8041+Snouffer+School+Rd+Gaithersburg+MD+20879!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HoursSection;
