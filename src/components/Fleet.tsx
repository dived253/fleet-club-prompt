import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import bmwImage from "@/assets/bmw-x7.jpg";
import ferrariImage from "@/assets/ferrari.jpg";
import maybachImage from "@/assets/maybach.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const vehicles = [
  {
    name: "Lamborghini Urus",
    category: "SUV",
    brand: "Lamborghini",
    price: "AED 3,500/day",
    image: hero1,
    specs: ["4.0L V8 Twin-Turbo", "650 HP", "0-100 in 3.6s"],
  },
  {
    name: "Mercedes G63 AMG",
    category: "SUV",
    brand: "Mercedes",
    price: "AED 3,200/day",
    image: hero2,
    specs: ["4.0L V8 Biturbo", "585 HP", "Luxury Off-Road"],
  },
  {
    name: "Rolls-Royce Cullinan",
    category: "Luxury",
    brand: "Rolls-Royce",
    price: "AED 5,500/day",
    image: hero3,
    specs: ["6.75L V12", "563 HP", "Ultimate Luxury"],
  },
  {
    name: "BMW X7 M50i",
    category: "SUV",
    brand: "BMW",
    price: "AED 2,200/day",
    image: bmwImage,
    specs: ["4.4L V8 Twin-Turbo", "523 HP", "7-Seater Luxury"],
  },
  {
    name: "Ferrari 488 GTB",
    category: "Sport",
    brand: "Ferrari",
    price: "AED 4,500/day",
    image: ferrariImage,
    specs: ["3.9L V8 Twin-Turbo", "670 HP", "0-100 in 3.0s"],
  },
  {
    name: "Mercedes-Maybach S-Class",
    category: "Luxury",
    brand: "Mercedes",
    price: "AED 3,800/day",
    image: maybachImage,
    specs: ["4.0L V8 Biturbo", "496 HP", "Executive Luxury"],
  },
];

const Fleet = () => {
  const [filter, setFilter] = useState("All");
  const brands = ["All", "BMW", "Mercedes", "Lamborghini", "Ferrari", "Rolls-Royce"];

  const filteredVehicles = filter === "All" 
    ? vehicles 
    : vehicles.filter(v => v.brand === filter);

  const handleWhatsApp = (carName: string) => {
    const message = encodeURIComponent(`Hi! I'm interested in booking the ${carName}.`);
    window.open(`https://wa.me/971568902793?text=${message}`, "_blank");
  };

  return (
    <section id="fleet" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-accent/10 border border-accent rounded-full">
            <span className="text-accent text-sm font-medium">Our Collection</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Exclusive <span className="text-accent">Fleet</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of the world's finest automobiles, each maintained to perfection for your ultimate driving experience.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {brands.map((brand) => (
            <Button
              key={brand}
              variant={filter === brand ? "default" : "outline"}
              onClick={() => setFilter(brand)}
              className={filter === brand ? "bg-accent text-accent-foreground" : "border-accent/30 hover:border-accent"}
            >
              {brand}
            </Button>
          ))}
        </div>

        {/* Vehicle Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle, idx) => (
            <Card 
              key={idx} 
              className="overflow-hidden group hover:shadow-2xl hover:shadow-accent/20 transition-all duration-300 bg-card border-border animate-fade-in"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                  {vehicle.category}
                </Badge>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold mb-1">{vehicle.name}</h3>
                  <p className="text-accent font-semibold text-lg">{vehicle.price}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {vehicle.specs.map((spec, i) => (
                    <Badge key={i} variant="outline" className="border-accent/30">
                      {spec}
                    </Badge>
                  ))}
                </div>

                <Button 
                  onClick={() => handleWhatsApp(vehicle.name)}
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;