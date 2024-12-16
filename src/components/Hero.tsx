import { AnimatedText } from "./AnimatedText";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
      {/* Abstract Pattern Background */}
      <div 
        className="absolute inset-0 opacity-80"
        style={{
          backgroundImage: `url("https://d4a2a1889ec80792c402c057c297a34b.cdn.bubble.io/f1734318891982x295194209561946430/6313863_3224665.jpg?_gl=1*1tnom6n*_gcl_au*MTQxMjc3NDMwMy4xNzMwMTE2MjA5*_ga*MjMxOTAyMDAxLjE3MTQzNTU5ODA.*_ga_BFPVR2DEE2*MTczNDMxNTI2Ny4xNDIuMS4xNzM0MzE1MjY4LjU5LjAuMA..")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background/80" />
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