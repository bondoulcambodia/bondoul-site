import { CheckCircle, Target, Zap, TrendingUp } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "ATS-Friendly",
      description:
        "Our CVs are designed to pass Applicant Tracking Systems, so your application gets seen — not stuck in a digital void.",
    },
    {
      icon: Target,
      title: "Tailored for Every Job",
      description:
        "Easily adapt your core CV to match different roles — without losing your mind over formatting.",
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
        "Your CV will always look polished and modern — no design skills needed.",
    },
  ];

  return (
    <section className="py-20 px-6 ">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Why Bondoul's CV Builder
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Research shows that tailored applications receive significantly more
            responses than generic ones.
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
              <h3 className="text-xl font-semibold mb-3 text-foreground">
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
