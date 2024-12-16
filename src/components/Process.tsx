import { AnimatedText } from "./AnimatedText";

export const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Understand & Strategize",
      description: "I analyze your idea and align it with your goals to map out the perfect plan.",
    },
    {
      number: "02",
      title: "Build & Design",
      description: "Using Bubble.io, I design a responsive UI and set up your app with clean workflows.",
    },
    {
      number: "03",
      title: "Launch & Scale",
      description: "Get your product live and ready to scale. Need enhancements? I'm with you post-launch, too!",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <AnimatedText>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            My Process
          </h2>
        </AnimatedText>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <AnimatedText key={step.number} delay={index * 200}>
              <div className="relative">
                <div className="glass rounded-lg p-8 h-full">
                  <span className="text-6xl font-bold text-primary/10 absolute -top-6 right-4">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </AnimatedText>
          ))}
        </div>
      </div>
    </section>
  );
};