
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Globe, Zap } from "lucide-react";

const Hero = () => {
  const handleHireMe = () => {
    // Add your contact method here (email, contact form, etc.)
    window.open("mailto:your.email@example.com", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-100 rounded-full opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Hero Content */}
        <div className="animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm border">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600">Available for work</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent mb-6 leading-tight">
            Web Developer
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            I craft beautiful, responsive websites and web applications that deliver exceptional user experiences
          </p>

          {/* Skills showcase */}
          <div className="flex justify-center items-center space-x-8 mb-12 text-gray-500">
            <div className="flex items-center space-x-2 hover:text-blue-600 transition-colors">
              <Code size={20} />
              <span className="text-sm font-medium">Frontend</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-blue-600 transition-colors">
              <Globe size={20} />
              <span className="text-sm font-medium">Full Stack</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-blue-600 transition-colors">
              <Zap size={20} />
              <span className="text-sm font-medium">Performance</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleHireMe}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 group"
            >
              Hire Me
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-6 text-lg font-semibold rounded-full border-2 hover:bg-gray-50 transition-all duration-200"
            >
              View My Work
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
