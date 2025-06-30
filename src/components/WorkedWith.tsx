
const WorkedWith = () => {
  const companies = [
    "Google", "Microsoft", "Apple", "Amazon", "Meta", "Netflix", "Spotify", "Adobe", "Salesforce", "IBM"
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Leading Companies
          </h2>
          <p className="text-lg text-gray-600">
            I've had the privilege to work with amazing organizations
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...companies, ...companies].map((company, index) => (
              <div
                key={index}
                className="mx-8 flex-shrink-0 flex items-center justify-center h-16 px-8 bg-white rounded-lg shadow-sm border"
              >
                <span className="text-xl font-semibold text-gray-700">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkedWith;
