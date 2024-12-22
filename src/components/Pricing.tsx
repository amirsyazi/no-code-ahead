import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { AnimatedText } from "./AnimatedText";

export const Pricing = () => {
  const standardFeatures = [
    "Unlimited apps",
    "Unlimited requests",
    "AI integrations",
    "Workflow automations",
    "UI/UX designs",
    "Training & support",
    "Full ownership",
  ];

  const proFeatures = ["2x faster task completion", ...standardFeatures];

  return (
    <section className="section-padding bg-gray-950 text-white relative">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://d4a2a1889ec80792c402c057c297a34b.cdn.bubble.io/f1734319154328x961015072665613000/34363084_404288197149.jpg?_gl=1*1dhykef*_gcl_au*MTQxMjc3NDMwMy4xNzMwMTE2MjA5*_ga*MjMxOTAyMDAxLjE3MTQzNTU5ODA.*_ga_BFPVR2DEE2*MTczNDMxNTI2Ny4xNDIuMS4xNzM0MzE1MjY4LjU5LjAuMA..')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.2,
        }}
      />
      <div className="container mx-auto relative z-10">
        <AnimatedText>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Elevate your business,
              <br />
              not your costs
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Get unlimited access to a top-tier full-stack no-code developer with our simple monthly subscription.
              Skip the hiring process and say goodbye to headaches.
            </p>
          </div>
        </AnimatedText>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <AnimatedText delay={200}>
            <Card className="p-8 bg-gray-900/50 backdrop-blur border-gray-800 text-white">
              <h3 className="text-xl font-semibold mb-2">Standard</h3>
              <div className="mb-4">
                <span className="text-5xl font-bold">$2,495</span>
                <span className="text-gray-400 block mt-1">per month, pause or cancel anytime</span>
              </div>
              <ul className="space-y-3 mb-8">
                {standardFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="text-indigo-500 h-5 w-5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="space-y-3">
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Get started</Button>
                <Button 
                  variant="outline" 
                  className="w-full border-gray-700 hover:bg-gray-800 text-gray-900 bg-white hover:text-white"
                  onClick={() => window.open('https://savvycal.com/amirsyazi/funnello-intro-call-1', '_blank')}
                >
                  Book a call
                </Button>
              </div>
            </Card>
          </AnimatedText>

          <AnimatedText delay={400}>
            <Card className="p-8 bg-gray-900/50 backdrop-blur border-gray-800 text-white">
              <h3 className="text-xl font-semibold mb-2">Pro</h3>
              <div className="mb-4">
                <span className="text-5xl font-bold">$3,995</span>
                <span className="text-gray-400 block mt-1">per month, pause or cancel anytime</span>
              </div>
              <ul className="space-y-3 mb-8">
                {proFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="text-indigo-500 h-5 w-5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="space-y-3">
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Get started</Button>
                <Button 
                  variant="outline" 
                  className="w-full border-gray-700 hover:bg-gray-800 text-gray-900 bg-white hover:text-white"
                  onClick={() => window.open('https://savvycal.com/amirsyazi/funnello-intro-call-2', '_blank')}
                >
                  Book a call
                </Button>
              </div>
            </Card>
          </AnimatedText>

          <AnimatedText delay={600}>
            <Card className="p-8 bg-gray-900/50 backdrop-blur border-gray-800 text-white">
              <h3 className="text-xl font-semibold mb-2">Custom</h3>
              <div className="mb-4">
                <p className="text-lg">Need a custom plan? Let us know what works for you.</p>
              </div>
              <div className="flex-1" />
              <Button className="w-full mt-8 border-gray-700 hover:bg-gray-800 text-gray-900 bg-white hover:text-white" variant="outline">
                Contact us
              </Button>
            </Card>

            <Card className="p-8 bg-gray-900/50 backdrop-blur border-gray-800 text-white mt-8">
              <h3 className="text-xl font-semibold mb-2">Refer & earn</h3>
              <p className="text-gray-400 mb-6">
                Earn 5% commission every month for every referral. Contact us for a referral link.
              </p>
              <Button className="w-full border-gray-700 hover:bg-gray-800 text-white" variant="outline">
                Invite
              </Button>
            </Card>
          </AnimatedText>
        </div>
      </div>
    </section>
  );
};