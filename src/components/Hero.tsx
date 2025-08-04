import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-bg.jpg";
import { trackEvent } from "@/hooks/useAnalytics";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleEarlyAccess = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      trackEvent("Button", "Click", "Join Waitlist");
      toast({
        title: "Thanks for your interest!",
        description: "We'll notify you when Bondoul launches.",
      });
      setEmail("");
    }
  };

  const handleStartBuilding = () => {
    trackEvent("Button", "Click", "Start Building CVs");
  };

  const handleWatchDemo = () => {
    trackEvent("Button", "Click", "Watch Demo");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
            One Profile,<br />
            <span className="text-foreground">Multiple CVs</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Tailor your resume for every opportunity. Create specialized CVs that match the exact requirements of each position you apply for.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4" onClick={handleStartBuilding}>
              Start Building CVs
            </Button>
            <Button variant="premium" size="lg" className="text-lg px-8 py-4" onClick={handleWatchDemo}>
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Early Access Form */}
        <div className="animate-slide-up max-w-md mx-auto">
          <div className="bg-background/90 backdrop-blur-sm rounded-2xl p-6 shadow-elegant border border-border/50">
            <h3 className="text-lg font-semibold mb-4">Get Early Access</h3>
            <form onSubmit={handleEarlyAccess} className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                required
              />
              <Button type="submit" variant="default">
                Join Waitlist
              </Button>
            </form>
            <p className="text-sm text-muted-foreground mt-2">
              Be the first to know when we launch
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;