import SubscriptionHero from "@/components/SubscriptionHero";
import SubscriptionFeatures from "@/components/SubscriptionFeatures";
import SocialProof from "@/components/SocialProof";
import SubscriptionPricing from "@/components/SubscriptionPricing";
import SubscriptionTestimonials from "@/components/SubscriptionTestimonials";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { usePageTracking } from "@/hooks/usePageTracking";
import { useScrollTracking } from "@/hooks/useScrollTracking";

const Subscription = () => {
  usePageTracking();
  useScrollTracking();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SubscriptionHero />
      <SubscriptionFeatures />
      <div className="my-12">
        <SocialProof />
      </div>
      <SubscriptionPricing />
      <SubscriptionTestimonials />
      <Footer />
    </div>
  );
};

export default Subscription;
