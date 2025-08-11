import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Ermine from "@/assets/people/Ermine.jpg";
import Vuttey from "@/assets/people/Vuttey.jpg";
import Cheetah from "@/assets/people/Cheetah.jpg";
import Chansovatey from "@/assets/people/chansovatey.jpg";
import person5 from "@/assets/people/5.jpg";

const RecruiterClient = () => {
  const testimonials = [
    {
      quote:
        "Shanty Town Spirit Association is very pleased with Bondoul Internship’s service. Their pre-interview process saved us time and they quickly understood our needs for accounting and administration interns. The candidates are efficient, skilled, and motivated, exceeding our expectations. We also value their enthusiasm, even offering to volunteer in their free time. We highly recommend Bondoul Internship Program.",
      name: "Ermine De Rose Norodom",
      company: "Founder of Shanty Town Spirit",
      img: Ermine,
    },
    {
      quote:
        "The quality of candidates on Bondoul is unmatched. We've filled several key roles with candidates we found on the platform, and they've all exceeded our expectations.",
      name: "Vuttey",
      company: "Tech Solutions",
      img: Vuttey,
    },
    {
      quote:
        "I've used a lot of recruitment platforms, and Bondoul is by far the best. It's easy to use, the candidates are top-notch, and the customer service is excellent.",
      name: "Cheetah",
      company: "Creative Minds",
      img: Cheetah,
    },
    {
      quote:
        "The efficiency and quality of candidates we found through Bondoul have significantly reduced our hiring time. A must-have tool for any serious recruiter.",
      name: "Chansovatey",
      company: "NextGen Solutions",
      img: Chansovatey,
    },
    {
      quote:
        "Bondoul's platform is incredibly intuitive. We were able to onboard our team and start sourcing candidates within a day. The results have been fantastic.",
      name: "Michael Chen",
      company: "Future Forward Inc.",
      img: person5,
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
                  <blockquote className="text-muted-foreground relative flex flex-col h-full">
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
