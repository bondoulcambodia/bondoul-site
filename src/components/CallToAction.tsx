import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const CallToAction = () => {
  const [email, setEmail] = useState("");

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Welcome to the future of job applications!",
        description: "We'll send you early access as soon as it's ready.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-primary text-white">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Land Your Dream Job?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Join thousands of job seekers who are revolutionizing their application strategy
        </p>

        <div className="max-w-md mx-auto mb-8">
          <form onSubmit={handleSignUp} className="flex gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/70"
              required
            />
            <Button type="submit" variant="premium" className="bg-white text-primary hover:bg-white/90">
              Get Started
            </Button>
          </form>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <div className="flex items-center text-sm opacity-80">
            ✓ Free to join
          </div>
          <div className="flex items-center text-sm opacity-80">
            ✓ No spam, ever
          </div>
          <div className="flex items-center text-sm opacity-80">
            ✓ Early access priority
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;