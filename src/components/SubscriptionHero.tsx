import { Button } from "@/components/ui/button";
import { trackEvent } from "@/hooks/useAnalytics";
import HeroBg from "@/assets/jobseeker-hero-bg.png";

const SubscriptionHero = () => {
  const handleScrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
    trackEvent("scroll_to_pricing");
  };

  return (
    <section className="relative min-h-screen w-full grid grid-cols-1 lg:grid-cols-2 items-center justify-center bg-gradient-hero p-6 sm:p-10 md:p-20">
      <div className="flex flex-col items-center lg:items-start justify-center text-center lg:text-left">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
          A Partner For Your <span className="text-primary">Career</span>
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl mt-4">
          Our platform connects you with top companies actively looking for
          talent. Stop wasting time sending out resumes into the void.
        </p>
        <div className="mt-6 w-full sm:w-auto">
          <Button
            variant="hero"
            size="lg"
            className="text-lg w-auto px-8 py-4"
            onClick={handleScrollToPricing}
          >
            Get Started
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center lg:items-start">
        <img
          src={HeroBg}
          alt="Jobseeker Hero Background"
          className="max-w-full h-auto"
        />
      </div>
    </section>
  );
};

export default SubscriptionHero;
