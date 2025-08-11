import { CheckCircle, Target, Zap, Settings } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Settings,
      title: "ATS-Friendly",
      description:
        "Our CVs are built to pass Applicant Tracking Systems. Your application gets seen, not filtered out.",
    },
    {
      icon: Target,
      title: "Tailored for Every Job",
      description:
        "Quickly adjust your CV for different roles. No messy formatting. No wasted time.",
    },
    {
      icon: Zap,
      title: "Save Time & Effort",
      description:
        "Stop rewriting your resume from scratch. Build once, customize infinitely.",
    },
    {
      icon: CheckCircle,
      title: "Professional Design",
      description:
        "Your CV will always look clean and modern. No design skills needed.",
    },
  ];

  return (
    <section className="py-20 px-6 ">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Why Bondoul's CV Builder
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Research shows tailored applications get more responses than generic
            ones. Personalizing your CV and answers makes a real difference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gradient-hero/90 backdrop-blur-sm rounded-xl p-6 shadow-elegant hover:shadow-glow transition-smooth hover:scale-105 transform animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <benefit.icon className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
