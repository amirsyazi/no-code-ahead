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

        <div className="grid md:grid-cols-2 gap-8">
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
      </div>
    </section>
  );
};