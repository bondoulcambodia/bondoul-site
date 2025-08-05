import { Button } from "@/components/ui/button";
import { trackEvent } from "@/hooks/useAnalytics";

const PricingCard = () => {
  const handleSubscription = () => {
    trackEvent("Hypothesis Testing", { price: "$1" });
  };

  return (
    <div className="flex flex-col p-6 bg-card rounded-lg shadow-lg max-w-sm w-full">
      <h2 className="text-2xl font-bold text-center mb-4">Unlock Your Potential</h2>
      <p className="text-center text-muted-foreground mb-6">
        For just $1, gain access to our exclusive recruitment platform and connect with top employers.
      </p>
      <div className="text-center mb-6">
        <span className="text-5xl font-bold">$1</span>
        <span className="text-muted-foreground">/one-time</span>
      </div>
      <ul className="space-y-4 mb-6">
        <li className="flex items-center">
          <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
          <span>Access to our recruitment platform</span>
        </li>
        <li className="flex items-center">
          <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
          <span>Connect with top employers</span>
        </li>
        <li className="flex items-center">
          <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
          <span>Personalized job recommendations</span>
        </li>
      </ul>
      <Button onClick={handleSubscription}>I'm willing to pay $1</Button>
    </div>
  );
};

export default PricingCard;
