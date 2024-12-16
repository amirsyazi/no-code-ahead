import { AnimatedText } from "./AnimatedText";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "Amir is a highly competent and reliable Bubble.io contractor. He delivers great quality in a short time and is very responsive.",
      author: "Mitch Baylis",
      role: "Make Expert, No-code/Low-code Agency",
      rating: 5,
      date: "24 Feb 2024",
    },
    {
      quote: "He delivered on time, also gave reason why the function was not working and what's his approach to that fix. Thank you for your service!",
      author: "Vishanupande",
      role: "CTO @ findmy***.com",
      rating: 5,
      date: "10 May 2023",
    },
    {
      quote: "Very effective Bubble developer. Clear communication and delivered to schedule. Will use again.",
      author: "3-2-1.io",
      role: "Bubble Agency",
      rating: 5,
      date: "04 Mar 2023",
    },
    {
      quote: "Great service, clear communication and work delivered to a high standard. Will be using again, a true Bubble ninja.",
      author: "3-2-1.io",
      role: "Bubble Agency",
      rating: 5,
      date: "05 Feb 2023",
    },
    {
      quote: "Efficient work and good communication.",
      author: "Corentind",
      role: "Founder, Mobile-Ask App",
      rating: 5,
      date: "21 Mar 2022",
    },
    {
      quote: "I find that he is an expert in his field, he masters Bubble well and finds solutions to all the difficulties that I encounter in the evolution of my application. I have worked with him for several times and I will always continue to do so in the long term. He is respectful, warm, patient, he guessed what we need. I highly recommend it.",
      author: "Terreciel",
      role: "Founder, France's Online Marketplace",
      rating: 5,
      date: "02 Mar 2022",
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <AnimatedText>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            What My Clients Say
          </h2>
        </AnimatedText>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <AnimatedText key={index} delay={index * 200}>
              <Card className="p-8 glass h-full">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-lg mb-6">"{testimonial.quote}"</blockquote>
                <div className="mt-auto">
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-sm text-muted-foreground mt-1">{testimonial.date}</div>
                </div>
              </Card>
            </AnimatedText>
          ))}
        </div>
      </div>
    </section>
  );
};