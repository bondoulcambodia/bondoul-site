import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Ermine from "@/assets/people/Ermine.jpg";

const RecruiterClient = () => {
  const testimonials = [
    {
      quote:
        "Shanty Town Spirit Association is very pleased with Bondoul Internship’s service. Their pre-interview process saved us time and they quickly understood our needs for accounting and administration interns. The candidates are efficient, skilled, and motivated, exceeding our expectations. We also value their enthusiasm, even offering to volunteer in their free time. We highly recommend Bondoul Internship Program.",
      name: "Ermine De Rose Norodom",
      company: "Founder of Shanty Town Spirit",
      img: Ermine,
    },
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            What Our Clients Say
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from those who’ve found success with Bondoul.
          </p>
        </div>

        <Carousel opts={{ slidesToScroll: 1, loop: false }}>
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 pl-4"
              >
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-border/50 h-full flex flex-col">
                  <blockquote className="text-muted-foreground relative flex flex-col h-full text-base md:text-lg">
                    <p className="mb-4 flex-grow">"{testimonial.quote}"</p>
                    <footer className="not-italic mt-auto">
                      <div className="flex items-center">
                        <img
                          src={testimonial.img}
                          alt="User"
                          className="w-12 h-12 rounded-full mr-4"
                        />
                        <div>
                          <p className="font-bold text-foreground">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.company}
                          </p>
                        </div>
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
