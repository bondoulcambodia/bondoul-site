import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import placeholder from "@/assets/circle-blue.png";
import mou1 from "@/assets/logo/mou1.png";
import mou2 from "@/assets/logo/mou2.png";
import mou3 from "@/assets/logo/mou3.png";
import client1 from "@/assets/logo/client1.png";
import client2 from "@/assets/logo/client2.png";
import client3 from "@/assets/logo/client3.png";
import client4 from "@/assets/logo/client4.png";
import client5 from "@/assets/logo/client5.png";
import client6 from "@/assets/logo/client6.png";
import client7 from "@/assets/logo/client7.png";
import client8 from "@/assets/logo/client8.png";
import client9 from "@/assets/logo/client9.png";
import client10 from "@/assets/logo/client10.png";
import client11 from "@/assets/logo/client11.png";
import client12 from "@/assets/logo/client12.png";
import client13 from "@/assets/logo/client13.png";
import client14 from "@/assets/logo/client14.png";

const RecruiterPartner = () => {
  const officialPartners = [
    { name: "Partner 1", logo: mou1 },
    { name: "Partner 2", logo: mou2 },
    { name: "Partner 3", logo: mou3 },
  ];

  const pastClients = [
    { name: "Client 1", logo: client1 },
    { name: "Client 2", logo: client2 },
    { name: "Client 3", logo: client3 },
    { name: "Client 4", logo: client4 },
    { name: "Client 5", logo: client5 },
    { name: "Client 6", logo: client6 },
    { name: "Client 7", logo: client7 },
    { name: "Client 8", logo: client8 },
    { name: "Client 9", logo: client9 },
    { name: "Client 10", logo: client10 },
    { name: "Client 11", logo: client11 },
    { name: "Client 12", logo: client12 },
    { name: "Client 12", logo: client13 },
    { name: "Client 12", logo: client14 },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-hero">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Our Partners
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We’re proud to work with trusted partners and clients who share our
            vision for connecting young talent with great opportunities.
          </p>
        </div>

        {/* Official MOU Partners */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-center">
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
                  className="max-h-32"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Past Clients */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-2">Past Clients</h3>
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
                      className="max-h-24"
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
