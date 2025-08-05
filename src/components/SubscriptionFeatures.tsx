const SubscriptionFeatures = () => {
  return (
    <section className="container py-20">
      <div className="grid gap-8 md:grid-cols-3">
        <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-lg">
          <div className="p-4 bg-primary/10 rounded-full mb-4">
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197m0 0A6.002 6.002 0 003 21v-1a6 6 0 0112 0v1z"></path></svg>
          </div>
          <h3 className="text-2xl font-bold mb-2">Direct Connections</h3>
          <p className="text-muted-foreground">
            No more middlemen. Connect directly with hiring managers and get your profile noticed.
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-lg">
          <div className="p-4 bg-primary/10 rounded-full mb-4">
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
          </div>
          <h3 className="text-2xl font-bold mb-2">Personalized Matches</h3>
          <p className="text-muted-foreground">
            Our algorithm matches you with jobs that fit your skills and experience.
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-lg">
          <div className="p-4 bg-primary/10 rounded-full mb-4">
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v11.494m-9-5.747h18"></path></svg>
          </div>
          <h3 className="text-2xl font-bold mb-2">Career Resources</h3>
          <p className="text-muted-foreground">
            Access a library of resources to help you ace your interviews and advance your career.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionFeatures;
