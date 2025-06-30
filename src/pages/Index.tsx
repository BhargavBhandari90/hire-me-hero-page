
import Hero from "../components/Hero";
import Services from "../components/Services";
import WorkedWith from "../components/WorkedWith";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <WorkedWith />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
