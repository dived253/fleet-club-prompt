import { Shield, Clock, Award, Sparkles } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "VIP Chauffeur Service",
    description: "Professional drivers trained to deliver comfort, discretion, and impeccable service.",
  },
  {
    icon: Sparkles,
    title: "Exclusive Fleet",
    description: "Access to rare supercars and luxury vehicles meticulously maintained to perfection.",
  },
  {
    icon: Award,
    title: "Unmatched Comfort",
    description: "Every detail is designed to exceed expectations and create unforgettable moments.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock concierge service ready to fulfill your luxury transportation needs.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-accent/10 border border-accent rounded-full">
            <span className="text-accent text-sm font-medium">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            The <span className="text-accent">7FleetClub</span> Difference
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We don't just rent vehicles — we curate experiences that redefine luxury transportation in Dubai.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 animate-fade-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="mb-6 inline-flex p-4 rounded-xl bg-accent/10 border border-accent group-hover:bg-accent group-hover:border-accent transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;