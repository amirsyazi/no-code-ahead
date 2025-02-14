
import { Button } from "@/components/ui/button";
import { AnimatedText } from "@/components/AnimatedText";

const NoCodeCaseStudy = () => {
  const handleSubscribe = () => {
    // TODO: Replace with actual newsletter signup link
    window.open("#", "_blank");
  };

  return (
    <main className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-6 py-16 prose prose-lg">
        <AnimatedText>
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
            How One Founder Saved $45,000 and 19 Months by Switching to No-Code
          </h1>
        </AnimatedText>

        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Trap of Traditional Development</h2>
            <p>
              You spend years building an app. Tens of thousands of dollars. Sleepless nights. 
              Endless emails with developers who speak in a language you don't fully understand.
            </p>
            <p>
              Then, launch day comes. And your users hate it. It's slow. Clunky. A nightmare to update. 
              Every small tweak requires weeks of back-and-forth. Customers complain. Your competitors move faster. 
              And you—despite investing everything—feel like you're sinking.
            </p>
            <p>
              That's exactly where my client found themselves. They had poured <strong>two years and $60,000</strong> into 
              their app. It was live, it was functional—but it wasn't scalable. Every small UI/UX change required an 
              exhausting development cycle. They had a team of traditional developers, but the complexity of their tech 
              stack meant that even the smallest fix required navigating a maze of dependencies.
            </p>
            <p>
              They were stuck. Do they spend <strong>another year and thousands more</strong> to rebuild their app from scratch? 
              Or do they risk launching a product that, at its core, wasn't designed for the speed of the modern market?
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The No-Code Pivot</h2>
            <p>
              That's when they found me. I introduced them to No-Code—not as a quick hack, but as a <strong>real solution</strong> 
              to their scaling problems. With <strong>Bubble.io</strong>, I helped them rebuild their app <strong>in just 5 months</strong> 
              instead of another <strong>1-2 years</strong>.
            </p>
            <p>Not only did we slash development time, but we also cut costs dramatically:</p>
            <ul className="list-none space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-green-500">✅</span>
                <span><strong>Total cost: $15,000</strong> (a <strong>$45,000</strong> savings compared to traditional dev)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✅</span>
                <span><strong>Performance optimized</strong>—we restructured their app for <strong>speed & efficiency</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✅</span>
                <span><strong>Instant UI/UX updates</strong>—instead of waiting weeks, they could implement changes in real-time</span>
              </li>
            </ul>
            <p>The best part? They weren't stuck anymore.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">From Weeks to Hours</h2>
            <p>
              Before No-Code, <strong>even a minor design tweak took weeks</strong>. A simple button placement change? 
              A new onboarding flow? They'd have to file a request with their dev team, wait for an available sprint, 
              and pray that nothing broke in the process.
            </p>
            <p>
              Now? During our <strong>weekly meetings</strong>, I could <strong>implement UI/UX changes in real-time</strong>—sometimes 
              in under <strong>2-3 hours</strong>, right in front of them.
            </p>
            <p className="italic">
              "This used to take us months. Now it's done before our next meeting."
            </p>
            <p>
              That shift—from reactive to <strong>adaptive</strong> development—completely changed their approach to product building.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Results: Speed Wins Every Time</h2>
            <p>After launching their No-Code app, everything changed:</p>
            <ul className="list-none space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-green-500">✔️</span>
                <span><strong>User reviews skyrocketed</strong>—the app was now <strong>faster and more responsive</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✔️</span>
                <span><strong>Iteration became effortless</strong>—customer feedback was implemented in days, not months</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✔️</span>
                <span><strong>Their team finally felt in control</strong>—instead of being held hostage by a slow dev cycle</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">No-Code Isn't Just for MVPs</h2>
            <p>
              The biggest myth about No-Code? That it's only good for prototypes. This client <strong>proved otherwise</strong>. 
              They had a <strong>fully-coded app</strong>—and we <strong>rebuilt it in No-Code, faster and cheaper</strong>, 
              without sacrificing <strong>performance, scalability, or user experience</strong>.
            </p>
            <p>
              No-Code is no longer just an "MVP tool." It's a <strong>serious alternative</strong> to traditional 
              development—especially for founders who need to move fast.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Move</h2>
            <p>If you're:</p>
            <ul className="list-none space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-green-500">✅</span>
                <span><strong>Frustrated with slow dev cycles</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✅</span>
                <span><strong>Burning money on endless code updates</strong></span>
              </li>
            </ul>
          </section>

          <section className="bg-gray-100 p-8 rounded-lg mt-12">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              🚀 Want to build a No-Code app faster & cheaper?
            </h3>
            <p className="mb-6">
              Subscribe to my newsletter for exclusive insights!
            </p>
            <Button 
              className="bg-indigo-600 hover:bg-indigo-700 text-white" 
              onClick={handleSubscribe}
            >
              Subscribe to Newsletter
            </Button>
          </section>
        </div>
      </article>
    </main>
  );
};

export default NoCodeCaseStudy;
