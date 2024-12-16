import { AnimatedText } from "./AnimatedText";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
      {/* Abstract Pattern Background */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        backgroundSize: '24px 24px'
      }} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background/95" />
      <div className="container mx-auto text-center relative z-10">
        <AnimatedText delay={0}>
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/5 text-primary">
            Build Something Amazing
          </span>
        </AnimatedText>
        
        <AnimatedText delay={200}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Turn Ideas into High-Performing Apps
            <span className="block text-gradient">Fast and Without Code</span>
          </h1>
        </AnimatedText>

        <AnimatedText delay={400}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Build sleek, scalable, and fully functional apps with no-code solutions. I specialize in Bubble.io to help startups and businesses get their digital products live quickly and efficiently.
          </p>
        </AnimatedText>

        <AnimatedText delay={600}>
          <Button size="lg" className="animate-float">
            Let's Build Your App →
          </Button>
        </AnimatedText>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            ["100+", "Projects Delivered"],
            ["95%", "Client Satisfaction"],
            ["24/7", "Support Available"],
            ["2-4x", "Faster Development"],
          ].map(([number, label], index) => (
            <AnimatedText key={label} delay={800 + index * 100}>
              <div className="glass rounded-lg p-6">
                <div className="text-2xl font-bold mb-2">{number}</div>
                <div className="text-sm text-muted-foreground">{label}</div>
              </div>
            </AnimatedText>
          ))}
        </div>
      </div>
    </section>
  );
};