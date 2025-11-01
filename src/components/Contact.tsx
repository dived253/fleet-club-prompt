import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message with form data
    const message = encodeURIComponent(
      `New Contact Form Submission:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`
    );
    
    window.open(`https://wa.me/971568902793?text=${message}`, "_blank");
    
    toast.success("Redirecting to WhatsApp...");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-accent/10 border border-accent rounded-full">
            <span className="text-accent text-sm font-medium">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Contact <span className="text-accent">Us</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to elevate your experience? Reach out to our concierge team and let us create your perfect luxury journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-accent/10 border border-accent">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <p className="text-muted-foreground">+971 56 890 2793</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-accent/10 border border-accent">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-muted-foreground">contact@7fleetclub.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-accent/10 border border-accent">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Location</h3>
                <p className="text-muted-foreground">Dubai, United Arab Emirates</p>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="font-semibold mb-3">Business Hours</h3>
              <div className="space-y-2 text-muted-foreground">
                <p className="flex justify-between">
                  <span>Monday - Saturday:</span>
                  <span className="text-accent">24/7 Available</span>
                </p>
                <p className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="text-accent">24/7 Available</span>
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
            <div>
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-card border-border focus:border-accent"
              />
            </div>

            <div>
              <Input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-card border-border focus:border-accent"
              />
            </div>

            <div>
              <Input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="bg-card border-border focus:border-accent"
              />
            </div>

            <div>
              <Textarea
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="bg-card border-border focus:border-accent resize-none"
              />
            </div>

            <Button 
              type="submit" 
              size="lg"
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg"
            >
              Send Message via WhatsApp
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;