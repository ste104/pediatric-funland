import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ClinicCarousel from "@/components/Carousel";
import About from "@/components/About";
import Location from "@/components/Location";
import Blog from "@/components/Blog";
import Instagram from "@/components/Instagram";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ClinicCarousel />
        <Services />
        <About />
        <Blog />
        <Instagram />
        <Location />
        <Contact />
      </main>
    </div>
  );
};

export default Index;