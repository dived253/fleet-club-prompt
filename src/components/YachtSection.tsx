import { Button } from "@/components/ui/button";
import { Anchor, Users, Waves } from "lucide-react";
import yachtImage from "@/assets/yacht-hero.jpg";

const YachtSection = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in chartering a luxury yacht.");
    window.open(`https://wa.me/971568902793?text=${message}`, "_blank");
  };

  return (
    <section id="yacht" className="py-20 md:py-32 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative animate-fade-in order-2 md:order-1">
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src={yachtImage} 
                alt="Luxury yacht" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
          </div>

          <div className="space-y-6 animate-fade-in order-1 md:order-2">
            <div className="inline-block px-4 py-2 bg-accent/10 border border-accent rounded-full">
              <span className="text-accent text-sm font-medium">Exclusive Yacht Charter</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold">
              Sail Into
              <span className="block text-accent">Luxury</span>
            </h2>
            
            <p className="text-muted-foreground leading-relaxed">
              Experience the ultimate maritime luxury with our exclusive yacht charter service. Whether it's a sunset cruise, corporate event, or celebration, our premium yachts offer unparalleled comfort and sophistication on Dubai's pristine waters.
            </p>

            <div className="space-y-4 py-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10 border border-accent">
                  <Anchor className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Premium Vessels</h3>
                  <p className="text-sm text-muted-foreground">State-of-the-art yachts with world-class amenities</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10 border border-accent">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Expert Crew</h3>
                  <p className="text-sm text-muted-foreground">Professional captain and staff for a seamless experience</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10 border border-accent">
                  <Waves className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Tailored Experiences</h3>
                  <p className="text-sm text-muted-foreground">Custom routes and catering to match your vision</p>
                </div>
              </div>
            </div>

            <Button 
              size="lg"
              onClick={handleWhatsApp}
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8"
            >
              Request Yacht Availability
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YachtSection;