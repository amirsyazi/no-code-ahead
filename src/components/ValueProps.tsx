import { AnimatedText } from "./AnimatedText";
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export const ValueProps = () => {
  const benefits = [
    {
      title: "Pixel-Perfect Designs",
      description: "Clean, responsive, and user-friendly interfaces that look great on any device.",
    },
    {
      title: "Scalable Apps",
      description: "Robust, optimized database structures built for growth and performance.",
    },
    {
      title: "Rapid Development",
      description: "Go from concept to reality in weeks, not months, without compromising quality.",
    },
    {
      title: "Custom Workflows",
      description: "From CRMs to marketplaces, bringing complex workflows to life seamlessly.",
    },
  ];

  return (
    <section className="section-padding bg-secondary/50">
      <div className="container mx-auto">
        <AnimatedText>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why Work With Me?
          </h2>
        </AnimatedText>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <AnimatedText key={benefit.title} delay={index * 100}>
              <Card className="p-6 hover:shadow-lg transition-shadow duration-300 glass">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              </Card>
            </AnimatedText>
          ))}
        </div>

        <div className="space-y-12">
          <AnimatedText delay={400}>
            <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl">
              <div className="relative pb-[100%] h-0">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://platform.twitter.com/embed/Tweet.html?id=1625360421279657985"
                  allowFullScreen
                  allow="autoplay"
                ></iframe>
              </div>
            </div>
            <p className="text-center mt-4 text-muted-foreground">
              Watch me build a front-end UI in Bubble for a pet web app (2x speed)
            </p>
          </AnimatedText>

          <AnimatedText delay={600}>
            <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl">
              <div className="relative pb-[100%] h-0">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://platform.twitter.com/embed/Tweet.html?id=1658811191421206528"
                  allowFullScreen
                  allow="autoplay"
                ></iframe>
              </div>
            </div>
            <p className="text-center mt-4 text-muted-foreground">
              Watch me build a drag and drop UI for a travel table page in Bubble
            </p>
          </AnimatedText>
        </div>
      </div>
    </section>
  );
};