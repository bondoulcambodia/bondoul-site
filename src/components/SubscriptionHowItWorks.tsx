const SubscriptionHowItWorks = () => {
  return (
    <section className="container py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
          How It Works
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A simple process to connect with your future.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        <div className="flex flex-col items-center text-center">
          <div className="p-4 bg-primary/10 rounded-full mb-4">
            <svg
              className="w-8 h-8 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              ></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">1. Create Your Profile</h3>
          <p className="text-muted-foreground">
            Build a comprehensive profile that showcases your skills and
            experience to potential employers.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="p-4 bg-primary/10 rounded-full mb-4">
            <svg
              className="w-8 h-8 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">2. Get Matched</h3>
          <p className="text-muted-foreground">
            Our smart algorithm connects you with job opportunities that align
            with your career goals.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="p-4 bg-primary/10 rounded-full mb-4">
            <svg
              className="w-8 h-8 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V7a2 2 0 012-2h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V8z"
              ></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">3. Start Interviewing</h3>
          <p className="text-muted-foreground">
            Receive interview requests directly from companies and land your
            dream job.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionHowItWorks;
