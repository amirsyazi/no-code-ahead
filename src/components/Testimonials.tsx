import { AnimatedText } from "./AnimatedText";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "Amir helped us turn our vision into a working product fast. His knowledge of Bubble and his attention to detail made a huge difference.",
      author: "Sarah Johnson",
      role: "CEO, TechStart",
      rating: 5,
    },
    {
      quote: "The development process was smooth and the end result exceeded our expectations. Highly recommended!",
      author: "Michael Chen",
      role: "Founder, DataFlow",
      rating: 5,
    },
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <AnimatedText>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            What My Clients Say
          </h2>
        </AnimatedText>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <AnimatedText key={index} delay={index * 200}>
              <Card className="p-8 glass">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-lg mb-6">"{testimonial.quote}"</blockquote>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </Card>
            </AnimatedText>
          ))}
        </div>
      </div>
    </section>
  );
};