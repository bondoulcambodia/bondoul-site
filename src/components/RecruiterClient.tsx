
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { User, Building } from "lucide-react";

const RecruiterClient = () => {
  const testimonials = [
    {
      quote: "Bondoul has been a game-changer for our recruitment process. We've been able to find and hire top talent faster than ever before. The platform is intuitive, the candidate pool is exceptional, and the support from the Bondoul team has been outstanding.",
      name: "Jane Smith",
      company: "Innovate Inc.",
    },
    {
      quote: "The quality of candidates on Bondoul is unmatched. We've filled several key roles with candidates we found on the platform, and they've all exceeded our expectations.",
      name: "John Doe",
      company: "Tech Solutions",
    },
    {
      quote: "I've used a lot of recruitment platforms, and Bondoul is by far the best. It's easy to use, the candidates are top-notch, and the customer service is excellent.",
      name: "Peter Jones",
      company: "Creative Minds",
    },
    {
      quote: "The efficiency and quality of candidates we found through Bondoul have significantly reduced our hiring time. A must-have tool for any serious recruiter.",
      name: "Sarah Lee",
      company: "NextGen Solutions",
    },
    {
      quote: "Bondoul's platform is incredibly intuitive. We were able to onboard our team and start sourcing candidates within a day. The results have been fantastic.",
      name: "Michael Chen",
      company: "Future Forward Inc.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're proud to have helped some of the world's most innovative companies build their teams.
          </p>
        </div>

        <Carousel opts={{ slidesToScroll: 1, loop: false }}>
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6 border border-border/50 h-full">
                  <blockquote className="text-lg italic text-foreground relative flex flex-col h-full">
                    <p className="mb-4 flex-grow">
                      {testimonial.quote}
                    </p>
                    <footer className="not-italic mt-auto">
                      <div className="flex items-center mb-1">
                        <User className="h-4 w-4 mr-2 text-primary" />
                        <p className="font-semibold text-sm text-primary">{testimonial.name}</p>
                      </div>
                      <div className="flex items-center">
                        <Building className="h-4 w-4 mr-2 text-primary" />
                        <p className="font-semibold text-sm text-primary">{testimonial.company}</p>
                      </div>
                    </footer>
                  </blockquote>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default RecruiterClient;
