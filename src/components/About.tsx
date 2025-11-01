import interiorImage from "@/assets/interior-luxury.jpg";

const About = () => {
  return (
    <section className="py-20 md:py-32 bg-card relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-accent/10 border border-accent rounded-full">
              <span className="text-accent text-sm font-medium">About 7FleetClub</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold">
              Redefining Luxury
              <span className="block text-accent">Transportation</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                At 7FleetClub, we deliver more than transportation — we provide an experience. Our meticulously curated collection features the world's most prestigious automotive brands, from Ferrari and Lamborghini to Rolls-Royce and Mercedes-Maybach.
              </p>
              <p>
                Each vehicle in our fleet represents the pinnacle of engineering, design, and luxury. Whether you require a chauffeur-driven Maybach for business, a Lamborghini Urus for adventure, or a private yacht charter for celebration, we ensure every journey is extraordinary.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 bg-background/50 rounded-lg border border-accent/20">
                <p className="text-3xl font-bold text-accent">50+</p>
                <p className="text-sm text-muted-foreground mt-1">Luxury Vehicles</p>
              </div>
              <div className="text-center p-4 bg-background/50 rounded-lg border border-accent/20">
                <p className="text-3xl font-bold text-accent">24/7</p>
                <p className="text-sm text-muted-foreground mt-1">Concierge Service</p>
              </div>
              <div className="text-center p-4 bg-background/50 rounded-lg border border-accent/20">
                <p className="text-3xl font-bold text-accent">VIP</p>
                <p className="text-sm text-muted-foreground mt-1">Treatment</p>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src={interiorImage} 
                alt="Luxury car interior" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;