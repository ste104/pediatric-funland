import { Baby, Activity, Heart, BookOpen } from "lucide-react";
import { Card } from "./ui/card";

const services = [
  {
    icon: Baby,
    title: "Consultas Pediátricas",
    description: "Acompanhamento completo do desenvolvimento do seu filho",
  },
  {
    icon: Activity,
    title: "Exames de Rotina",
    description: "Avaliação periódica para garantir a saúde da criança",
  },
  {
    icon: Heart,
    title: "Vacinação",
    description: "Calendário vacinal completo e atualizado",
  },
  {
    icon: BookOpen,
    title: "Orientação aos Pais",
    description: "Suporte e informações para o cuidado adequado",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma variedade de serviços pediátricos para cuidar da saúde do seu filho em todas as fases do desenvolvimento.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow group">
              <div className="mb-4">
                <service.icon className="h-12 w-12 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;