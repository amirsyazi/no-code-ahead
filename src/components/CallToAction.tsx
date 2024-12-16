import { AnimatedText } from "./AnimatedText";
import { Button } from "@/components/ui/button";

export const CallToAction = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container mx-auto text-center">
        <AnimatedText>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Launch Your App?
          </h2>
        </AnimatedText>
        
        <AnimatedText delay={200}>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let's make it happen. I'll help you design, develop, and scale your next big idea.
          </p>
        </AnimatedText>

        <AnimatedText delay={400}>
          <Button
            size="lg"
            variant="secondary"
            className="animate-float"
          >
            Get Started →
          </Button>
        </AnimatedText>
      </div>
    </section>
  );
};