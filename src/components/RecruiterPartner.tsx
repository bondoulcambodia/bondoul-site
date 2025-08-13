import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import partner1 from "@/assets/logo/partner1.png";
import partner2 from "@/assets/logo/partner2.png";
import partner3 from "@/assets/logo/partner3.png";
import partner4 from "@/assets/logo/partner4.png";

import school1 from "@/assets/logo/school1.png";
import school2 from "@/assets/logo/school2.png";
import school3 from "@/assets/logo/school3.png";
import school4 from "@/assets/logo/school4.png";
import school5 from "@/assets/logo/school5.png";
import school6 from "@/assets/logo/school6.png";

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
import client15 from "@/assets/logo/client15.png";
import client16 from "@/assets/logo/client16.png";
import client17 from "@/assets/logo/client17.png";
import client18 from "@/assets/logo/client18.png";
import client19 from "@/assets/logo/client19.png";
import client20 from "@/assets/logo/client20.png";
import client21 from "@/assets/logo/client21.png";
import client22 from "@/assets/logo/client22.png";
import client23 from "@/assets/logo/client23.png";
import client24 from "@/assets/logo/client24.png";
import client25 from "@/assets/logo/client25.png";

const RecruiterPartner = () => {
  const strategicPartners = [
    { name: "Partner 1", logo: partner1 },
    { name: "Partner 2", logo: partner2 },
    { name: "Partner 3", logo: partner3 },
    { name: "Partner 4", logo: partner4 },
  ];

  const schools = [
    { name: "School 1", logo: school1 },
    { name: "School 2", logo: school2 },
    { name: "School 3", logo: school3 },
    { name: "School 4", logo: school4 },
    { name: "School 5", logo: school5 },
    { name: "School 6", logo: school6 },
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
    { name: "Client 13", logo: client13 },
    { name: "Client 14", logo: client14 },
    { name: "Client 15", logo: client15 },
    { name: "Client 16", logo: client16 },
    { name: "Client 17", logo: client17 },
    { name: "Client 18", logo: client18 },
    { name: "Client 19", logo: client19 },
    { name: "Client 20", logo: client20 },
    { name: "Client 21", logo: client21 },
    { name: "Client 22", logo: client22 },
    { name: "Client 23", logo: client23 },
    { name: "Client 24", logo: client24 },
    { name: "Client 25", logo: client25 },
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

        {/* strategic MOU Partners */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-center">Strategic Partners</h3>
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[
              Autoplay({ delay: 3500, stopOnInteraction: false }) as any,
            ]}
          >
            <CarouselContent className="-ml-4">
              {strategicPartners.map((partner, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/3 md:basis-1/4 pl-4"
                >
                  <div className="p-4 rounded-xl h-full flex items-center justify-center">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-32"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* School */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-center">
            Institution Partners
          </h3>
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[
              Autoplay({ delay: 2500, stopOnInteraction: false }) as any,
            ]}
          >
            <CarouselContent className="-ml-4">
              {schools.map((school, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/3 md:basis-1/5 lg:basis-1/7  pl-4"
                >
                  <div className="p-4 rounded-xl h-full flex items-center justify-center">
                    <img
                      src={school.logo}
                      alt={school.name}
                      className="max-h-32"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Past Clients */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-2">Past Clients</h3>
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[
              Autoplay({ delay: 2000, stopOnInteraction: false }) as any,
            ]}
          >
            <CarouselContent className="-ml-4">
              {pastClients.map((client, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/3 md:basis-1/5 lg:basis-1/7 pl-4"
                >
                  <div className="p-4 rounded-xl h-full flex items-center justify-center">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-h-28"
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
