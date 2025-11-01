import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl md:text-3xl font-bold text-accent">7FleetClub</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("fleet")} className="text-sm font-medium hover:text-accent transition-colors">
              Fleet
            </button>
            <button onClick={() => scrollToSection("yacht")} className="text-sm font-medium hover:text-accent transition-colors">
              Yacht
            </button>
            <button onClick={() => scrollToSection("gallery")} className="text-sm font-medium hover:text-accent transition-colors">
              Gallery
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-sm font-medium hover:text-accent transition-colors">
              Contact
            </button>
            <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            <button onClick={() => scrollToSection("fleet")} className="block w-full text-left text-sm font-medium hover:text-accent transition-colors">
              Fleet
            </button>
            <button onClick={() => scrollToSection("yacht")} className="block w-full text-left text-sm font-medium hover:text-accent transition-colors">
              Yacht
            </button>
            <button onClick={() => scrollToSection("gallery")} className="block w-full text-left text-sm font-medium hover:text-accent transition-colors">
              Gallery
            </button>
            <button onClick={() => scrollToSection("contact")} className="block w-full text-left text-sm font-medium hover:text-accent transition-colors">
              Contact
            </button>
            <Button size="sm" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
              Book Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;