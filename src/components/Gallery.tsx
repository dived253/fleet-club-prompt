import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import bmwImage from "@/assets/bmw-x7.jpg";
import ferrariImage from "@/assets/ferrari.jpg";
import maybachImage from "@/assets/maybach.jpg";
import interiorImage from "@/assets/interior-luxury.jpg";
import yachtImage from "@/assets/yacht-hero.jpg";

const images = [
  hero1, hero2, hero3, bmwImage, ferrariImage, maybachImage, interiorImage, yachtImage
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-accent/10 border border-accent rounded-full">
            <span className="text-accent text-sm font-medium">Gallery</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Captured <span className="text-accent">Moments</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every detail tells a story of craftsmanship, performance, and uncompromising luxury.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, idx) => (
            <div 
              key={idx}
              className="relative group overflow-hidden rounded-xl aspect-square animate-fade-in"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <img 
                src={image} 
                alt={`Gallery image ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;