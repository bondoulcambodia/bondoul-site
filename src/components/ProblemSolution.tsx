const ProblemSolution = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Problem */}
          <div className="animate-fade-in">
            <div className="text-center lg:text-left">
              <span className="inline-block px-4 py-2 bg-destructive/10 text-destructive rounded-full text-sm font-medium mb-6">
                The Problem
              </span>
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                One-Size-Fits-All CVs Don't Work
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Job seekers struggle with generic resumes that don't match specific job requirements.
                </p>
                <p>
                  Hiring managers receive hundreds of applications with identical, templated CVs that lack relevance.
                </p>
                <p>
                  The best candidates often get overlooked because their skills don't shine through generic formatting.
                </p>
              </div>
            </div>
          </div>

          {/* Solution */}
          <div className="animate-slide-up">
            <div className="text-center lg:text-left">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                Our Solution
              </span>
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Tailored CVs for Every Opportunity
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Create multiple versions of your CV, each optimized for specific roles and industries.
                </p>
                <p>
                  Our intelligent platform suggests relevant skills and experiences to highlight for each position.
                </p>
                <p>
                  Stand out from the crowd with professionally formatted, targeted resumes that get noticed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;