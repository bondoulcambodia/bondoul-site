import { Building2, Megaphone, Blocks } from "lucide-react";

const RecruiterHowItWorks = () => {
  return (
    <section id="how-it-works" className="container pb-20 pt-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold">How It Works</h2>
        <p className="text-lg md:text-xl text-muted-foreground mt-2">
          Get started in just 3 simple steps.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 bg-primary rounded-full text-primary-foreground font-bold text-2xl">
            <Building2 size={30} />
          </div>
          <h3 className="text-lg md:text-xl font-bold mb-2">
            Set Up Your Company Profile
          </h3>
          <p className="text-muted-foreground">
            Tell us about your company, your values, and invite your team to
            collaborate if needed.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 bg-primary rounded-full text-primary-foreground font-bold text-2xl">
            <Megaphone size={30} />
          </div>
          <h3 className="text-lg md:text-xl font-bold mb-2">Share Your Opportunities</h3>
          <p className="text-muted-foreground">
            Post jobs, internships, or any other opportunities you want to
            offer. Let great candidates find you and apply with ease.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 bg-primary rounded-full text-primary-foreground font-bold text-2xl">
            <Blocks size={30} />
          </div>
          <h3 className="text-lg md:text-xl font-bold mb-2">
            Build and Manage Your Talent Pool
          </h3>
          <p className="text-muted-foreground">
            Collect applications and use our smart search to find and invite the
            right candidates. Keep all your potential hires organized in one
            easy place.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RecruiterHowItWorks;
