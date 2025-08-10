import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const SubscriptionTestimonials = () => {
  const testimonials = [
    {
      quote:
        "This platform is a game-changer. I got three interviews within the first week!",
      name: "Sarah Johnson",
      title: "Software Engineer",
      img: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    },
    {
      quote:
        "I was skeptical at first, but the quality of the job matches is incredible.",
      name: "Michael Chen",
      title: "Product Manager",
      img: "https://i.pravatar.cc/150?u=a042581f4e29026704e",
    },
    {
      quote:
        "The variety of opportunities helped me find the perfect fit for my skills.",
      name: "Jessica Lee",
      title: "UX/UI Designer",
      img: "https://i.pravatar.cc/150?u=a042581f4e29026704f",
    },
    {
      quote: "A must-have tool for any student looking for internships.",
      name: "David Kim",
      title: "Marketing Intern",
      img: "https://i.pravatar.cc/150?u=a042581f4e29026704g",
    },
  ];

  return (
    <section className="pt-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Real Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from students and young professional like YOU.
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
                            {testimonial.title}
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

export default SubscriptionTestimonials;
