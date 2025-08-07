
import { CheckCircle, Target, Zap, TrendingUp, Users } from "lucide-react";

const RecruiterFeatures = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Post Jobs",
      description:
        "Easily post job openings to our platform and reach a wide audience of qualified candidates.",
    },
    {
      icon: Target,
      title: "Filter Candidates",
      description:
        "Our advanced filtering options help you narrow down the candidate pool to find the perfect fit.",
    },
    {
      icon: Zap,
      title: "Schedule Interviews",
      description:
        "Our built-in scheduling tool makes it easy to coordinate interviews with candidates.",
    },
    {
      icon: CheckCircle,
      title: "Manage Applicants",
      description:
        "Keep track of all your applicants in one place with our applicant tracking system.",
    },
    {
      icon: Users,
      title: "Build Your Database",
      description:
        "Build a database of qualified candidates for future job openings.",
    },
  ];

  return (
    <section className="py-20 px-6 ">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            What We Offer
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive suite of tools to streamline your recruitment process.
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
              <h3 className="text-xl font-semibold mb-3 text-foreground">
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
              <h3 className="text-xl font-semibold mb-3 text-foreground">
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
