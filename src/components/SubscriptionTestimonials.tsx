const SubscriptionTestimonials = () => {
  return (
    <section className="container py-20 bg-gray-100 dark:bg-gray-800 rounded-lg">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">What Our Users Say</h2>
        <p className="text-muted-foreground mt-2">Real stories from people who found their dream job.</p>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="p-6 bg-card rounded-lg shadow-lg">
          <p className="text-muted-foreground mb-4">"This platform is a game-changer. I got three interviews within the first week!"</p>
          <div className="flex items-center">
            <img src="/placeholder.svg" alt="User" className="w-12 h-12 rounded-full mr-4" />
            <div>
              <p className="font-bold">Sarah Johnson</p>
              <p className="text-sm text-muted-foreground">Software Engineer</p>
            </div>
          </div>
        </div>
        <div className="p-6 bg-card rounded-lg shadow-lg">
          <p className="text-muted-foreground mb-4">"I was skeptical at first, but the quality of the job matches is incredible."</p>
          <div className="flex items-center">
            <img src="/placeholder.svg" alt="User" className="w-12 h-12 rounded-full mr-4" />
            <div>
              <p className="font-bold">Michael Chen</p>
              <p className="text-sm text-muted-foreground">Product Manager</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionTestimonials;
