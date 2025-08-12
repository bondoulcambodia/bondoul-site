import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { FC } from 'react';
import Cheetah from "@/assets/people/Cheetah.jpg"
import Chansovaty from "@/assets/people/Chansovatey.jpg"
import Vuttey from "@/assets/people/Vuttey.jpg"
import Channika from "@/assets/people/Channika.jpg"
import Sreymoch from "@/assets/people/Sreymoch.jpg"
import Sokkong from "@/assets/people/Sokkong.jpg"

interface Testimonial {
  quote: string
  img: string
  name: string
  title: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      "I’m grateful to Bondoul for the chance to intern with Shanty Town Spirit. This experience showed me the challenges people face and how a small, committed organization can make a real impact. I supported admin tasks, community projects, and promoted handmade products by local women. It was rewarding to contribute to something meaningful. This internship gave me purpose, skills, and confidence I’ll carry forward.",
    name: "Leng Puth Socheata",
    title: "Intern at Shanty Town Spirit",
    img: Cheetah,
  },
  {
    quote:
      "I feel fortunate to have found Bondoul when I was searching for an internship. From the application to the interview, the process was smooth and positive. The workplace I’m in now has a great environment, team, and boss. I’m truly thankful for this opportunity and always recommend Bondoul to anyone looking for an internship.",
    name: "Houn Sokkong",
    title: "Intern at nTn Dining Technology",
    img: Sokkong,
  },
  {
    quote:
      "I’m grateful to Bondoul for connecting me with the opportunity to work at Youding. This experience helped me improve my communication and problem-solving skills in a supportive environment. I appreciate Bondoul’s regular check-ins and guidance, which made the journey even smoother. Their support has been invaluable. I highly recommend Bondoul to young professionals seeking meaningful and rewarding career opportunities.☺️",
    name: "Hak Vuttey",
    title: "Intern at Youding",
    img: Vuttey,
  },
  {
    quote:
      "Interning at Shanty Town Spirit has been a meaningful and transformative experience. I learned, contributed, and connected with people who truly care about social change. I stepped out of my comfort zone, took on real responsibilities, and saw the direct impact of our work in the community. From organizing events to supporting daily operations and spending time with local families, every moment had purpose. I’m grateful to Bondoul for their guidance and support throughout this journey.",
    name: "Bou Chansovatey",
    title: "Intern at Shanty Town Spirit",
    img: Chansovaty,
  },
  {
    quote:
      "Over the past month of my internship at Asian Petrel Advisory, I’ve grown both professionally and personally. This role pushed me out of my comfort zone, helped me build new skills, and allowed me to make meaningful connections. I’m grateful to Bondoul for connecting me with this opportunity and consistently supporting me throughout the journey. I highly recommend Bondoul to anyone looking to grow and advance their career.",
    name: "Channy Channika",
    title: "Intern at Asian Petel Advisory",
    img: Channika,
  },
  {
    quote:
      "Hi, I’m Rith Sreymoch, currently interning at AD Academy. I’m grateful for the chance to learn and grow in content creation and marketing. Thanks to Bondoul, I’ve gained hands-on skills in social media strategies, content creation, and teamwork. Every day brings new learning, and I’m excited to keep developing in this field. Thank you, Bondoul, for making this opportunity possible. I look forward to the journey ahead.🚀",
    name: "Rith Sreymoch",
    title: "Intern at AD Academy",
    img: Sreymoch,
  },
]

const SubscriptionTestimonials: FC = () => {
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

          <Carousel opts={{ slidesToScroll: 1, loop: true}}>
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
  )
}

export default SubscriptionTestimonials
