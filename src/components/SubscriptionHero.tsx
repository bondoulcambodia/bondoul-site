import { Button } from "@/components/ui/button";
import { trackEvent } from "@/hooks/useAnalytics";
import HeroBg from "@/assets/jobseeker-hero-bg.png";

const SubscriptionHero = () => {
  const handleScrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
    trackEvent("scroll_to_pricing");
  };

  return (
    <section className="relative min-h-[95vh] sm:min-h-screen w-full flex flex-col lg:grid grid-cols-1 lg:grid-cols-2 items-center justify-center bg-gradient-hero gap-8 lg:gap-0 pt-20 p-6 sm:p-10 lg:p-16">
      <div className="absolute top-6 left-6 bg-white/80 backdrop-blur-md rounded-full shadow-md px-4 py-2 flex flex-row items-center gap-3 whitespace-nowrap">
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="flex flex-row items-center gap-2"
        >
          <img
            src="./src/assets/circle-blue.png"
            alt="Bondoul Logo"
            className="h-7 sm:h-10 w-auto"
          />
          <span className="font-bold text-base sm:text-lg tracking-tight text-gray-900">
            Bondoul
          </span>
        </a>
      </div>

      <div className="flex flex-col items-center lg:items-start justify-center text-center lg:text-left">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
          A Friend For Your <span className="text-primary">Career</span>
        </h1>
        <p className="max-w-[700px] text-muted-foreground text-lg md:text-xl mt-4">
          Our platform connects you with internship and entry-level jobs where
          company want to see you. Bondoul is here to support you every step of
          the way until you land your dream job.
        </p>
        <p className="mt-4 max-w-[600px] text-center lg:text-left text-sm italic text-primary/80">
          “Your journey to success starts with a single step.”
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

      <div className="mt-10 animate-bounce text-primary text-3xl">↓</div>
    </section>
  );
};

export default SubscriptionHero;
