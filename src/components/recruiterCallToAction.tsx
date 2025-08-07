import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { trackEvent } from "@/hooks/useAnalytics";

const RecruiterCallToAction = () => {
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleRecruiterEarlyAccess = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      trackEvent("join_waitlist_recruiter_cta");
      toast({
        title: "Thanks for your interest!",
        description: "We'll notify you when Bondoul launches.",
      });
      setEmail("");
      setShowModal(false);
    }
  };

  const handleRecruiterGetStarted = () => {
    setShowModal(true);
    trackEvent("recruiter_get_started");
  };

  return (
    <>
      <section className="py-20 px-6 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Find The Perfect Candidate?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of recruiters who are finding the best talent with Bondoul.
          </p>

          <div className="max-w-md mx-auto mb-8">
            <Button
              variant="hero"
              size="lg"
              className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/95"
              onClick={handleRecruiterGetStarted}
            >
              Get Started
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center text-sm opacity-80">
              ✓ Free to join
            </div>
            <div className="flex items-center text-sm opacity-80">
              ✓ Access to top talent
            </div>
            <div className="flex items-center text-sm opacity-80">
              ✓ Early access priority
            </div>
          </div>
        </div>
      </section>

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
              <h3 className="text-2xl font-bold mb-2">
                You're on the VIP list 💌
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our Recruiter platform is almost ready — and you'll be among the first
                to test it out. It's sleek, stress-free, and built just for recruiters like you.
              </p>
            </div>

            <form onSubmit={handleRecruiterEarlyAccess} className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email to get notified first!"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full"
                required
              />
              <Button
                type="submit"
                variant="default"
                className="w-full text-lg py-3"
              >
                🚀 Notify Me
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default RecruiterCallToAction;
