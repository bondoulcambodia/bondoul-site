const SocialProof = () => {
  const stats = [
    { number: "65+", label: "Placements" },
    { number: "25+", label: "SMEs Onboarded" },
    { number: "2.9k+", label: "Young Professional already interested" },
    { number: "2y+", label: "HR Experience" },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Manager",
      content:
        "Having different CVs for different roles was a game-changer. I landed 3 interviews in one week!",
      avatar: "SJ",
    },
    {
      name: "Mike Chen",
      role: "Software Developer",
      content:
        "Finally, a platform that understands that tech roles require different skill highlights.",
      avatar: "MC",
    },
    {
      name: "Elena Rodriguez",
      role: "Project Manager",
      content:
        "The ability to customize my experience for each application type increased my success rate dramatically.",
      avatar: "ER",
    },
  ];

  return (
    <section className="px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Why Choose Bondoul?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're more than just a platform; we're a partner in your success. We
            are dedicated to connecting you with the best talent and providing
            the tools you need to build a world-class team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column: Stats */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Right Column: CEO Quote */}
          <div className="bg-gradient-to-br from-primary/10 to-background p-8 rounded-xl shadow-elegant">
            <blockquote className="text-xl italic text-foreground relative">
              <p className="mb-4">
                "In today's competitive market, finding the right talent is
                paramount. We built Bondoul to bridge the gap between
                exceptional professionals and the innovative companies that need
                them. Our commitment is to make that connection seamless,
                efficient, and truly effective."
              </p>
              <footer className="text-right not-italic">
                <p className="font-bold text-primary">
                  - John Doe, CEO of Bondoul
                </p>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>

        {/* Testimonials */}
        {/* <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            What Job Seekers Say
          </h2>
          <p className="text-xl text-muted-foreground">
            Early feedback from professionals testing our hypothesis
          </p>
        </div> */}

        {/* <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-elegant border border-border hover:shadow-glow transition-smooth animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground italic">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div> */}
    </section>
  );
};

export default SocialProof;
