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
        <h1 className="text-center lg:text-left text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
          A Partner For Your <span className="text-primary">Career</span>
        </h1>
        <p className="text-center lg:text-left max-w-[700px] text-muted-foreground md:text-xl mt-4">
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