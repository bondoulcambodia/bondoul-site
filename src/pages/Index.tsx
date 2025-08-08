import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { trackEvent } from "@/hooks/useAnalytics";
import Navbar from "@/components/Navbar";
import { usePageTracking } from "@/hooks/usePageTracking";
import { useScrollTracking } from "@/hooks/useScrollTracking";
import { ArrowRight } from "lucide-react";

const Index = () => {
  usePageTracking();
  useScrollTracking();

  const handleServiceClick = (service: string) => {
    trackEvent(`navigate_to_${service}`);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-hero bg-center py-40">
          <div className="container relative mx-auto text-center">
            <h1 className="text-4xl font-bold md:text-6xl">
              Find Your Dream Job or Perfect Candidate
            </h1>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl">
              We connect talent with opportunity. Explore our services for job
              seekers and recruiters.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto">
            <h2 className="mb-12 text-center text-3xl font-bold">
              Our Services
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {/* CV Builder */}
              <div className="rounded-lg border bg-card p-8 text-center shadow-lg">
                <h3 className="mb-4 text-2xl font-bold">CV Builder</h3>
                <p className="mb-6 text-muted-foreground">
                  Create a professional CV in minutes with our easy-to-use
                  builder.
                </p>
                <Button
                  asChild
                  onClick={() => handleServiceClick("cv_builder")}
                  className="group"
                >
                  <Link to="/cv-builder">
                    Get Started{" "}
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>

              {/* Job Seeker */}
              <div className="rounded-lg border bg-card p-8 text-center shadow-lg">
                <h3 className="mb-4 text-2xl font-bold">For Job Seekers</h3>
                <p className="mb-6 text-muted-foreground">
                  Find the right job for you and get career advice from our
                  experts.
                </p>
                <Button
                  asChild
                  onClick={() => handleServiceClick("jobseeker")}
                  className="group"
                >
                  <Link to="/jobseeker">
                    Find a Job{" "}
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>

              {/* Recruiter */}
              <div className="rounded-lg border bg-card p-8 text-center shadow-lg">
                <h3 className="mb-4 text-2xl font-bold">For Recruiters</h3>
                <p className="mb-6 text-muted-foreground">
                  Post job openings and find the best candidates for your
                  company.
                </p>
                <Button
                  asChild
                  onClick={() => handleServiceClick("recruiter")}
                  className="group"
                >
                  <Link to="/recruiter">
                    Post a Job{" "}
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
