import { AnimatedText } from "./AnimatedText";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export const Portfolio = () => {
  const projects = [
    {
      title: "Tradelio Stock Portfolio",
      description: "Complex stock trade logic and calculations",
      image: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/7f/a9/96/7fa996bb-6e12-d279-1227-bffcad6c0a61/d7ea268b-c8ed-4216-8360-3bcfa3aff04d_6.5_Step-02.png/460x0w.webp",
    },
    {
      title: "Exercise Rewards App",
      description: "Fitness tracker integrations + tokenized rewards",
      image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&q=80&w=500",
    },
    {
      title: "Stocks Social Media",
      description: "Real-time updates, leaderboards, and chat",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=500",
    },
    {
      title: "Gig Management System",
      description: "Connect gig workers and companies seamlessly",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=500",
    },
  ];

  return (
    <section className="section-padding bg-secondary/50">
      <div className="container mx-auto">
        <AnimatedText>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            See What I've Built
          </h2>
        </AnimatedText>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedText key={project.title} delay={index * 100}>
              <Card className="overflow-hidden group cursor-pointer">
                <div className="aspect-video relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white">
                      <h3 className="font-semibold mb-2">{project.title}</h3>
                      <p className="text-sm opacity-80">{project.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold mb-1">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            </AnimatedText>
          ))}
        </div>
      </div>
    </section>
  );
};
