import { CalendarDays, Target, DatabaseZap, Sprout, Users } from "lucide-react";

const RecruiterFeatures = () => {
  const features = [
    {
      icon: Sprout,
      title: "Youth-Focused Talent Pool",
      description:
        "A growing community of fresh-minded students and young professionals we’ve worked with for over two years.",
    },
    {
      icon: Target,
      title: "Job Posting That Works",
      description:
        "Share opportunities that speak to and attract the right young talent.",
    },
    {
      icon: DatabaseZap,
      title: "Recruitment Database",
      description:
        "Build and manage your candidate pool for quick or future hiring. Post jobs and use smart search to find and invite top talent.",
    },
    {
      icon: CalendarDays,
      title: "Easy Interview Scheduling",
      description:
        "Organize interviews without endless emails or missed calls.",
    },
    {
      icon: Users,
      title: "Collaborative Hiring Tools",
      description:
        "Work seamlessly with your team to find and secure the perfect fit.",
    },
  ];

  return (
    <section className="py-20 px-6 ">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            What We Offer
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            We provide the tools and community you need to make hiring young
            talent easy and efficient.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {features.slice(0, 3).map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-hero/90 backdrop-blur-sm rounded-xl p-6 shadow-elegant hover:shadow-glow transition-smooth hover:scale-105 transform animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <feature.icon className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-8 md:w-2/3 md:mx-auto">
          {features.slice(3, 5).map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-hero/90 backdrop-blur-sm rounded-xl p-6 shadow-elegant hover:shadow-glow transition-smooth hover:scale-105 transform animate-slide-up"
              style={{ animationDelay: `${(index + 3) * 0.1}s` }}
            >
              <div className="mb-4">
                <feature.icon className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecruiterFeatures;
