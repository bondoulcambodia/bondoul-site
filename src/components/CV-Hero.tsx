import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import heroImage from "@/assets/cv-hero-bg.png";
import { trackEvent } from "@/hooks/useAnalytics";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleEarlyAccess = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      trackEvent("join_waitlist_cv_hero");
      toast({
        title: "Thanks for your interest!",
        description: "We'll notify you when Bondoul launches.",
      });
      setEmail("");
      setShowModal(false);
    }
  };

  const handleStartBuilding = () => {
    setShowModal(true);
    trackEvent("start_building_cv_hero");
  };

  // const handleWatchDemo = () => {
  //   trackEvent("Button", "Click", "Watch Demo");
  // };

  // const handleGetEarlyAccess = () => {
  //   setShowModal(true);
  //   trackEvent("start_building_cvs");
  // };

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
          <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
            Let's Build CVs
            <br />
            <span className="text-foreground">That Work as Hard as You Do</span>
          </h1>

          <p className="text-lg md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Forget messy templates and endless formatting headaches. With
            Bondoul’s CV Builder, you create one solid CV, then customize it
            quick and easy for every job. Fast. Simple. Stress-free.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              variant="hero"
              size="lg"
              className="text-lg px-8 py-4"
              onClick={handleStartBuilding}
            >
              Start Building CVs
            </Button>
          </div>
          <div className="opacity-0">
            <Button
              variant="premium"
              size="lg"
              className="text-lg px-8 py-4"
              onClick={handleStartBuilding}
            >
              Get Early Access
            </Button>
          </div>
          <div className="opacity-0">
            <Button
              variant="premium"
              size="lg"
              className="text-lg px-8 py-4"
              onClick={handleStartBuilding}
            >
              Get Early Access
            </Button>
          </div>
          <div className="opacity-0">
            <Button
              variant="premium"
              size="lg"
              className="text-lg px-8 py-4"
              onClick={handleStartBuilding}
            >
              Get Early Access
            </Button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-3 sm:p-4">
          <div className="bg-background rounded-2xl p-8 shadow-2xl border border-border/50 max-w-md w-[90%] animate-slide-up relative">
            {/* Close button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              ✕
            </button>

            <div className="text-center mb-6">
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                You're on the VIP list 💌
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Our CV Builder is almost ready. You’ll be one of the first to
                try it. It’s clean, easy to use, and made for job seekers like
                you.
              </p>
            </div>

            <form onSubmit={handleEarlyAccess} className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email to get notified first!"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full placeholder:text-sm md:placeholder:text-base"
                required
              />
              <Button
                type="submit"
                variant="default"
                className="w-full text-sm md:text-lg py-3"
              >
                🚀 Notify Me
              </Button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
