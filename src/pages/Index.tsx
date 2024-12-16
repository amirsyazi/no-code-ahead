import { Hero } from "@/components/Hero";
import { ValueProps } from "@/components/ValueProps";
import { Process } from "@/components/Process";
import { Portfolio } from "@/components/Portfolio";
import { Testimonials } from "@/components/Testimonials";
import { CallToAction } from "@/components/CallToAction";
import { Pricing } from "@/components/Pricing";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <ValueProps />
      <Process />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <CallToAction />
    </main>
  );
};

export default Index;