import { Button } from "@/components/ui/button";
import { trackEvent } from "@/hooks/useAnalytics";

const SubscriptionHero = () => {
  const handleScrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
    trackEvent("Scroll to Pricing");
  };

  return (
    <section className="container flex flex-col items-center justify-center text-center py-20">
      <img src="/placeholder.svg" alt="Recruitment Platform" className="w-full max-w-4xl rounded-lg shadow-lg mb-8" />
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
        Find Your Dream Job, Faster
      </h1>
      <p className="max-w-[700px] text-muted-foreground md:text-xl mt-4">
        Our platform connects you with top companies actively looking for talent. Stop wasting time sending out resumes into the void.
      </p>
      <div className="mt-8">
        <Button onClick={handleScrollToPricing}>Get Started</Button>
      </div>
    </section>
  );
};

export default SubscriptionHero;
