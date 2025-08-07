
import placeholder from "@/../public/placeholder.svg";

const RecruiterWhyUs = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Why Choose Bondoul?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're more than just a platform; we're a partner in your success. We are dedicated to connecting you with the best talent and providing the tools you need to build a world-class team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column: Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <img src={placeholder} alt="Office 1" className="rounded-lg shadow-lg w-full h-full object-cover" />
            <img src={placeholder} alt="Team 2" className="rounded-lg shadow-lg w-full h-full object-cover" />
            <img src={placeholder} alt="Meeting 3" className="rounded-lg shadow-lg w-full h-full object-cover" />
            <img src={placeholder} alt="Workspace 4" className="rounded-lg shadow-lg w-full h-full object-cover" />
          </div>

          {/* Right Column: CEO Quote */}
          <div className="bg-gradient-to-br from-primary/10 to-background p-8 rounded-xl shadow-elegant">
            <blockquote className="text-xl italic text-foreground relative">
              <p className="mb-4">
                "In today's competitive market, finding the right talent is paramount. We built Bondoul to bridge the gap between exceptional professionals and the innovative companies that need them. Our commitment is to make that connection seamless, efficient, and truly effective."
              </p>
              <footer className="text-right not-italic">
                <p className="font-bold text-primary">- John Doe, CEO of Bondoul</p>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruiterWhyUs;
