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
    trackEvent("recruiter_get_started_CTA");
  };

  return (
    <>
      <section className="py-20 px-6 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Start Hiring Smarter Today
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Join Bondoul and connect with the young talent ready to make a
            difference in your team.
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
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                We’re almost ready for you
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Our full hiring platform is on the way, bringing you all the
                tools you need to find, connect with, and hire young talent with
                ease. We’re almost ready, and it’ll be in your hands very soon.
              </p>
            </div>

            <form onSubmit={handleRecruiterEarlyAccess} className="space-y-4">
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
    </>
  );
};

export default RecruiterCallToAction;
