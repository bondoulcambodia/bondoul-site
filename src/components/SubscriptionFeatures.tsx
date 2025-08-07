import { CheckCircle, Target, Zap } from "lucide-react";
import SocialProof from "@/components/SocialProof";

const SubscriptionFeatures = () => {
  const features = [
    {
      icon: Zap,
      title: "AI-Powered Matching",
      description:
        "Our algorithm learns your preferences and find the right opportunities for you.",
      points: [
        "Smart compatibility scoring",
        "Preference recommendations",
        "Success prediction",
      ],
    },
    {
      icon: Target,
      title: "Smart Search & Filters",
      description:
        "Find exactly what you're looking for with AI-powered search across all opportunity types.",
      points: [
        "Salary & timeline filters",
        "Location-based filters",
        "Skill & experience matching",
      ],
    },
    {
      icon: CheckCircle,
      title: "Personalized Dashboard",
      description:
        "Track all your applications, interviews, deadlines, and opportunities in one organized space.",
      points: [
        "Application Status tracking",
        "Interview scheduling",
        "Progress analytics",
      ],
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Why Bondoul Platform
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our platform is designed to help you find the right opportunities
            and land your dream job.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
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
              <ul className="mt-4 space-y-2">
                {feature.points.map((point, i) => (
                  <li key={i} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubscriptionFeatures;
