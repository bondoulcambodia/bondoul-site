import SubscriptionHero from "@/components/SubscriptionHero";
import SubscriptionFeatures from "@/components/SubscriptionFeatures";
import SocialProof from "@/components/SocialProof";
import SubscriptionPricing from "@/components/SubscriptionPricing";
import SubscriptionTestimonials from "@/components/SubscriptionTestimonials";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useScrollTracking } from "@/hooks/useScrollTracking";
import SubscriptionHowItWorks from "@/components/SubscriptionHowItWorks";
import ImageScroller from "@/components/ImageScroller";

const Subscription = () => {
  useScrollTracking();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SubscriptionHero />
      <SubscriptionFeatures />

      <div className="my-4">
        <SocialProof />
      </div>

      <SubscriptionTestimonials />
      <ImageScroller />
      <SubscriptionHowItWorks />
      <SubscriptionPricing />

      <Footer />
    </div>
  );
};

export default Subscription;
