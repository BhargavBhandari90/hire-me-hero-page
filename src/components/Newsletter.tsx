
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

const Newsletter = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add newsletter subscription logic here
    console.log("Newsletter subscription submitted");
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Stay Updated
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Get the latest insights on web development, design trends, and technology updates delivered to your inbox.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-4 py-3 text-lg bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:bg-white/20"
            required
          />
          <Button
            type="submit"
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold transition-colors group"
          >
            Subscribe
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </form>

        <p className="text-sm text-blue-200 mt-4">
          No spam, unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
