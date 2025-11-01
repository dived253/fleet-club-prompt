import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  const handleClick = () => {
    window.open("https://wa.me/971568902793", "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-accent text-accent-foreground shadow-lg hover:shadow-2xl hover:shadow-accent/30 transition-all duration-300 hover:scale-110 animate-glow"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
};

export default FloatingWhatsApp;