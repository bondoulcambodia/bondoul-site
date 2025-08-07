import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import placeholder from "@/assets/circle-blue.png";

const RecruiterPartner = () => {
  const officialPartners = [
    { name: "Partner 1", logo: placeholder },
    { name: "Partner 2", logo: placeholder },
    { name: "Partner 3", logo: placeholder },
    { name: "Partner 4", logo: placeholder },
  ];

  const pastClients = [
    { name: "Client 1", logo: placeholder },
    { name: "Client 2", logo: placeholder },
    { name: "Client 3", logo: placeholder },
    { name: "Client 4", logo: placeholder },
    { name: "Client 5", logo: placeholder },
    { name: "Client 6", logo: placeholder },
    { name: "Client 7", logo: placeholder },
    { name: "Client 8", logo: placeholder },
    { name: "Client 9", logo: placeholder },
    { name: "Client 10", logo: placeholder },
    { name: "Client 11", logo: placeholder },
    { name: "Client 12", logo: placeholder },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-hero">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Partners
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We work with a diverse range of companies, from startups to industry
            leaders.
          </p>
        </div>

        {/* Official MOU Partners */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            Official MOU Partners
          </h3>
          <div className="flex justify-center items-center gap-8">
            {officialPartners.map((partner, index) => (
              <div
                key={index}
                className="p-4 rounded-xl h-full flex items-center justify-center"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-16"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Past Clients */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Past Clients</h3>
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[
              Autoplay({ delay: 2500, stopOnInteraction: false }) as any,
            ]}
          >
            <CarouselContent className="-ml-4">
              {pastClients.map((client, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/4 md:basis-1/6 lg:basis-1/8 pl-4"
                >
                  <div className="p-4 rounded-xl h-full flex items-center justify-center">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-h-12"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default RecruiterPartner;
