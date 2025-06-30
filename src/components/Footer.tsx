
import { Code, Globe, Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Web Developer</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Crafting beautiful, responsive websites and web applications that deliver exceptional user experiences.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-gray-400">
                <Code size={16} />
                <span className="text-sm">Frontend</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Globe size={16} />
                <span className="text-sm">Full Stack</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Zap size={16} />
                <span className="text-sm">Performance</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>your.email@example.com</li>
              <li>+1 (555) 123-4567</li>
              <li>Available for freelance work</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Web Developer Portfolio. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
