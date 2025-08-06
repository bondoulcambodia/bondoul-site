import SubscriptionHero from "@/components/SubscriptionHero";
import SubscriptionFeatures from "@/components/SubscriptionFeatures";
import SubscriptionHowItWorks from "@/components/SubscriptionHowItWorks";
import SubscriptionTestimonials from "@/components/SubscriptionTestimonials";
import SubscriptionPricing from "@/components/SubscriptionPricing";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Subscription = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <SubscriptionHero />
      <SubscriptionFeatures />
      <SubscriptionHowItWorks />
      <SubscriptionTestimonials />
      <SubscriptionPricing />
      <Footer />
    </div>
  );
};

export default Subscription;
