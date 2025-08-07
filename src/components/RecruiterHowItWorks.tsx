
const RecruiterHowItWorks = () => {
  return (
    <section id="how-it-works" className="container py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold">How It Works</h2>
        <p className="text-muted-foreground mt-2">
          Get started in just a few simple steps.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 bg-primary rounded-full text-primary-foreground font-bold text-2xl">
            1
          </div>
          <h3 className="text-xl font-bold mb-2">Create Account</h3>
          <p className="text-muted-foreground">
            Sign up for a free account to get started.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 bg-primary rounded-full text-primary-foreground font-bold text-2xl">
            2
          </div>
          <h3 className="text-xl font-bold mb-2">Start Posting</h3>
          <p className="text-muted-foreground">
            Post your job openings to our platform.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 bg-primary rounded-full text-primary-foreground font-bold text-2xl">
            3
          </div>
          <h3 className="text-xl font-bold mb-2">Build DB</h3>
          <p className="text-muted-foreground">
            Build your database of qualified candidates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RecruiterHowItWorks;
