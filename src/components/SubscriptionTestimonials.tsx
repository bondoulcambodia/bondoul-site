const SubscriptionTestimonials = () => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">
            Real Success Stories from Our Community
          </h2>
          <p className="text-muted-foreground mt-2">
            Hear from students and young professional like YOU.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="p-6 bg-card rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105">
            <p className="text-muted-foreground mb-4">
              "This platform is a game-changer. I got three interviews within the
              first week!"
            </p>
            <div className="flex items-center">
              <img
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                alt="User"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-bold">Sarah Johnson</p>
                <p className="text-sm text-muted-foreground">Software Engineer</p>
              </div>
            </div>
          </div>
          <div className="p-6 bg-card rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105">
            <p className="text-muted-foreground mb-4">
              "I was skeptical at first, but the quality of the job matches is
              incredible."
            </p>
            <div className="flex items-center">
              <img
                src="https://i.pravatar.cc/150?u=a042581f4e29026704e"
                alt="User"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-bold">Michael Chen</p>
                <p className="text-sm text-muted-foreground">Product Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionTestimonials;
