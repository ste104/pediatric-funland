import { GraduationCap, Award, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="sobre" className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">
          Minha História
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <Card className="animate-float">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <GraduationCap className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">Formação</h3>
                </div>
                <p className="text-gray-600">
                  Formada em Medicina pela USP, com especialização em Pediatria e mestrado em Saúde da Criança.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-float" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Award className="h-8 w-8 text-accent" />
                  <h3 className="text-xl font-semibold">Experiência</h3>
                </div>
                <p className="text-gray-600">
                  Mais de 15 anos de experiência em pediatria, com passagem pelos principais hospitais do país.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-float" style={{ animationDelay: "0.4s" }}>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Heart className="h-8 w-8 text-secondary-dark" />
                  <h3 className="text-xl font-semibold">Missão</h3>
                </div>
                <p className="text-gray-600">
                  Dedicada a proporcionar o melhor cuidado e atenção para cada criança, tratando cada paciente como único.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1485833077593-4278bba3f11f"
              alt="Doutora com paciente"
              className="rounded-lg shadow-xl animate-float"
            />
            <div className="absolute -bottom-4 -right-4 bg-primary/10 w-32 h-32 rounded-full animate-float" style={{ animationDelay: "0.6s" }} />
            <div className="absolute -top-4 -left-4 bg-accent/10 w-24 h-24 rounded-full animate-float" style={{ animationDelay: "0.8s" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;