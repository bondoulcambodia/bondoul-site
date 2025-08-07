import { Button } from "@/components/ui/button";
import { trackEvent } from "@/hooks/useAnalytics";

const SubscriptionPricing = () => {
  const handleSubscription = (tier: string, price: string) => {
    const eventName = `jobseeker_subscription_click_${tier.toLowerCase()}`;
    trackEvent(eventName, { price });
  };

  return (
    <section id="pricing" className="container py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold">Choose Your Plan</h2>
        <p className="text-muted-foreground mt-2">
          Unlock your potential with a plan that fits your needs.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="flex flex-col p-6 bg-card rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-4">Basic</h3>
          <div className="text-center mb-6">
            <span className="text-5xl font-bold">$1.99</span>
            <span className="text-muted-foreground">/month</span>
          </div>
          <ul className="space-y-4 mb-6">
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
              <span>Access to our recruitment platform</span>
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
              <span>Personalized job recommendations</span>
            </li>
          </ul>
          <Button onClick={() => handleSubscription("Basic", "$1.99")}>
            Choose Basic
          </Button>
        </div>
        <div className="flex flex-col p-6 bg-card rounded-lg shadow-lg border-2 border-primary">
          <h3 className="text-2xl font-bold text-center mb-4">Premium</h3>
          <div className="text-center mb-6">
            <span className="text-5xl font-bold">$2.99</span>
            <span className="text-muted-foreground">/month</span>
          </div>
          <ul className="space-y-4 mb-6">
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
              <span>All features from Basic</span>
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
              <span>Direct messaging with recruiters</span>
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
              <span>Priority profile review</span>
            </li>
          </ul>
          <Button onClick={() => handleSubscription("Premium", "$2.99")}>
            Choose Premium
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPricing;
