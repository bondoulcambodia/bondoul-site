import ImageScroller from "./ImageScroller";

const RecruiterWhyUs = () => {
  const stats = [
    { number: "65", label: "Internship placed manually before" },
    { number: "25", label: "SMEs onboarded" },
    {
      number: "2y+",
      label: "of HR experience in youth career development",
    },
    { number: "2.9k+", label: "University students in our network" },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Why Choose Bondoul?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We’re here to help you succeed. Our goal is to connect you with
            great talent and give you the tools to build a strong team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center pb-20 sm:pb-0">
          {/* Left Column: Stats */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Right Column: CEO Quote */}
          <div className="bg-gradient-hero p-8 rounded-xl shadow-elegant">
            <blockquote className="text-lg text-foreground relative">
              <p className="mb-4">
                “We’ve spent 2+ years building trust with Cambodian youth so if
                you want motivated students and fresh grads, this is where they
                look first.”
              </p>
              <footer className="text-right not-italic">
                <p className="font-bold text-primary">- Bondoul Team</p>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>

      <ImageScroller />
    </section>
  );
};

export default RecruiterWhyUs;
