import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const images = [hero1, hero2, hero3];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  const handleWhatsApp = () => {
    window.open("https://wa.me/971568902793", "_blank");
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Image Slider */}
      <div className="absolute inset-0">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={img} alt={`Luxury car ${idx + 1}`} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-accent/10 border border-accent rounded-full">
              <span className="text-accent text-sm font-medium">Where Style Meets Motion</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              Experience
              <br />
              <span className="text-accent">Ultimate Luxury</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Dubai's premier destination for luxury car rental, chauffeur service, and exclusive yacht charter experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                onClick={handleWhatsApp}
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground text-lg px-8 py-6"
                onClick={() => document.getElementById("fleet")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Fleet
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/20 hover:bg-background/40 backdrop-blur-sm transition-all"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/20 hover:bg-background/40 backdrop-blur-sm transition-all"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentImage(idx)}
            className={`h-1.5 rounded-full transition-all ${
              idx === currentImage ? "w-12 bg-accent" : "w-1.5 bg-foreground/30"
            }`}
            aria-label={`Go to image ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;