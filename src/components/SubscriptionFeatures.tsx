import { CheckCircle, ListFilter, Zap, LayoutDashboard } from "lucide-react";
import SocialProof from "@/components/SocialProof";

const SubscriptionFeatures = () => {
  const features = [
    {
      icon: Zap,
      title: "Smart Matching Just For You",
      description:
        "We learn your preferences and helps find opportunities that fit you",
      points: [
        "Personalized match scores",
        "Entry-level job and internship recommendations",
        "Real success insights",
      ],
    },
    {
      icon: ListFilter,
      title: "Search Made Simple",
      description:
        "Find exactly what you want with filters",
      points: [
        "Salary & timeline",
        "Location-based options",
        "Skill & experience fit",
      ],
    },
    {
      icon: LayoutDashboard,
      title: "Your Personal Dashboard",
      description:
        "Keep track of everything in one place. Stay on top of your applications and interviews",
      points: [
        "Application status updates",
        "Interview scheduling",
        "Progress tracking",
      ],
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Why Bondoul Platform?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our platform is designed to help you find the right opportunities and land your dream internship or entry-level job, all while being part of a community that supports, listens, and grows with you.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="w-full md:w-[45%] lg:w-[30%] bg-gradient-hero/90 backdrop-blur-sm rounded-xl p-6 shadow-elegant hover:shadow-glow transition-smooth hover:scale-105 transform animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <feature.icon className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
              <ul className="mt-4 space-y-2">
                {feature.points.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1" />
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
