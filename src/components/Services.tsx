
import { Code, Smartphone, Globe, Zap, Database, Settings } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: <Code className="h-8 w-8 text-blue-600" />,
      title: "Frontend Development",
      description: "Modern, responsive web applications using React, TypeScript, and cutting-edge technologies."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-green-600" />,
      title: "Mobile-First Design",
      description: "Optimized experiences across all devices with responsive design principles."
    },
    {
      icon: <Globe className="h-8 w-8 text-purple-600" />,
      title: "Full-Stack Solutions",
      description: "End-to-end web applications with robust backend integration and APIs."
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      title: "Performance Optimization",
      description: "Lightning-fast loading times and optimal user experience through performance tuning."
    },
    {
      icon: <Database className="h-8 w-8 text-red-600" />,
      title: "Database Design",
      description: "Scalable database architecture and efficient data management solutions."
    },
    {
      icon: <Settings className="h-8 w-8 text-indigo-600" />,
      title: "Technical Consulting",
      description: "Strategic guidance on technology choices and architecture decisions."
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Services I Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive web development solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
