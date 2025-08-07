const SocialProof = () => {
  const stats = [
    { number: "60%", label: "Higher response rate" },
    { number: "2.1x", label: "More interview invitations" },
    { number: "45%", label: "Faster job placement" },
    { number: "2.9k+", label: "Job seekers already interested" },
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
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
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
      </div>
    </section>
  );
};

export default SocialProof;
