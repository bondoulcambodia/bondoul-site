import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { trackEvent } from "@/hooks/useAnalytics";

const SubscriptionPricing = () => {
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState({ tier: "", price: "" });

  const handleChoosePlan = (tier: string, price: string) => {
    setSelectedPlan({ tier, price });
    setShowModal(true);
    trackEvent(`open_early_access_modal_${tier.toLowerCase()}`);
  };

  const handleEarlyAccess = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      trackEvent(
        `jobseeker_subscription_click_${selectedPlan.tier.toLowerCase()}`,
        {
          price: selectedPlan.price,
          email,
        }
      );
      toast({
        title: "Thanks for your interest!",
        description: "You're on the list! We'll notify you upon launch.",
      });
      setEmail("");
      setShowModal(false);
    }
  };

  return (
    <>
      <section
        id="pricing"
        className="max-w-5xl mx-auto pb-20 pt-10 px-6 sm:px-10"
      >
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Choose Your Plan
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Start free and upgrade as you accelerate your career journey
          </p>
        </div>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          {/* Explorer Plan */}
          <div className="flex flex-col p-6 bg-card rounded-lg shadow-lg">
            <h3 className="text-xl md:text-2xl font-bold text-center mb-4">
              Explorer
            </h3>
            <div className="text-center mb-6">
              <span className=" text-4xl md:text-5xl font-bold">$1.99</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <ul className="space-y-4 mb-6 flex-grow">
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Access to all opportunity types</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Basic search and filters</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Up to 10 applications per month</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Limited access to dashboard</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Basic analytics</span>
              </li>
            </ul>
            <Button onClick={() => handleChoosePlan("Explorer", "$1.99")}>
              Choose Explorer
            </Button>
          </div>

          {/* Professional Plan */}
          <div className="flex flex-col p-6 bg-card rounded-lg shadow-lg border-2 border-primary">
            <h3 className="text-xl md:text-2xl font-bold text-center mb-4">
              Professional
            </h3>
            <div className="text-center mb-6">
              <span className="text-4xl md:text-5xl font-bold">$2.99</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <ul className="space-y-4 mb-6 flex-grow">
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Everything in Explorer</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Unlimited applications</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>AI-Powered recommendations</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Advanced search filters</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Early access to new opportunities</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Directly connect with recruiters</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Profile optimization suggestions</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Additional interview preparation resources</span>
              </li>
            </ul>
            <Button onClick={() => handleChoosePlan("Professional", "$2.99")}>
              Choose Professional
            </Button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-3 sm:p-4">
          <div className="bg-background rounded-2xl p-8 shadow-2xl border border-border/50 max-w-md w-[90%] animate-slide-up relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              ✕
            </button>

            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">
                Join our early access members!
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                You've selected the {selectedPlan.tier} plan. Be among the first
                to test it out.
              </p>
            </div>

            <form onSubmit={handleEarlyAccess} className="space-y-4">
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

export default SubscriptionPricing;
