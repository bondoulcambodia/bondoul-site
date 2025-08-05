import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { trackEvent } from "@/hooks/useAnalytics";
import Navbar from "@/components/Navbar";

const Index = () => {
  const handleContactClick = () => {
    trackEvent("Contact Me");
  };

  const handleMeetingClick = () => {
    trackEvent("Book a Meeting");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="flex flex-col items-center justify-center flex-1 text-center">
        <div className="container relative pb-10">
          <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
            <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
              Welcome to my Portfolio
            </h1>
            <p className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl">
              I build accessible, inclusive products and digital experiences for
              the web.
            </p>
            <div className="flex w-full items-center justify-center space-x-4 py-4 md:pb-10">
              <Button asChild onClick={handleContactClick}>
                <Link to="#">Contact Me</Link>
              </Button>
              <Button asChild variant="outline" onClick={handleMeetingClick}>
                <Link to="#">Book a Meeting</Link>
              </Button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Index;