import { Heart, Star, Smile } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section id="inicio" className="pt-28 pb-16 bg-gradient-to-b from-secondary/30 to-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              Cuidando do seu pequeno com muito{" "}
              <span className="text-primary">amor</span> e carinho
            </h1>
            <p className="text-lg text-gray-600">
              Oferecemos atendimento pediátrico especializado e humanizado para garantir a saúde e o bem-estar do seu filho.
            </p>
            <div className="flex gap-4">
              <Button className="bg-primary hover:bg-primary-dark text-white">
                Agende uma Consulta
              </Button>
              <Button variant="outline">Conheça Nossos Serviços</Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-full bg-primary/10 animate-float">
              <img
                src="https://images.unsplash.com/photo-1485833077593-4278bba3f11f"
                alt="Criança sorrindo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="absolute top-0 -left-4 animate-float" style={{ animationDelay: "0.5s" }}>
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <div className="absolute bottom-8 -right-4 animate-float" style={{ animationDelay: "1s" }}>
              <Star className="h-8 w-8 text-accent" />
            </div>
            <div className="absolute top-1/2 -right-6 animate-float" style={{ animationDelay: "1.5s" }}>
              <Smile className="h-8 w-8 text-secondary-dark" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;