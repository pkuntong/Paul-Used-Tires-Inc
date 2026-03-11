import { Star } from "lucide-react";

const reviews = [
  {
    name: "Happy Customer",
    stars: 5,
    text: "Amazing service, great friendly staff. Got my tires replaced quickly and at a fraction of the cost of new ones. Highly recommend!",
  },
  {
    name: "Local Driver",
    stars: 5,
    text: "Paul's is the go-to spot for tires in Gaithersburg. They always have what I need and the prices can't be beat.",
  },
  {
    name: "Satisfied Client",
    stars: 4,
    text: "Very professional and knowledgeable. They helped me find the right tires for my SUV and had them installed in no time.",
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="section-divider mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What Customers Say</h2>
          <p className="text-muted-foreground">
            Rated 4.1 stars on Yelp with 89+ reviews
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-lg p-8"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.stars }).map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{review.text}"
              </p>
              <p className="font-semibold text-sm">— {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
