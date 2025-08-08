import image1 from "@/assets/circle-blue.png";
import image2 from "@/assets/cv-hero-bg.png";
import image3 from "@/assets/hero-bg.jpg";
import image4 from "@/assets/jobseeker-hero-bg.png";
import image5 from "@/assets/recruiter-hero-bg.png";

const RecruiterWhyUs = () => {
  const stats = [
    { number: "65", label: "Internship placed manually before" },
    { number: "25", label: "SMEs onboarded" },
    {
      number: "2y+",
      label: "of HR experience in youth career development",
    },
    { number: "5k+", label: "university students in our network" },
  ];

  const images = [image1, image2, image3, image4, image5];
  const duplicatedImages = [...images, ...images];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Why Choose Bondoul?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We’re here to help you succeed. Our goal is to connect you with
            great talent and give you the tools to build a strong team.
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
                “We’ve spent 2+ years building trust with Cambodian youth so if
                you want motivated students and fresh grads, this is where they
                look first.”
              </p>
              <footer className="text-right not-italic">
                <p className="font-bold text-primary">
                  - Sokhethida, CEO of Bondoul
                </p>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>

      {/* Image Scroller */}
      <div className="mt-20 relative overflow-hidden">
        {/* Gradient masks for fade effect */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

        {/* Scrolling container */}
        <div className="flex whitespace-nowrap md:animate-scroll animate-scroll-fast">
          {/* First set of images */}
          {images.map((img, index) => (
            <div
              key={`first-${index}`}
              className="w-72 h-48 flex-shrink-0 mx-2"
            >
              <img
                src={img}
                alt={`Showcase image ${index + 1}`}
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>
          ))}
          {/* Duplicated set of images */}
          {images.map((img, index) => (
            <div
              key={`second-${index}`}
              className="w-72 h-48 flex-shrink-0 mx-2"
            >
              <img
                src={img}
                alt={`Showcase image ${index + 1}`}
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecruiterWhyUs;
