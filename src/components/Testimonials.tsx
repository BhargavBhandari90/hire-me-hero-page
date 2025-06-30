
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      content: "Exceptional work! The website exceeded our expectations and delivered outstanding results for our business.",
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "CTO, InnovateCorp",
      content: "Professional, reliable, and incredibly skilled. The project was delivered on time and within budget.",
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, GrowthCo",
      content: "Amazing attention to detail and user experience. Our conversion rates improved significantly after the redesign.",
      avatar: "ER"
    },
    {
      name: "David Kim",
      role: "Founder, StartupHub",
      content: "Outstanding technical expertise and communication throughout the entire project. Highly recommended!",
      avatar: "DK"
    },
    {
      name: "Lisa Thompson",
      role: "Product Manager, DevTools",
      content: "The performance optimizations were incredible. Our site now loads 3x faster than before.",
      avatar: "LT"
    },
    {
      name: "James Wilson",
      role: "VP Engineering, ScaleTech",
      content: "Clean, maintainable code and excellent problem-solving skills. A pleasure to work with.",
      avatar: "JW"
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take my word for it - hear from satisfied clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
