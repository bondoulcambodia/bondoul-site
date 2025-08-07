import { Button } from "@/components/ui/button";
import { trackEvent } from "@/hooks/useAnalytics";
import HeroBg from "@/assets/jobseeker-hero-bg.png";

const SubscriptionHero = () => {
  const handleScrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
    trackEvent("scroll_to_pricing");
  };

  return (
    <section className="relative min-h-screen w-full grid grid-cols-1 lg:grid-cols-2 bg-gradient-hero p-10 md:p-20">
      <div className="flex flex-col items-center lg:items-start justify-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
          A Partner For Your <span className="text-primary">Career</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Our platform connects you with top companies actively looking for
          talent. Stop wasting time sending out resumes into the void.
        </p>
        <div className="mt-6">
          {/* <Button onClick={handleScrollToPricing}>Get Started</Button> */}
          <Button
            variant="hero"
            size="lg"
            className="text-lg px-8 py-4"
            onClick={handleScrollToPricing}
          >
            Get Started
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center">
        <img src={HeroBg} />
      </div>
    </section>
  );
};

export default SubscriptionHero;
